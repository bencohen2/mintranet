// @flow
import React from 'react';
import {withFormik} from 'formik';
import {getInitialValues, handleSubmit, validate} from '../components/new-program-form';
import NewProgramForm from '../components/new-program-form/new-program-form';
import {compose} from 'redux';
import {PageContainer} from '../components/shared/styled-components';
import {actions} from '../ducks';
import {connect} from 'react-redux';

export const Programs = ({createProgram}) => {
    return <PageContainer><NewProgramForm createProgram={createProgram}/></PageContainer>;
}

const withPrograms = compose(
    connect(
        state => ({}),
        {
            createProgram: actions.programs.CreateProgram
        }
    ),
    withFormik({
        validateOnBlur: false,
        validateOnChange: false,
        mapPropsToValues: getInitialValues,
        handleSubmit,
        validate,
    }),
)

export default withPrograms(Programs);