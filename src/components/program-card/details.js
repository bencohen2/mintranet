// @flow
import React from 'react';
import {ProgramType} from '../../types';
import {Block} from 'baseui/block';
import {StyledCheck, StyledDelete} from './styled-components';

type Props = {
    program: ProgramType
}

export const Details = (props: Props) => {
    const {program} = props;
    return <>
        <Block>Description: {program.description}</Block>
        <BooleanDisplay name="Submitted photos?" value={program.submittedPhotos}/>
        <BooleanDisplay name="Submitted receipts?" value={program.submittedPhotos}/>
        <BooleanDisplay name="Submitted attendees?" value={program.submittedPhotos}/>
    </>;
};

type BooleanDisplayProps = {
    name: string,
    value: boolean
}
const BooleanDisplay = ({name, value}: BooleanDisplayProps) => {
    return (
    <Block display="flex">
        <Block>{name}</Block>
        {value ? <StyledCheck/> : <StyledDelete/>}
    </Block>
    );
}