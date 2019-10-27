// @flow
import React, {useState} from 'react';
import {type ThreadType} from '../../types';
import {
    Container,
    TitleContainer,
    CommentorContainer,
    ContentContainer,
    ResponsesContainer,
    ReplyContainer
} from './styled-components';
import ArrowRight from 'baseui/icon/arrow-right';
import {Textarea} from 'baseui/textarea';
import {Button} from 'baseui/button';
import {Block} from 'baseui/block';

type Props = {
    thread: ThreadType,
    index: number
};

export const Thread = (props: Props) => {
    const {
        thread: {
            content,
            title,
            createdAt,
            createdByName,
            createdByHouseName,
            upvotes,
            responses
        },
        index
    } = props;
    const [isReplying, setIsReplying] = useState(false);
    const upvoteText = `${upvotes} ${upvotes === 1 ? 'upvote' : 'upvotes'}`;
    return (
    <Container $index={index}>
        {title && <TitleContainer>{title}</TitleContainer>}
        <CommentorContainer>{createdByName}{' ∙ '}{createdByHouseName}{' ∙ '}{upvoteText}{' ∙ '}{createdAt}</CommentorContainer>
        <ContentContainer>{content}</ContentContainer>
        <ReplyContainer onClick={() => setIsReplying(true)}><ArrowRight />Reply</ReplyContainer>
        {isReplying && <Block display="flex"><Textarea  placeholder="reply here" rows={1}/><Button onClick={() => setIsReplying(false)}>Submit</Button></Block>}
        {responses.length > 0 && <ResponsesContainer>{responses.map(response => <Thread thread={response} index={index+1} />)}</ResponsesContainer>}
    </Container>
    );
}

export default Thread;