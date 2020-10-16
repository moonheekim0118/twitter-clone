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


// LIKE POSt

export const LIKE_POST_REQUEST='LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS='LIKE_POST_SUCCESS';
export const LIKE_POST_FAIL='LIKE_POST_FAIL';

export const UNLIKE_POST_REQUEST='UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS='UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAIL='UNLIKE_POST_FAIL';


// 이미지 업로드

export const UPLOAD_IMAGES_REQUEST="UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS="UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAIL="UPLOAD_IMAGES_FAIL";

export const REMOVE_IMAGE="REMOVE_IMAGE";
export const RESET_IMAGE="RESET_IMAGE";

export const resetImageRequest=(data)=>{
    return{
        type:RESET_IMAGE,
        data,
    }
}

export const removeImageRequest=(data)=>{
    return{
        type:REMOVE_IMAGE,
        data,
    }
}
export const uploadImagesRequest=(data)=>{
    return{
        type:UPLOAD_IMAGES_REQUEST,
        data,
    }
}
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

 export const likePostRequest=(data)=>{
     return{
         type:LIKE_POST_REQUEST,
         data,
     }
 }

 export const unLikePostRequest=(data)=>{
    return{
        type:UNLIKE_POST_REQUEST,
        data,
    }
}