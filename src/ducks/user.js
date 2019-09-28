// @flow
import {createRPCReducer} from 'fusion-rpc-redux';
import {RpcIds} from '../constants';

export const getUserReducer = createRPCReducer(
    RpcIds.getUserInfo,
    {
        start: (state, action) => {
            return {
                isLoading: true,
                userInfo: {},
                error: false
            };
        },
        success: (state, action) => {
            return {
                isLoading: false,
                userInfo: action.payload ? action.payload.userInfo : [],
                error: false
            };
        },
        error: (state, action) => {
            return {
                isLoading: false,
                userInfo: {},
                error: true
            };
        }
    }
);

export const reducer = getUserReducer;