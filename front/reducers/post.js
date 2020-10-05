import * as type from '../actions/post';

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
            Images:[{src:'https://cdn.cnn.com/cnnnext/dam/assets/180925135532-gfx-twitter-donald-trump-tweet.jpg'},
            {src:'https://scitechdaily.com/images/Trump-Twitter-777x518.jpg'}
        ],
            Comments:[
                {
                User:{
                    nickname:'Obama'
                },
                content:'Please Stop twitting Trump! this is my advice!'
               },
               {
                User:{
                    nickname:'Kanye West'
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
}


export const addPostRequest=(data)=>{
   return{
    type:type.ADD_POST_REQUEST,
    data
   }
}

export const addCommentRequest={
    type:type.ADD_COMMENT_REQUEST,
}

const dummyPost =(contents,id,nickname)=>{
    return{
        id : Math.floor(Math.random() * 100)+contents.length+id,
        User:{
            id:id,
            nickname:nickname,
        },
        content:contents,
        Images:[],
        Comments:[],
    }
}

const reducer= (state = initialState , action)=>{
    switch(action.type){
        case type.ADD_POST_REQUEST:
            const dummyData=dummyPost(action.data.text, action.data.id,action.data.nickname);
            return {
                ...state,
                mainPosts:[dummyData,...state.mainPosts],
                addPostloading:true,
                addPostDone:false,
                addPostError:null,
            }
        case type.ADD_POST_SUCCESS:
            return{
                ...state,
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
        case type.ADD_POST_SUCCESS:
            return{
                addCommentloading:false,
                addCommentDone:true,
                addCommentError:null,
            }
        case type.ADD_POST_FAIL:
            return{
                addCommentloading:false,
                addCommentDone:false,
                addCommentError:action.error
            }
        default:
            return state;
    }
}

export default reducer;