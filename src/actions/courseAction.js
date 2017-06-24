import courseApi from '../api/mockCourseApi';
import * as types from './types';
import {beginAjaxCall} from './actionAjaxStatus';


export function loadCoursesSuccess(courses){
    return{type:types.LOAD_COURSE_SUCCESS, courses};
}

export function updateCourseSucess(course){
    return{type:types.UPDATE_COURSE_SUCESS, course};
}

export function createCourseSucess(course){
    return{type:types.CREATE_COURSE_SUCESS, course};
}

export function loadCourse(){
    return (dispatch)=>{
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then((courses) => {
            dispatch(loadCoursesSuccess(courses));

        }).catch(error=>{
            throw (error);

        });
    };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSucess(course)) :
        dispatch(createCourseSucess(course));
    }).catch(error => {
      
      throw(error);
    });
  };
}