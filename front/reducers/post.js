export const initialState={
    // 시퀄라이즈 속성에 맞게 다른 정보와 결합되는 것은 대문자로 표기함.

    mainPosts:[
        {
            id:1,
            User:{
                id:1,
                nickname:'Trump'
            },
            content: 'Hello! This is Donald Trump who is addicted to Twitter',
            Images:[{src:'https://cdn.cnn.com/cnnnext/dam/assets/180925135532-gfx-twitter-donald-trump-tweet.jpg'}],
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
    imagePaths:[], //이미지 업로드 할 때 이미지 경로 
    postAdded:false, // 게시글 추가가 완료되었을 때 
}

const ADD_POST ='ADD_POST';
export const addPost={
    type:ADD_POST,
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
        case ADD_POST:
            return {
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],
                postAdded:true,
            }
        default:
            return state;
    }
}

export default reducer;