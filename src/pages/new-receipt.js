// @flow
import React from 'react';
import {withFormik} from 'formik';
import {getInitialValues, handleSubmit, validate} from '../components/new-receipt-form';
import NewReceiptForm from '../components/new-receipt-form/new-receipt-form';
import {compose} from 'redux';
import {PageContainer} from '../components/shared/styled-components';

export const Receipts = () => {
    return <PageContainer><NewReceiptForm/></PageContainer>;
}

const withReceipts = compose(
    withFormik({
        validateOnBlur: false,
        validateOnChange: false,
        mapPropsToValues: getInitialValues,
        handleSubmit,
        validate,
    })
)

export default withReceipts(Receipts);