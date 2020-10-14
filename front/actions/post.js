// POST 관련 액션

export const LOAD_POST_REQUEST ='LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS='LOAD_POST_SUCCESS';
export const LOAD_POST_FAIL='LOAD_POST_FAIL';


export const ADD_POST_REQUEST ='ADD_POST_REQUEST';
export const ADD_POST_SUCCESS='ADD_POST_SUCCESS';
export const ADD_POST_FAIL='ADD_POST_FAIL';

export const REMOVE_POST_REQUEST='REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS='REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAIL='REMOVE_POST_FAIL';

export const MODIFY_POST_REQUEST='MODIFY_POST_REQUEST';
export const MODIFY_POST_SUCCESS='MODIFY_POST_SUCCESS';
export const MODIFY_POST_FAIL='MODIFY_POST_FAIL';

// COMMENT


export const ADD_COMMENT_REQUEST ='ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS='ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAIL='ADD_COMMENT_FAIL';


export const addPostRequest=(data)=>{
    return{
     type:ADD_POST_REQUEST,
     data
    }
 }
 
 export const addCommentRequest=(data)=>{
     return{
         type:ADD_COMMENT_REQUEST,
         data
     }
 }
 
 export const removePostRequest=(data)=>{
     return{
         type:REMOVE_POST_REQUEST,
         data
     }
 }
 
 export const modifyPostRequest=(data)=>{
     return {
         type:MODIFY_POST_REQUEST,
         data,
     }
 }