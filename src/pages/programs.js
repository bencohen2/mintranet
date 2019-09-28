// @flow
import React, {useState} from 'react';
import {Button} from 'baseui/button';
import {ProgramCard} from '../components/program-card/program-card';
import {Program1, Program2, Program3, Program4, Program5} from '../mocks/program';
import NewProgramForm from '../components/new-program-form/new-program-form';
import {withFormik} from 'formik';
import {getInitialValues, handleSubmit, validate} from '../components/new-program-form';
import {RpcIds} from '../constants';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {prepared} from 'fusion-react';

export const Programs = (props) => {
    const {programs} = props;
    const [creatingNewProgram, setCreatingNewProgram] = useState(false);    
    if (creatingNewProgram) {
        return <NewProgramForm onSubmit={() => setCreatingNewProgram(false)}/>
    }
    return  (
    <>
        <Button onClick={() => setCreatingNewProgram(!creatingNewProgram)}>New program</Button>
        {programs.isLoading && <p>Loading...</p>}
        {programs && programs.programs && programs.programs.map(program => <ProgramCard key={program.uuid} program={program} />)}
    </>
    )
}

const withPrograms = compose(
    withRPCRedux(RpcIds.getPrograms),
    connect(state => {
        return {programs: state.programs};
    }),
    prepared(async ({getPrograms}) => {
        return getPrograms();
    }),
    withFormik({
        validateOnBlur: false,
        validateOnChange: false,
        mapPropsToValues: getInitialValues,
        handleSubmit,
        validate,
    })
)

export default withPrograms(Programs);