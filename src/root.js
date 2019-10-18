// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';
import {Helmet} from 'fusion-plugin-react-helmet-async';
import {RoutePaths} from './constants';
import * as Pages from './pages';
import SideNav from './components/side-nav/side-nav';
import {Content, Container, ContentWrapper, AccountMenuContainer} from './styled-components';
import AccountMenu from './components/account-menu/account-menu';
import {ThemeProvider} from 'baseui';
import {Theme} from './themes';

const root = (
  <ThemeProvider theme={Theme}>
    <Helmet>
      <title>Moishe House Mintranet</title>
      <style>
        {`
          html,body,#root{height:100%;box-sizing:border-box;}
          html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
          body{margin:0;}
          *, *:before, *:after {
            box-sizing: inherit;
          }
          button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
          input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
        `}
      </style>
    </Helmet>
    <Container>
      <AccountMenuContainer>
        <AccountMenu/>
      </AccountMenuContainer>
      <SideNav />
      <ContentWrapper>
        <Content>
          <Switch>
            <Route exact path={'/'} component={Pages.Programs} />
            <Route exact path={RoutePaths.Programs} component={Pages.Programs} />
            <Route exact path={RoutePaths.NewProgram} component={Pages.NewProgram} />
            <Route exact path={RoutePaths.Receipts} component={Pages.Receipts} />
            <Route exact path={RoutePaths.NewReceipt} component={Pages.NewReceipt} />
            <Route exact path={RoutePaths.Budget} component={Pages.Budget} />
            <Route exact path={RoutePaths.Contacts} component={Pages.Home} />
            <Route exact path={RoutePaths.Grants} component={Pages.Grants} />
            <Route exact path={RoutePaths.Resources} component={Pages.Resources} />
            <Route path={RoutePaths.ApplyForGrant} component={Pages.ApplyForGrant} />
            <Route component={Pages.PageNotFound} />
          </Switch>
        </Content>
      </ContentWrapper>
    </Container>
  </ThemeProvider>
);

export default root;