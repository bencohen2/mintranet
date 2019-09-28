import {combineReducers} from 'redux';
import {reducer as ProgramsReducer} from './programs';
import {reducer as ReceiptsReducer} from './receipts';

export const reducers = {
    programs: ProgramsReducer,
    receipts: ReceiptsReducer
};

export const reducer = combineReducers(reducers);