// @flow
import React from 'react';
import {Button} from 'baseui/button';
import {withRouter} from 'fusion-plugin-react-router';
import {RoutePaths} from '../constants';
import {ProgramCard} from '../components/program-card/program-card';

export const Programs = (props) => {
    return  (
    <>
        <Button onClick={() => props.history.push(RoutePaths.NewProgram)}>New program</Button>
        <ProgramCard/>
    </>
    )
}

export default withRouter(Programs);