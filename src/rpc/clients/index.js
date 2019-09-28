// @flow

import type {App} from 'fusion-core';
import ProgramsClientPlugin, {ProgramsClientToken} from './programs-client';
import ReceiptsClientPlugin, {ReceiptsClientToken} from './receipts-client';
import UserClientPlugin, {UserClientToken} from './user-client';

export default function registerPlugins(app: App) {
    app.register(ProgramsClientToken, ProgramsClientPlugin);
    app.register(ReceiptsClientToken, ReceiptsClientPlugin);
    app.register(UserClientToken, UserClientPlugin);
}