import {combineReducers} from 'redux';
import {reducer as ProgramsReducer, actions as ProgramsActions} from './programs';
import {reducer as ReceiptsReducer} from './receipts';

export const reducers = {
    programs: ProgramsReducer,
    receipts: ReceiptsReducer
};

export const actions = {
    programs: ProgramsActions
};

export const reducer = combineReducers(reducers);