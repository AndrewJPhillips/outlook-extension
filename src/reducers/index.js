import {combineReducers} from "redux";

import mattersReducer from './mattersReducer';

const rootReducer = combineReducers({
    matters: mattersReducer
});

export default rootReducer;