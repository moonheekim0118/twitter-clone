import * as type from '../actions/post';
import shortid from 'shortid';

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

const dummyPostGenerator =(contents,id,nickname)=>{
    return{
        id : shortid.generate(),
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
    switch(action.type){
        case type.ADD_POST_REQUEST:
            return {
                ...state,
                addPostloading:true,
                addPostDone:false,
                addPostError:null,
            }
        case type.ADD_POST_SUCCESS:
            const dummyPost=dummyPostGenerator(action.data.text, action.data.id,action.data.nickname);
            return{
                ...state,
                mainPosts:[dummyPost,...state.mainPosts],
                addPostloading:false,
                addPostDone:true,
                addPostError:null,
            }
        case type.ADD_POST_FAIL:
            return{
                addPostloading:false,
                addPostDone:false,
                addPostError:action.error
            }

         case type.ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentloading:true,
                addCommentDone:false,
                addCommentError:null,
            }
        case type.ADD_COMMENT_SUCCESS:
            const dummyComment= dummyCommentGenerator(action.data.text,action.data.nickname,action.data.id);
            const postId=action.data.postId; 
            let postData=[...state.mainPosts];
            let index=postData.findIndex(x=>x.id===postId);
            postData[index].Comments.unshift(dummyComment);
            return{
                ...state,
                mainPosts:postData,
                addCommentloading:false,
                addCommentDone:true,
                addCommentError:null,
            }
        case type.ADD_COMMENT_FAIL:
            return{
                ...state,
                addCommentloading:false,
                addCommentDone:false,
                addCommentError:action.error
            }
        case type.REMOVE_POST_REQUEST:
            return{
                ...state,
                removePostloading:true,
                removePostDone:false,
                removePostError:null, 
            }
        case type.REMOVE_POST_SUCCESS:
            postData=[...state.mainPosts];
            let newPostData=postData.filter((x)=>x.id!==action.data.id);
            return{
                ...state,
                mainPosts:newPostData,
                removePostloading:false,
                removePostDone:true,
                removePostError:null, 
            }
        case type.REMOVE_POST_FAIL:
            return{
                ...state,
                removePostloading:false,
                removePostDone:false,
                removePostError:action.error, 
            }
        default:
            return state;
    }
}

export default reducer;