// @flow
import React, {useState} from 'react';
import {BaseInfoContainer} from './styled-components';
import Toolbar from './toolbar';
import {Details} from './details';
import {Block} from 'baseui/block';
import {StyledChevronUp, StyledChevronDown} from './styled-components';
import {CardContainer} from '../shared/styled-components';

export const ProgramCard = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {program} = props;

    const renderChevron = () => {
        return isOpen ? <StyledChevronUp/> : <StyledChevronDown/>;
    }

    return  (
    <CardContainer $isOpen={isOpen}>
        <BaseInfoContainer  onClick={() => setIsOpen(!isOpen)}>
            <Block>{program.programName}</Block>
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