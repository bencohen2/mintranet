// @flow

import React from 'react';
import {type ReceiptType} from '../../types';
import {ToolbarContainer, ToolbarButtonContainer} from './styled-components';
import {Button, KIND} from 'baseui/button';
import {actions} from '../../ducks';
import {connect} from 'react-redux';
type Props = {
    receipt: ReceiptType
};

export const Toolbar = (props: Props) => {
    const {deleteReceipt, receipt} = props;
    return <ToolbarContainer>
        <ToolbarButtonContainer><Button kind={KIND.secondary}>View program</Button></ToolbarButtonContainer>
        <ToolbarButtonContainer><Button kind={KIND.secondary}>Edit receipt</Button></ToolbarButtonContainer>
        <ToolbarButtonContainer><Button onClick={() => deleteReceipt(receipt.uuid)} kind={KIND.secondary}>Delete receipt</Button></ToolbarButtonContainer>
    </ToolbarContainer>;
}

export default connect(state => ({}), {
    deleteReceipt: actions.receipts.DeleteReceipt
})(Toolbar);