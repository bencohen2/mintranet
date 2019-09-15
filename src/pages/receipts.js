// @flow
import React, {useState} from 'react';
import {Button} from 'baseui/button';
// import {ReceiptCard} from '../components/receipt-card/receipt-card';
import {Receipt1, Receipt2, Receipt3, Receipt4, Receipt5} from '../mocks/receipt';
import NewReceiptForm from '../components/new-receipt-form/new-receipt-form';
import {withFormik} from 'formik';
import {getInitialValues, handleSubmit, validate} from '../components/new-receipt-form';

const ReceiptsList = [Receipt1, Receipt2, Receipt3, Receipt4, Receipt5];

export const Receipts = () => {
    const [creatingNewReceipt, setCreatingNewReceipt] = useState(false);
    // if (creatingNewReceipt) {
        return <NewReceiptForm onSubmit={() => setCreatingNewReceipt(false)}/>
    // }
    // return  (
    // <>
    //     <Button onClick={() => setCreatingNewReceipt(!creatingNewReceipt)}>New receipt</Button>
    //     {/* {ReceiptsList.map(receipt => <ReceiptCard key={receipt.uuid} receipt={receipt} />)} */}
    // </>
    // )
}

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: getInitialValues,
    handleSubmit,
    validate,
})(Receipts);