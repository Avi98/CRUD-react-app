 import initialState from './initialState';
 import * as types from '../actions/types';
 


 export default function authoreReducer(state=initialState.author, action){
     switch(action.type){
         case types.LOAD_AUTHORE_SUCCESS:
         return action.authors;
 
      default : return state;
     }
 }