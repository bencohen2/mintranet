// @flow
import {createRPCReducer} from 'fusion-rpc-redux';
import {RpcIds} from '../constants';

export const getReceiptsReducer = createRPCReducer(
    RpcIds.getReceipts,
    {
        start: (state, action) => {
            return {
                isLoading: true,
                receipts: [],
                error: false
            };
        },
        success: (state, action) => {
            return {
                isLoading: false,
                receipts: action.payload ? action.payload.receipts : [],
                error: false
            };
        },
        error: (state, action) => {
            return {
                isLoading: false,
                receipts: [],
                error: true
            };
        }
    }
);

export const reducer = getReceiptsReducer;