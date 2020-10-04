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
    postAdded:false, // 게시글 추가가 완료되었을 때 
}


export const addPostRequest={
    type:type.ADD_POST_REQUEST,
}

const dummyPost = {
    id : 2,
    User:{
        id:2,
        nickname:'Biden'
    },
    content:'I will ruin your career Donald. wait.',
    Images:[],
    Comments:[],
}

const reducer= (state = initialState , action)=>{
    switch(action.type){
        case type.ADD_POST_REQUEST:
            return {
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],
                postAdded:true,
            }
        case type.ADD_POST_SUCCESS:
            return{}
        case type.ADD_POST_FAIL:
            return{}
        default:
            return state;
    }
}

export default reducer;