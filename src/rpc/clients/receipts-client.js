// @flow
import {createPlugin, createToken} from 'fusion-core';
import {Receipt1, Receipt2, Receipt3, Receipt4, Receipt5} from '../../mocks/receipt';

// $FlowFixMe
export const ReceiptsClientToken = createToken('ReceiptsClient');

// $FlowFixMe
const receiptsClientPlugin = createPlugin({
    deps: {},
    provides: ({}) => {
        return {
            getReceipts(args, ctx) {
                return {
                    receipts: [Receipt1, Receipt2, Receipt3, Receipt4, Receipt5]
                };
            }
        }
    }
});

export default receiptsClientPlugin;