// @flow
import React, {useState} from 'react';
import {CardContainer, BaseInfoContainer} from './styled-components';
import {ProgramType} from '../../types';
import {Toolbar} from './toolbar';
import {Details} from './details';
import {Block} from 'baseui/block';
import {StyledChevronUp, StyledChevronDown} from './styled-components';

type Props = {
    program: ProgramType
}

export const ProgramCard = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {program} = props;

    const renderChevron = () => {
        return isOpen ? <StyledChevronUp/> : <StyledChevronDown/>;
    }

    return  (
    <CardContainer>
        <BaseInfoContainer  onClick={() => setIsOpen(!isOpen)}>
            <Block>{program.eventName}</Block>
            <Block marginLeft="auto">{program.createdAt}</Block>
            <Block display="flex">{renderChevron()}</Block>
        </BaseInfoContainer>
    {isOpen && 
        <>
        <Toolbar program={program} />
        <Details program={program} />
        </>
    }
    </CardContainer>
    );
}