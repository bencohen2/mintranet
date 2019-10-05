import {combineReducers} from 'redux';
import {reducer as ProgramsReducer, actions as ProgramsActions} from './programs';
import {reducer as ReceiptsReducer, actions as ReceiptsActions} from './receipts';

export const reducers = {
    programs: ProgramsReducer,
    receipts: ReceiptsReducer
};

export const actions = {
    programs: ProgramsActions,
    receipts: ReceiptsActions
};

export const reducer = combineReducers(reducers);