import {combineReducers} from "redux";
import dragonListReducer from './dragonListReducer';
import titleReducer from './titleReducer';

//when combining reducers, each reducer needs to have an initial state

export const rootReducer = combineReducers({
    dragonList: dragonListReducer,
    title: titleReducer
})