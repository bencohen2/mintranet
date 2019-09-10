// @flow
import React from 'react';
import {Button} from 'baseui/button';
import {withRouter} from 'fusion-plugin-react-router';
import {RoutePaths} from '../constants';

export const Receipts = (props) => {
    return <Button onClick={() => props.history.push(RoutePaths.NewReceipt)}>New receipt</Button>
}

export default withRouter(Receipts);