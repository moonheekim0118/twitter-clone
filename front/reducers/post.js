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
            Images:[{src:'https://cdn.cnn.com/cnnnext/dam/assets/180925135532-gfx-twitter-donald-trump-tweet.jpg'}
            ,{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXNQRNyn_A9ltjVqMLt1ozo9mPGUj8anfeBw&usqp=CAU'},
            {src:'https://lh3.googleusercontent.com/proxy/iSDFc4ow1nLdefGP8XDJ0JfBTumLZKwKTqG1_kVYP6vwov_N7EkosUKlzccwm-Td2zCX4ImKDjqAeyvSI8J9Je2DuIMR6F8ct0GUNG6hJfZgd-c5W0DC0mc6_yfa5SAXFDlYZQmrxOF1aYiO_BIsf1PDEkSP48_jv2Yyx0dyoLe-oHRoJ419PZp_iaxGnfnXNVFuue8'}
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