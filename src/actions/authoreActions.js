import AuthorApi from '../api/mockAuthoreApi';
import * as types from './types';
import {beginAjaxCall} from './actionAjaxStatus';


export function loadAuthoreSuccess(authors){
    return {type:types.LOAD_AUTHORE_SUCCESS, authors };
}



export function loadAuthore(){
    return (dispatch)=> {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then((authors)=>{
        dispatch(loadAuthoreSuccess(authors));
    }).catch(error=>{throw (error);});
        
    };
}


