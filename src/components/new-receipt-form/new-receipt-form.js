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
    <Form>
        <FormControl label="Program Name">
            <Input 
                name={Fields.programName.name}
                id={Fields.programName.name}
                placeholder="Enter a program name" 
                value={values.programName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[Fields.programName.name]}
            />
        </FormControl>
        <FormControl label="Budget">
            <Select 
                options={BudgetOptions} 
            />
        </FormControl>
        <FormControl label="Amount">
            <Input 
                name={Fields.amount.name}
                id={Fields.amount.name}
                placeholder="Enter the receipt amount" 
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[Fields.amount.name]}
                type="number" 
            />
        </FormControl>
        <FormControl label="Description">
            <Input 
                name={Fields.description.name}
                id={Fields.description.name}
                placeholder="Enter a receipt description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[Fields.description.name]}
            />
        </FormControl>
        <FormControl label="Submitter">
            <Input
                name={Fields.submitter.name}
                id={Fields.submitter.name}
                placeholder="The submitter" 
                value={values.submitter}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[Fields.submitter.name]}
            />
        </FormControl>
        <FormControl label="Purchaser">
            <Input
                name={Fields.purchaser.name}
                id={Fields.purchaser.name}
                placeholder="The purchaser" 
                value={values.purchaser}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[Fields.purchaser.name]}
            />
        </FormControl>
        <FileUploader 
        />
        <Button>Save receipt</Button>
    </Form>
    );
};

export default connect(NewReceiptForm);

