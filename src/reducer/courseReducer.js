import initialState from './initialState';
 import * as types from '../actions/types';


export default function courseReducer(state=initialState.course, action){
    switch(action.type){
        case types.LOAD_COURSE_SUCCESS:
        return action.courses;

        case types.UPDATE_COURSE_SUCESS:
        return [...state, Object.assign({},action.course)];
        
        case types.CREATE_COURSE_SUCESS:
        return[...state.filter((course)=>course.id!=action.course.id),
        Object.assign({}, action.course)]; 

        default: return state;
    }
}

