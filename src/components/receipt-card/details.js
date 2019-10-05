// @flow
import React from 'react';
import {ReceiptType} from '../../types';
import {Block} from 'baseui/block';
import {DetailDisplayContainer, DetailsContainer} from './styled-components';
import {StyledCheck, StyledDelete} from '../shared/styled-components';
import {styled} from 'baseui';

type Props = {
    receipt: ReceiptType
}

export const Details = (props: Props) => {
    const {receipt} = props;
    return <DetailsContainer>
        <BooleanDisplay positive="Photos submitted" negative="Photos not submitted" value={receipt.submittedPhotos}/>
        <BooleanDisplay positive="Receipt approved" negative="Receipt not yet approved" value={receipt.approved}/>
    </DetailsContainer>;
};

type BooleanDisplayProps = {
    positive: string,
    negative: string,
    value: boolean
}
const BooleanDisplayContainer = styled('div', props => ({
    color: props.$value ? props.$theme.colors.mono1000 : props.$theme.colors.negative
}));
const BooleanDisplay = ({positive, negative, value}: BooleanDisplayProps) => {
    return (
        <DetailDisplayContainer>
            <Block display="flex" alignItems="center">
                {value ? <StyledCheck/> : <StyledDelete/>}
                <BooleanDisplayContainer $value={value}>{value ? positive : negative}</BooleanDisplayContainer>
            </Block>
        </DetailDisplayContainer>
    );
}
