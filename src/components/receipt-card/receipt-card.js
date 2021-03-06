// @flow
import React, {useState} from 'react';
import {BaseInfoContainer} from './styled-components';
import Toolbar from './toolbar';
import {Details} from './details';
import {Block} from 'baseui/block';
import {SectionContainer, ReceiptAmountContainer} from './styled-components';
import {CardContainer, StyledChevronUp, StyledChevronDown} from '../shared/styled-components';

export const ReceiptCard = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {receipt} = props;

    const renderChevron = () => {
        return isOpen ? <StyledChevronUp/> : <StyledChevronDown/>;
    }

    return  (
    <CardContainer $isOpen={isOpen}>
        <BaseInfoContainer  onClick={() => setIsOpen(!isOpen)}>
            <Block display="flex" justifyContent="center" alignItems="center">
                <Block marginRight="scale300">
                    {receipt.programName}{':'}
                </Block>
                <Block font="font300">
                    {receipt.description}
                </Block>
            </Block>
            <Block display="flex" marginLeft="auto">
                <ReceiptAmountContainer >${receipt.amount}</ReceiptAmountContainer>
                <Block>{receipt.createdAt}</Block>
            </Block>
            <Block display="flex">{renderChevron()}</Block>
        </BaseInfoContainer>
    {isOpen && 
        <>
        <SectionContainer><Toolbar receipt={receipt} /></SectionContainer>
        <SectionContainer><Details receipt={receipt} /></SectionContainer>
        </>
    }
    </CardContainer>
    );
}