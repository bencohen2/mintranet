// @flow
import React from 'react';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Select} from 'baseui/select';
import {Button} from 'baseui/button';
import {budgetOptions} from './util';
import FileUploader from './file-uploader';

export const NewReceiptForm = () => {
    return (
    <>
        <FormControl label="Program Name"><Input placeholder="Enter a program name"/></FormControl>
        <FormControl label="Budget"><Select options={budgetOptions} /></FormControl>
        <FormControl label="Amount"><Input type="number" placeholder="Amount" /></FormControl>
        <FormControl label="Description"><Input placeholder="Enter a receipt description"/></FormControl>
        <FormControl label="Submitter"><Input/></FormControl>
        <FormControl label="Purchaser"><Input/></FormControl>
        <FileUploader />
        <Button>Save receipt</Button>
    </>
    );
};

export default NewReceiptForm;

