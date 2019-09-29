// @flow

import React from 'react';
import {ProgramType} from '../../types';
import {ToolbarContainer} from './styled-components';
import {Button, KIND} from 'baseui/button';
import {Block} from 'baseui/block';
import {actions} from '../../ducks';
import {connect} from 'react-redux';

type Props = {
    program: ProgramType
};

export const Toolbar = (props: Props) => {
    const {deleteProgram, program} = props;
    return <ToolbarContainer>
        <Button kind={KIND.secondary}>Edit program</Button>
        <Block marginLeft="scale300">
            <Button onClick={() => deleteProgram(program.uuid)} kind={KIND.secondary}>Delete program</Button>
        </Block>
    </ToolbarContainer>;
}

export default connect(state => ({}), {
    deleteProgram: actions.programs.DeleteProgram
})(Toolbar);