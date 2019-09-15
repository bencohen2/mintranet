// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';
import {RoutePaths} from './constants';
import * as Pages from './pages';
import SideNav from './components/side-nav/side-nav';
import {Container, ContentContainer} from './styled-components';

const root = (
  <>
    <style>
      {`
        html,body,#root{height:100%;}
        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
        body{margin:0;}
        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
      `}
    </style>
    <Container>
      <SideNav />
      <ContentContainer>
        <Switch>
          <Route exact path={'/'} component={Pages.Home} />
          <Route exact path={RoutePaths.Home} component={Pages.Home} />
          <Route exact path={RoutePaths.Programs} component={Pages.Programs} />
          <Route exact path={RoutePaths.Receipts} component={Pages.Receipts} />
          <Route exact path={RoutePaths.NewReceipt} component={Pages.NewReceiptForm} />
          <Route exact path={RoutePaths.Budget} component={Pages.Home} />
          <Route exact path={RoutePaths.Contacts} component={Pages.Home} />
          <Route exact path={RoutePaths.Grants} component={Pages.Home} />
          <Route exact path={RoutePaths.Resources} component={Pages.Home} />
          <Route component={Pages.PageNotFound} />
        </Switch>
      </ContentContainer>
    </Container>
  </>
);

export default root;