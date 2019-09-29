// @flow
import {createRPCReducer} from 'fusion-rpc-redux';
import {RpcIds} from '../constants';
import {createAction, handleActions} from 'redux-actions';
import reduceReducers from 'reduce-reducers';

export const actionTypes = {
    DeleteProgram: 'DeleteProgram',
    CreateProgram: 'CreateProgram'
};

export const actions = {
    DeleteProgram: createAction(actionTypes.DeleteProgram),
    CreateProgram: createAction(actionTypes.CreateProgram)
};

export const deleteProgramReducer = handleActions({
    [actionTypes.DeleteProgram]: (state, action) => {
        return {
            ...state,
            programs: state.programs.filter(program => action.payload !== program.uuid)
        }
    },
    [actionTypes.CreateProgram]: (state, action) => {
        state.programs.unshift(action.payload);
        return state;
    }
}, {});

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
                programs: action.payload ? state.programs.concat(action.payload.programs.filter(program => !state.programs.includes(p => p.uuid === program.uuid))) : [],
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

export const reducer = reduceReducers(
    state => state || {}, 
    getProgramsReducer, deleteProgramReducer
);