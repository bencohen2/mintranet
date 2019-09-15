// @flow

import React from 'react';
import {ProgramType} from '../../types';
import {ToolbarContainer} from './styled-components';
import {Button, KIND} from 'baseui/button';
import {Block} from 'baseui/block';

type Props = {
    program: ProgramType
};

export const Toolbar = (props: Props) => {
    return <ToolbarContainer>
        <Button kind={KIND.secondary}>Edit program</Button>
        <Block marginLeft="scale300">
            <Button kind={KIND.secondary}>Delete program</Button>
        </Block>
    </ToolbarContainer>;
}