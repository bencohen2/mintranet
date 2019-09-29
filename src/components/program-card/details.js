// @flow
import React from 'react';
import {ProgramType} from '../../types';
import {Block} from 'baseui/block';
import {StyledCheck, StyledDelete, DetailDisplayContainer} from './styled-components';
import {styled} from 'baseui';

type Props = {
    program: ProgramType
}

export const Details = (props: Props) => {
    const {program} = props;
    return <>
        <FieldDisplay name="Description" value={program.description} />
        <BooleanDisplay name="Photos" value={program.submittedPhotos}/>
        <BooleanDisplay name="Receipts" value={program.submittedPhotos}/>
        <BooleanDisplay name="Attendees" value={program.submittedPhotos}/>
    </>;
};

type FieldDisplayProps = {
    name: string,
    value: string
};
const FieldDisplay = ({name, value}: FieldDisplayProps) => {
    return <DetailDisplayContainer><b>{name}: </b>{value}</DetailDisplayContainer>
    
}

type BooleanDisplayProps = {
    name: string,
    value: boolean
}
const BooleanDisplayContainer = styled('div', props => ({
    color: props.$value ? props.$theme.colors.mono1000 : props.$theme.colors.negative
}));
const BooleanDisplay = ({name, value}: BooleanDisplayProps) => {
    const renderName = () => {
        if (value) {
            return `${name} submitted.`
        } else {
            return `${name} not submitted.`
        }
    }
    return (
        <DetailDisplayContainer>
            <Block display="flex" alignItems="center">
                {value ? <StyledCheck/> : <StyledDelete/>}
                <BooleanDisplayContainer $value={value}>{renderName()}</BooleanDisplayContainer>
            </Block>
        </DetailDisplayContainer>
    );
}
