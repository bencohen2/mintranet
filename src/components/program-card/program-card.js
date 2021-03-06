// @flow
import React, {useState} from 'react';
import {BaseInfoContainer} from './styled-components';
import Toolbar from './toolbar';
import {Details} from './details';
import {Block} from 'baseui/block';
import {SectionContainer} from './styled-components';
import {CardContainer, StyledChevronUp, StyledChevronDown} from '../shared/styled-components';

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
        <SectionContainer><Toolbar program={program} /></SectionContainer>
        <SectionContainer><Details program={program} /></SectionContainer>
        </>
    }
    </CardContainer>
    );
}