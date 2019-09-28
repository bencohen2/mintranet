// @flow
import {createRPCReducer} from 'fusion-rpc-redux';
import {RpcIds} from '../constants';

export const getProgramsReducer = createRPCReducer(
    RpcIds.getPrograms,
    {
        start: (state, action) => {
            return {
                isLoading: true,
                programs: [],
                error: false
            };
        },
        success: (state, action) => {
            return {
                isLoading: false,
                programs: action.payload ? action.payload.programs : [],
                error: false
            };
        },
        error: (state, action) => {
            return {
                isLoading: false,
                programs: [],
                error: true
            };
        }
    }
);

export const reducer = getProgramsReducer;