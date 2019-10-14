// @flow
import React, {useState} from 'react';
import {Button} from 'baseui/button';
import {ProgramCard} from '../../components/program-card/program-card';
import {RpcIds, RoutePaths} from '../../constants';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {prepared} from 'fusion-react';
import {withRouter} from 'fusion-plugin-react-router';
import {PageContainer, PageTitle} from '../../components/shared/styled-components';
import {Block} from 'baseui/block';
import DateRangePicker from '../../components/shared/date-range-picker';

export const Programs = (props) => {
    const {programs, history} = props;
    return  (
    <PageContainer>
        <PageTitle>Programs</PageTitle>
        <Block marginBottom="scale300" display="flex">
            <DateRangePicker 
                placeholder="Filter programs" 
                onChange={() => {}}
                quickSelect={true}
                initialValue={[]}
            />
            <Block marginLeft="auto">
                <Button onClick={() => history.push(RoutePaths.NewProgram)}>New program</Button>
            </Block>
        </Block>
        {programs.isLoading && <p>Loading...</p>}
        {programs && programs.programs && programs.programs.map(program => <ProgramCard key={program.uuid} program={program} />)}
    </PageContainer>
    )
}

const withPrograms = compose(
    withRouter,
    withRPCRedux(RpcIds.getPrograms),
    connect(state => {
        return {programs: state.programs};
    }),
    prepared(async ({programs, getPrograms}) => {
        return (!programs || !programs.programs || programs.programs.length === 0) && getPrograms();
    })
)

export default withPrograms(Programs);