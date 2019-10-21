// @flow
import React, {useState, useEffect} from 'react';
import {ProgramCard} from '../../components/program-card/program-card';
import {RpcIds, RoutePaths} from '../../constants';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {prepared} from 'fusion-react';
import {PageContainer, PageTitle} from '../../components/shared/styled-components';
import {Block} from 'baseui/block';
import DateRangePicker from '../../components/shared/date-range-picker';
import {NewProgramButton} from '../../components/shared/new-button';
import { Checkbox } from "baseui/checkbox";

export const Programs = (props) => {
    const {programs} = props;
    const [isFilteringByPhotos, setIsFilteringByPhotos] = useState(false);
    const [isFilteringByReceipts, setIsFilteringByReceipts] = useState(false);
    return  (
    <PageContainer>
        <PageTitle>Programs</PageTitle>
        <Block>
            <Block marginBottom="scale300" display="flex">
                <DateRangePicker 
                    placeholder="Filter programs by date" 
                    onChange={() => {}}
                    quickSelect={true}
                    initialValue={[]}
                />
                <Block display="flex" flexDirection="column" marginLeft="auto" marginRight="auto">
                    <Checkbox checked={isFilteringByPhotos}>Programs without photos</Checkbox>
                    <Checkbox checked={isFilteringByReceipts}>Programs without receipts</Checkbox>
                </Block>
                <Block marginLeft="auto">
                    <NewProgramButton text="New program" />
                </Block>
            </Block>
        </Block>
        {programs.isLoading && <p>Loading...</p>}
        {programs && programs.programs && programs.programs.map(program => <ProgramCard key={program.uuid} program={program} />)}
    </PageContainer>
    )
}

const withPrograms = compose(
    withRPCRedux(RpcIds.getPrograms),
    connect(state => {
        return {programs: state.programs};
    }),
    prepared(async ({programs, getPrograms}) => {
        return (!programs || !programs.programs || programs.programs.length === 0) && getPrograms();
    })
)

export default withPrograms(Programs);