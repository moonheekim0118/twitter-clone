import * as type from '../actions/post';
import shortid from 'shortid';
import produce from 'immer';

export const initialState={
    // 시퀄라이즈 속성에 맞게 다른 정보와 결합되는 것은 대문자로 표기함.

    mainPosts:[],
    createdAt:new Date(),
    hasMorePost:true,
    imagePaths:[], //이미지 업로드 할 때 이미지 경로 
    loadPostloading:false, // 게시글 로딩  
    loadPostDone:false, 
    loadPostError:null,
    addPostloading:false, // 게시글 추가  
    addPostDone:false,
    addPostError:null,
    addCommentloading:false, // 댓글 추가 
    addCommentDone:false,
    addCommentError:null,
    removePostloading:false, // 게시글 삭제 
    removePostDone:false,
    removePostError:null,
    modifyPostloading:false,
    modifyPostDone:false,
    modifyPostError:null,
}


export const addPostRequest=(data)=>{
   return{
    type:type.ADD_POST_REQUEST,
    data
   }
}

export const addCommentRequest=(data)=>{
    return{
        type:type.ADD_COMMENT_REQUEST,
        data
    }
}

export const removePostRequest=(data)=>{
    return{
        type:type.REMOVE_POST_REQUEST,
        data
    }
}

const dummyPostGenerator =(contents,id,nickname,postId)=>{
    return{
        id : postId,
        User:{
            id:id,
            nickname:nickname,
        },
        content:contents,
        Images:[],
        Comments:[],
    }
}

const dummyCommentGenerator=(contents,nickname,id)=>{
    return{
        id:shortid.generate(),
        User:{
            id:id,
            nickname:nickname,
        },
        content:contents,
    }
}

const reducer= (state = initialState , action)=>{
    return produce(state,draft=>{
        switch(action.type){
            case type.ADD_POST_REQUEST:
                draft.addPostloading=true;
                draft.addPostDone=false;
                draft.addPostError=null;
                break;

            case type.ADD_POST_SUCCESS:
                const dummyPost=dummyPostGenerator(action.data.text, action.data.id,action.data.nickname,action.data.postId);
                draft.addPostloading=false;
                draft.addPostDone=true;
                draft.mainPosts.unshift(dummyPost);
                break;

            case type.ADD_POST_FAIL:
                draft.addPostloading=false;
                draft.addPostError=action.error;
                break;
    
             case type.ADD_COMMENT_REQUEST:
                 draft.addCommentloading=true;
                 draft.addCommentDone=false;
                 draft.addCommentError=null;
                 break;

            case type.ADD_COMMENT_SUCCESS:
                const dummyComment= dummyCommentGenerator(action.data.text,action.data.nickname,action.data.id);
                const post=draft.mainPosts.find(x=>x.id===action.data.postId);
                post.Comments.unshift(dummyComment);
                draft.addCommentloading=false;
                draft.addCommentDone=true;
                break;

            case type.ADD_COMMENT_FAIL:
                draft.addCommentloading=false;
                draft.addCommentError=action.error;
                break;

            case type.REMOVE_POST_REQUEST:
                draft.removePostloading=true;
                draft.removePostDone=false;
                draft.removePostError=null;
                break;

            case type.REMOVE_POST_SUCCESS:
                draft.mainPosts=draft.mainPosts.filter((x)=>x.id!==action.data.id);
                draft.removePostloading=false;
                draft.removePostDone=true;
                break;

            case type.REMOVE_POST_FAIL:
                draft.removePostloading=false;
                draft.removePostError=action.error;
                break;

            case type.LOAD_POST_REQUEST:
                draft.loadPostloading=true;
                draft.loadPostDone=false;
                draft.loadPostError=null;
                break;

            case type.LOAD_POST_SUCCESS:
                draft.loadPostloading=false;
                draft.loadPostDone=true;
                draft.mainPosts=draft.mainPosts.concat(action.data);
                draft.hasMorePost=draft.mainPosts.length<50; 
                break;

            case type.LOAD_POST_FAIL:
                draft.loadPostloading=false;
                draft.loadPostError=action.error;
                break;
            case type.MODIFY_POST_REQUEST:
                draft.modifyPostloading=true;
                draft.modifyPostDone=false;
                draft.modifyPostError=null;
                break;
            case type.MODIFY_POST_SUCCESS:
                draft.modifyPostloading=false;
                draft.modifyPostDone=true;
                const index= draft.mainPosts.findIndex((x)=>x.id===action.data.id);
                draft.mainPosts[index].content=action.data.content;
                break;
            case type.MODIFY_POST_FAIL:
                draft.modifyPostloading=false;
                draft.modifyPostError=action.error;
                break;

            default:
                break;
        }
    })
}

export default reducer;