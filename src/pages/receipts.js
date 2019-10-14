// @flow
import React from 'react';
import {Button} from 'baseui/button';
import {RpcIds, RoutePaths} from '../constants';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {prepared} from 'fusion-react';
import {PageContainer, PageTitle} from '../components/shared/styled-components';
import {ReceiptCard} from '../components/receipt-card/receipt-card';
import {type ReceiptType} from '../types';
import {Block} from 'baseui/block';
import DateRangePicker from '../components/shared/date-range-picker';

type Props = {
    Receipt: ReceiptType
}

export const Receipts = (props) => {
    const {receipts, history} = props;
    return  (
    <PageContainer>
        <PageTitle>Receipts</PageTitle>
        <Block marginBottom="scale300" display="flex">
            <DateRangePicker 
                placeholder="Filter receipts" 
                onChange={() => {}}
                quickSelect={true}
                initialValue={[]}
            />
            <Block marginLeft="auto">
                <Button onClick={() => history.push(RoutePaths.NewReceipt)}>New receipt</Button>
            </Block>
        </Block>
        {receipts.isLoading && <p>Loading...</p>}
        {receipts && receipts.receipts && receipts.receipts.map(receipt => <ReceiptCard key={receipt.uuid} receipt={receipt} />)}
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