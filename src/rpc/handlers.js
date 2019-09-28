// @flow
import {createPlugin} from 'fusion-core';
import {ProgramsClientToken} from './clients/programs-client';
import {ReceiptsClientToken} from './clients/receipts-client';
import {UserClientToken} from './clients/user-client';

// $FlowFixMe
export default createPlugin({
    deps: {
        programsClient: ProgramsClientToken,
        receiptsClient: ReceiptsClientToken,
        userClient: UserClientToken
    },
    provides: ({
        programsClient,
        receiptsClient,
        userClient
    }) => ({
        ...programsClient,
        ...receiptsClient,
        ...userClient
    })
});