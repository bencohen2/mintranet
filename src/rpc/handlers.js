// @flow
import {createPlugin} from 'fusion-core';
import {ProgramsClientToken} from './clients/programs-client';
import {ReceiptsClientToken} from './clients/receipts-client';

// $FlowFixMe
export default createPlugin({
    deps: {
        programsClient: ProgramsClientToken,
        receiptsClient: ReceiptsClientToken,
    },
    provides: ({
        programsClient,
        receiptsClient
    }) => ({
        ...programsClient,
        ...receiptsClient
    })
});