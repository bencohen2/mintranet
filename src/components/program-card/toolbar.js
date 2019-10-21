// @flow

import React from 'react';
import {ProgramType} from '../../types';
import {ToolbarContainer, ToolbarButtonContainer} from './styled-components';
import {Button, KIND} from 'baseui/button';
import {actions} from '../../ducks';
import {connect} from 'react-redux';
import {NewProgramButton} from '../shared/new-button';

type Props = {
    program: ProgramType
};

export const Toolbar = (props: Props) => {
    const {deleteProgram, program} = props;
    return <ToolbarContainer>
        <ToolbarButtonContainer>
            {program.submittedReceipts ? <Button kind={KIND.secondary}>View Receipts</Button> : <NewProgramButton kind={KIND.secondary} text="Add receipt"/>}</ToolbarButtonContainer>
        <ToolbarButtonContainer><Button kind={KIND.secondary}>Edit program</Button></ToolbarButtonContainer>
        <ToolbarButtonContainer><Button onClick={() => deleteProgram(program.uuid)} kind={KIND.secondary}>Delete program</Button></ToolbarButtonContainer>
    </ToolbarContainer>;
}

export default connect(state => ({}), {
    deleteProgram: actions.programs.DeleteProgram
})(Toolbar);