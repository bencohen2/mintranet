// @flow
import React, {useState} from 'react';
import {RpcIds} from '../constants';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {prepared} from 'fusion-react';
import {PageContainer, PageTitle} from '../components/shared/styled-components';
import {ReceiptCard} from '../components/receipt-card/receipt-card';
import {type ReceiptType} from '../types';
import {Block} from 'baseui/block';
import DateRangePicker from '../components/shared/date-range-picker';
import {NewReceiptButton} from '../components/shared/new-button';
import { Checkbox } from "baseui/checkbox";

type Props = {
    Receipt: ReceiptType
}

export const Receipts = (props) => {
    const {receipts, history} = props;
    const [isFilteringByPhotos, setIsFilteringByPhotos] = useState(false);
    const [isFilteringByAccepted, setIsFilteringByAccepted] = useState(false);
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
              <Block display="flex" flexDirection="column" marginLeft="auto" marginRight="auto">
                    <Checkbox checked={isFilteringByPhotos}>Receipts without photos</Checkbox>
                    <Checkbox checked={isFilteringByAccepted}>Receipts not accepted</Checkbox>
                </Block>
            <Block marginLeft="auto">
                <NewReceiptButton text="New receipt" />
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