// @flow
import React, {useState} from 'react';
import {Button} from 'baseui/button';
import {ProgramCard} from '../components/program-card/program-card';
import {Program1, Program2, Program3, Program4, Program5} from '../mocks/program';
import NewProgramForm from '../components/new-program-form/new-program-form';
import {withFormik} from 'formik';
import {getInitialValues, handleSubmit, validate} from '../components/new-program-form';

const ProgramsList = [Program1, Program2, Program3, Program4, Program5];

export const Programs = (props) => {
    const [creatingNewProgram, setCreatingNewProgram] = useState(false);
    // if (creatingNewProgram) {
        return <NewProgramForm onSubmit={() => setCreatingNewProgram(false)}/>
    // }
    // return  (
    // <>
    //     <Button onClick={() => setCreatingNewProgram(!creatingNewProgram)}>New program</Button>
    //     {ProgramsList.map(program => <ProgramCard key={program.uuid} program={program} />)}
    // </>
    // )
}

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: getInitialValues,
    handleSubmit,
    validate,
})(Programs);