import * as type from '../actions/post';
import produce from '../util/produce';

export const initialState={
    // 시퀄라이즈 속성에 맞게 다른 정보와 결합되는 것은 대문자로 표기함.
    mainPosts:[],
    hashTagPosts:[],
    hasMorePost:true,
    imagePaths:[], //이미지 업로드 할 때 이미지 경로 
    singlePost:null,

    target:'main', // 현재 타겟 

    loadPostloading:false, // 게시글 로딩  
    loadPostDone:false, 
    loadPostError:null,

    loadSinglePostloading:false, // 게시글 하나 로딩 
    loadSinglePostDone:false,
    loadSinglePostError:null,

    addPostloading:false, // 게시글 추가  
    addPostDone:false,
    addPostError:null,

    addCommentloading:false, // 댓글 추가 
    addCommentDone:false,
    addCommentError:null,

    
    removeCommentloading:false, // 댓글 삭제
    removeCommentDone:false,
    removeCommentError:null,

    removePostloading:false, // 게시글 삭제 
    removePostDone:false,
    removePostError:null,

    modifyPostloading:false, //게시글 수정 
    modifyPostDone:false,
    modifyPostError:null,

    likePostloading:false, // 게시글 좋아요   
    likePostDone:false, 
    likePostError:null,
    
    unlikePostloading:false, // 게시글 좋아요취소  
    unlikePostDone:false, 
    unlikePostError:null,

    uploadImagesloading:false, // 이미지 업로드 
    uploadImagesDone:false,
    uploadImagesError:null,

    retweetPostloading:false, // 게시글 리트윗 
    retweetPostDone:false,
    retweetPostError:null,

    unretweetPostloading:false, // 게시글 언리트윗 
    unretweetPostDone:false,
    unretweetPostError:null,
}


const reducer= (state = initialState , action)=>{
    return produce(state,draft=>{
        switch(action.type){
            case type.CHANGE_TARGET: // 타겟 변경 
                draft.target= action.data;

            case type.ADD_POST_REQUEST: // 포스트 추가 
                draft.addPostloading=true;
                draft.addPostDone=false;
                draft.addPostError=null;
                break;

            case type.ADD_POST_SUCCESS:
                draft.addPostloading=false;
                draft.addPostDone=true;
                draft.mainPosts.unshift(action.data);
                draft.imagePaths=[];
                break;

            case type.ADD_POST_FAIL:
                draft.addPostloading=false;
                draft.addPostError=action.error;
                break;

            case type.REMOVE_POST_REQUEST: // 포스트 삭제 
                draft.removePostloading=true;
                draft.removePostDone=false;
                draft.removePostError=null;
                break;

            case type.REMOVE_POST_SUCCESS:
                if(draft.target==='single'){
                     draft.singlePost=null; 
                    }
                else{
                    draft.mainPosts=draft.mainPosts.filter((v)=>v.id!==action.data.id);
                    }
                draft.removePostloading=false;
                draft.removePostDone=true;
                break;

            case type.REMOVE_POST_FAIL:
                draft.removePostloading=false;
                draft.removePostError=action.error;
                break;

            case type.MODIFY_POST_REQUEST: // 포스트 수정 
                draft.modifyPostloading=true;
                draft.modifyPostDone=false;
                draft.modifyPostError=null;
                break;

            case type.MODIFY_POST_SUCCESS:
                draft.modifyPostloading=false;
                draft.modifyPostDone=true;
                if(draft.target==='single'){
                    draft.singlePost.content=action.data.content;
                }
                else{
                    const index= draft.mainPosts.findIndex((v)=>v.id===action.data.postId);
                    draft.mainPosts[index].content=action.data.content;
                }
                break;
            case type.MODIFY_POST_FAIL:
                draft.modifyPostloading=false;
                draft.modifyPostError=action.error;
                break;

             case type.ADD_COMMENT_REQUEST: // 커멘트 추가 
                 draft.addCommentloading=true;
                 draft.addCommentDone=false;
                 draft.addCommentError=null;
                 break;

            case type.ADD_COMMENT_SUCCESS:
                if(draft.target==='single'){
                    draft.singlePost.Comments.unshift(action.data);
                }
                else{
                    const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                    post.Comments.unshift(action.data);
                }
                draft.addCommentloading=false;
                draft.addCommentDone=true;
                break;

            case type.ADD_COMMENT_FAIL:
                draft.addCommentloading=false;
                draft.addCommentError=action.error;
                break;

            case type.REMOVE_COMMENT_REQUEST: // 커멘트 삭제 
                draft.removeCommentloading=true;
                draft.removeCommentDone=false;
                draft.removeCommentError=null;
                break;

            case type.REMOVE_COMMENT_SUCCESS:
                if(draft.target==='single'){
                    draft.singlePost.Comments=draft.singlePost.Comments.filter((v)=>v.id!==action.data.commentId);
                }
                else{
                    const idx = draft.mainPosts.findIndex(v=>v.id === action.data.postId);
                    draft.mainPosts[idx].Comments=draft.mainPosts[idx].Comments.filter((v)=>v.id!==action.data.commentId);
                }
                draft.removeCommentloading=false;
                draft.removeCommentDone=true;
                break;

            case type.REMOVE_COMMENT_FAIL:
                draft.removeCommentloading=false;
                draft.removeCommentError=action.error;
                break;

                // multiple 포스트 로딩 
            case type.LOAD_USER_POST_REQUEST:
            case type.LOAD_LIKED_POST_REQUEST:
            case type.LOAD_HASHTAG_REQUEST:
            case type.LOAD_POST_REQUEST:
                draft.loadPostloading=true;
                draft.loadPostDone=false;
                draft.loadPostError=null;
                break;

            case type.LOAD_USER_POST_SUCCESS:
            case type.LOAD_LIKED_POST_SUCCESS:
            case type.LOAD_POST_SUCCESS:
                draft.loadPostloading=false;
                draft.loadPostDone=true;
                draft.mainPosts=draft.mainPosts.concat(action.data.posts);
                draft.hasMorePost=action.data.posts.length === 5;
                break;

            case type.LOAD_USER_POST_FAIL:
            case type.LOAD_LIKED_POST_FAIL:
            case type.LOAD_HASHTAG_FAIL:
            case type.LOAD_POST_FAIL:
                draft.loadPostloading=false;
                draft.loadPostError=action.error;
                break;

                // 해시태그 포스트 로딩 
            case type.LOAD_HASHTAG_SUCCESS:
                draft.loadPostloading=false;
                draft.loadPostDone=true;
                draft.hashTagPosts=draft.hashTagPosts.concat(action.data.posts);
                draft.hasMorePost=action.data.posts.length===5;
                break;

            case type.LOAD_SINGLE_POST_REQUEST:
                draft.loadSinglePostloading=true;
                draft.loadSinglePostDone=false;
                draft.loadSinglePostError=null;
                break;
            case type.LOAD_SINGLE_POST_SUCCESS:
                draft.singlePost=action.data;
                draft.loadSinglePostloading=false;
                draft.loadSinglePostDone=true;
                break;
            case type.LOAD_SINGLE_POST_FAIL:
                draft.loadSinglePostloading=false;
                draft.loadSinglePostError=action.error;
                break;

            case type.LIKE_POST_REQUEST: // 포스트 좋아요 
                draft.likePostloading=true;
                draft.likePostDone=false;
                draft.likePostError=null;
                break;

            case type.LIKE_POST_SUCCESS:{
                if(draft.target==='single'){
                    draft.singlePost.Likers.push({id:action.data.UserId});
                }
                else{
                    const post = draft.mainPosts.find((v)=> v.id === action.data.PostId);
                    post.Likers.push({id:action.data.UserId});
                }
                draft.likePostloading=false;
                draft.likePostDone=true;
                break;
            }
            case type.LIKE_POST_FAIL: 
                draft.likePostloading=false;
                draft.likePostError=action.error;
                break;

            case type.UNLIKE_POST_REQUEST: // 포스트 좋아요 취소 
                draft.unlikePostloading=true;
                draft.unlikePostDone=false;
                draft.unlikePostError=null;
                break;

            case type.UNLIKE_POST_SUCCESS:{
                if(draft.target==='single'){
                    draft.singlePost.Likers=draft.singlePost.Likers.filter((v)=>v.id!==action.data.UserId);
                }
                else{
                    const post = draft.mainPosts.find((v)=> v.id === action.data.PostId);
                    post.Likers=post.Likers.filter((v)=>v.id !== action.data.UserId);
                }
                draft.unlikePostloading=false;
                draft.unlikePostDone=true;
                break;
            }
            case type.UNLIKE_POST_FAIL:
                draft.unlikePostloading=false;
                draft.unlikePostError=action.error;
                break;

            case type.UPLOAD_IMAGES_REQUEST: // 포스트 이미지 업로드 
                draft.uploadImagesloading=true;
                draft.uploadImagesDone=false;
                draft.uploadImagesError=null;
                break;

            case type.UPLOAD_IMAGES_SUCCESS:
                draft.imagePaths=action.data;
                draft.uploadImagesloading=false;
                draft.uploadImagesDone=true;
                break;

            case type.UPLOAD_IMAGES_FAIL:
                draft.uploadImagesloading=false;
                draft.uploadImagesError=action.error;
                break;
            
            case type.REMOVE_IMAGE:
                draft.imagePaths= draft.imagePaths.filter((v,i)=>i!==action.data);
                break;

            case type.RESET_IMAGE:
                draft.imagePaths=[];
                break;

            case type.RETWEET_POST_REQUEST: // 포스트 리트윗 
                draft.retweetPostloading=true;  
                draft.retweetPostDone=false;
                draft.retweetPostError=null;
                break;

            case type.RETWEET_POST_SUCCESS:
                if(draft.target==='main'){
                    draft.mainPosts.unshift(action.data);
                }
                draft.retweetPostloading=false;
                draft.retweetPostDone=true;
                break;

            case type.RETWEET_POST_FAIL:
                draft.retweetPostloading=false;
                draft.retweetPostError=action.error;
                break;

            case type.UNRETWEET_POST_REQUEST: // 포스트 리트윗 취소 
                draft.unretweetPostloading=true;
                draft.unretweetPostDone=false;
                draft.unretweetPostError=null;
                break;

            case type.UNRETWEET_POST_SUCCESS:
                draft.mainPosts=draft.mainPosts.filter((v)=>v.id!==action.data.id);
                draft.unretweetPostloading=false;
                draft.unretweetPostDone=true;
                break;
                
            case type.UNRETWEET_POST_FAIL:
                draft.unretweetPostloading=false;
                draft.unretweetPostError=action.error;
                break;
                 
            default:
                break;
        }
    })
}

export default reducer;