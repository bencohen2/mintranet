// @flow
import {createRPCReducer} from 'fusion-rpc-redux';
import {RpcIds} from '../constants';
import {createAction, handleActions} from 'redux-actions';
import reduceReducers from 'reduce-reducers';

export const actionTypes = {
    DeleteReceipt: 'DeleteReceipt',
    CreateReceipt: 'CreateReceipt'
};

export const actions = {
    DeleteReceipt: createAction(actionTypes.DeleteReceipt),
    CreateReceipt: createAction(actionTypes.CreateReceipt)
};

export const deleteReceiptReducer = handleActions({
    [actionTypes.DeleteReceipt]: (state, action) => {
        return {
            ...state,
            receipts: state.receipts.filter(receipt => action.payload !== receipt.uuid)
        }
    },
    [actionTypes.CreateReceipt]: (state, action) => {
        state.receipts.unshift(action.payload);
        return state;
    }
}, {});

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

export const reducer = reduceReducers(
    state => state || {}, 
    getReceiptsReducer, deleteReceiptReducer
);