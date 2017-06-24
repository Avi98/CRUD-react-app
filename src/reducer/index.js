import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ActionStatuReducer from './ajaxStatusReducer';


const rootReducer =combineReducers({
    courses,
    authors,
    ActionStatuReducer
});
export default rootReducer;