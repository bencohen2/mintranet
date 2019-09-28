// @flow
import React from 'react';
import {Button} from 'baseui/button';
import {ProgramCard} from '../components/program-card/program-card';
import {RpcIds, RoutePaths} from '../constants';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {prepared} from 'fusion-react';
import {withRouter} from 'fusion-plugin-react-router';

export const Programs = (props) => {
    const {programs, history} = props;
    return  (
    <>
        <Button onClick={() => history.push(RoutePaths.NewProgram)}>New program</Button>
        {programs.isLoading && <p>Loading...</p>}
        {programs && programs.programs && programs.programs.map(program => <ProgramCard key={program.uuid} program={program} />)}
    </>
    )
}

const withPrograms = compose(
    withRouter,
    withRPCRedux(RpcIds.getPrograms),
    connect(state => {
        return {programs: state.programs};
    }),
    prepared(async ({getPrograms}) => {
        return getPrograms();
    })
)

export default withPrograms(Programs);