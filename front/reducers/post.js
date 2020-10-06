import * as type from '../actions/post';
import shortid from 'shortid';
import produce from 'immer';

export const initialState={
    // 시퀄라이즈 속성에 맞게 다른 정보와 결합되는 것은 대문자로 표기함.

    mainPosts:[
        {
            id:1,
            User:{
                id:1,
                nickname:'Trump'
            },
            content: 'Hello! This is Donald Trump who is addicted to Twitter #COVID19',
            Images:[
                {
                    id:shortid.generate(),
                    src:'https://cdn.cnn.com/cnnnext/dam/assets/180925135532-gfx-twitter-donald-trump-tweet.jpg'
                },
               {
                    id:shortid.generate(),
                    src:'https://scitechdaily.com/images/Trump-Twitter-777x518.jpg'
               }
        ],
            Comments:[
                {
                id:shortid.generate(),
                User:{
                    nickname:'Obama',
                    id:'45445'
                },
                content:'Please Stop twitting Trump! this is my advice!'
               },
               {
                id:shortid.generate(),
                User:{
                    nickname:'Kanye West',
                    id:'5656'
                },
                content:'I love you.'
            }
           ]
        },
    ],
    createdAt:new Date(),
    imagePaths:[], //이미지 업로드 할 때 이미지 경로 
    addPostloading:false, 
    addPostDone:false, // 게시글 추가가 완료되었을 때 
    addPostError:null,
    addCommentloading:false,
    addCommentDone:false,
    addCommentError:null,
    removePostloading:false,
    removePostDone:false,
    removePostError:null,
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

            default:
                break;
        }
    })
}

export default reducer;