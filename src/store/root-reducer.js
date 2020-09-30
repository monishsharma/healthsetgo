import { combineReducers } from "redux";
import itemReducer from './reducers/itemReducer';
import UIReducer from './reducers/UIReducer'

const rootReducer = combineReducers({
    items: itemReducer,
    UI: UIReducer
});


export default rootReducer;