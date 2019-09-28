// @flow
import React, {useState} from 'react';
import {Button} from 'baseui/button';
// import {ReceiptCard} from '../components/receipt-card/receipt-card';
import NewReceiptForm from '../components/new-receipt-form/new-receipt-form';
import {withFormik} from 'formik';
import {getInitialValues, handleSubmit, validate} from '../components/new-receipt-form';
import {RpcIds} from '../constants';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {prepared} from 'fusion-react';

export const Receipts = () => {
    const [creatingNewReceipt, setCreatingNewReceipt] = useState(false);
    if (creatingNewReceipt) {
        return <NewReceiptForm onSubmit={() => setCreatingNewReceipt(false)}/>
    }
    return  (
    <>
        <Button onClick={() => setCreatingNewReceipt(!creatingNewReceipt)}>New receipt</Button>
        {/* {ReceiptsList.map(receipt => <ReceiptCard key={receipt.uuid} receipt={receipt} />)} */}
    </>
    )
}

const withReceipts = compose(
    withRPCRedux(RpcIds.getReceipts),
    connect(state => {
        return {receipts: state.receipts};
    }),
    prepared(async ({getReceipts}) => {
        return getReceipts();
    }),
    withFormik({
        validateOnBlur: false,
        validateOnChange: false,
        mapPropsToValues: getInitialValues,
        handleSubmit,
        validate,
    })
)

export default withReceipts(Receipts);