// @flow
import React from 'react';
import {ProgramType} from '../../types';
import {Block} from 'baseui/block';
import {DetailDisplayContainer, DetailsContainer, ReceiptContainer} from './styled-components';
import {StyledCheck, StyledDelete} from '../shared/styled-components';
import {styled} from 'baseui';

type Props = {
    program: ProgramType
}

export const Details = (props: Props) => {
    const {program} = props;
    return (
        <DetailsContainer>
            <FieldDisplay name="Description" value={program.description} />
            <Block display="flex">
                <Block marginRight="auto">
                    <BooleanDisplay name="Photos" value={program.submittedPhotos}/>
                    <BooleanDisplay name="Receipts" value={program.submittedReceipts}/>
                </Block>
                <ReceiptContainer>
                    <FieldDisplay name="Submitted receipt total" value={`$${program.submittedReceiptTotal}`} />
                    <FieldDisplay name="Approved receipt total" value={`$${program.acceptedReceiptTotal}`} />
                </ReceiptContainer>
            </Block>
        </DetailsContainer>
    );
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
export const BooleanDisplay = ({name, value}: BooleanDisplayProps) => {
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
