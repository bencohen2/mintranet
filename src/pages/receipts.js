// @flow
import React from 'react';
import {Button} from 'baseui/button';
import {RpcIds, RoutePaths} from '../constants';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {prepared} from 'fusion-react';
import {PageContainer} from '../components/shared/styled-components';

export const Receipts = (props) => {
    const {receipts, history} = props;
    return  (
    <PageContainer>
        <Button onClick={() => history.push(RoutePaths.NewReceipt)}>New receipt</Button>
        {receipts.isLoading && <p>Loading...</p>}
        {/* {receipts && receipts.receipts && receipts.receipts.map(receipts => <ReceiptCard key={receipt.uuid} receipt={receipt} />)} */}
    </PageContainer>
    )
}

const withReceipts = compose(
    withRPCRedux(RpcIds.getReceipts),
    connect(state => {
        return {receipts: state.receipts};
    }),
    prepared(async ({getReceipts}) => {
        return getReceipts();
    })
)

export default withReceipts(Receipts);