 import * as types from '../actions/types';
 import initialState from './initialState';
 

function actionTypesEndsWithSucess(type){
    return type.substring(type.length-8)=='_SUCCESS';
}

export default function AjaxStatusReducer(state=initialState.numAjaxClassInProgress, action){
    if(action.type == types.BEGIN_AJAX_CALL){
        return state + 1;
    }
    else if(actionTypesEndsWithSucess(action.type)){
        return state-1;
    }

    return state;

}