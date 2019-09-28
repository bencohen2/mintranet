// @flow
import React from 'react';
import {withFormik} from 'formik';
import {getInitialValues, handleSubmit, validate} from '../components/new-program-form';
import NewProgramForm from '../components/new-program-form/new-program-form';
import {compose} from 'redux';

export const Programs = () => {
    return <NewProgramForm/>;
}

const withPrograms = compose(
    withFormik({
        validateOnBlur: false,
        validateOnChange: false,
        mapPropsToValues: getInitialValues,
        handleSubmit,
        validate,
    })
)

export default withPrograms(Programs);