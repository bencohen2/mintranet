// @flow
import React, {useState} from 'react';
import {BaseCardContainer} from './styled-components';
import {ProgramType} from '../../types';

type Props = {
    program: ProgramType
}

export const ProgramCard = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return <BaseCardContainer>ABC</BaseCardContainer>;
}