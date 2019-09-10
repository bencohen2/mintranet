// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';
import {RoutePaths} from './constants';
import * as Pages from './pages';
import SideNav from './components/side-nav/side-nav';

const root = (
  <>
    <SideNav />
    <Switch>
      <Route exact path={'/'} component={Pages.Home} />
      <Route exact path={RoutePaths.Home} component={Pages.Home} />
      <Route exact path={RoutePaths.Programs} component={Pages.Programs} />
      <Route exact path={RoutePaths.NewProgram} component={Pages.NewProgramForm} />
      <Route exact path={RoutePaths.Receipts} component={Pages.Receipts} />
      <Route exact path={RoutePaths.NewReceipt} component={Pages.NewReceiptForm} />
      <Route exact path={RoutePaths.Budget} component={Pages.Home} />
      <Route exact path={RoutePaths.Contacts} component={Pages.Home} />
      <Route exact path={RoutePaths.Grants} component={Pages.Home} />
      <Route exact path={RoutePaths.Resources} component={Pages.Home} />
      <Route component={Pages.PageNotFound} />
    </Switch>
  </>
);

export default root;