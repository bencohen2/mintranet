// @flow
import React from 'react';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Select} from 'baseui/select';
import {Button} from 'baseui/button';
import {BudgetOptions, Fields} from './util';
import FileUploader from './file-uploader';
import {Form} from '../shared/styled-components';
import {connect} from 'formik';

export const NewReceiptForm = (props) => {
    const {
        formik: {values, errors, setFieldValue, handleChange, handleBlur, handleSubmit: handleFormikSubmit}
    } = props;
    return (
    <Form onSubmit={handleFormikSubmit}>
        <FormControl label="Program Name" error={errors.programName}>
            <Input 
                name="programName"
                id="programName"
                placeholder="Enter a program name" 
                value={values.programName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.programName}
            />
        </FormControl>
        <FormControl label="Budget" error={errors.budget}>
            <Select 
                options={BudgetOptions}
                error={errors.budget}
            />
        </FormControl>
        <FormControl label="Amount" error={errors.amount}>
            <Input 
                name="amount"
                id="amount"
                placeholder="Enter the receipt amount" 
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.amount}
                type="number" 
            />
        </FormControl>
        <FormControl label="Description" error={errors.description}>
            <Input 
                name="description"
                id="description"
                placeholder="Enter a receipt description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.description}
            />
        </FormControl>
        <FormControl label="Submitter" error={errors.submitter}>
            <Input
                name="submitter"
                id="submitter"
                placeholder="The submitter" 
                value={values.submitter}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.submitter}
            />
        </FormControl>
        <FormControl label="Purchaser" error={errors.purchaser}>
            <Input
                name="purchaser"
                id="purchaser"
                placeholder="The purchaser" 
                value={values.purchaser}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.purchaser}
            />
        </FormControl>
        <FileUploader 
        />
        <Button type="submit">Save receipt</Button>
    </Form>
    );
};

export default connect(NewReceiptForm);

