// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import ReactReduxPlugin, {ReduxToken, ReducerToken} from 'fusion-plugin-react-redux';
import RPC, {RPCToken, RPCHandlersToken} from 'fusion-plugin-rpc';
import UniversalEventsPlugin, {UniversalEventsToken} from 'fusion-plugin-universal-events';
import {FetchToken} from 'fusion-tokens';
import CsrfProtectionPlugin, { CsrfIgnoreRoutesToken } from 'fusion-plugin-csrf-protection';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import unfetch from 'unfetch';
import reduxOptions from './redux';
import registerClientPlugins from './rpc/clients';
import RPCHandlersPlugin from './rpc/handlers';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);
  app.register(ReduxToken, ReactReduxPlugin);
  app.register(ReducerToken, reduxOptions.reducer);
  app.register(RPCToken, RPC);
  app.register(RPCHandlersToken, RPCHandlersPlugin);
  app.register(UniversalEventsToken, UniversalEventsPlugin);
  app.register(HelmetPlugin);
  app.enhance(FetchToken, CsrfProtectionPlugin);
  app.register(FetchToken, unfetch);
  registerClientPlugins(app);
  return app;
};
