import * as type from '../actions/user';

export const initialState={
    isLoggedIn:false, // 로그인 완료 
    isLoggingIn:false, // 로그인 시도중 
    loginError:null, // 로그인 에러 
    isLoggingOut:false, // 로그아웃 시도중 
    isLoggedOut:false, // 로그아웃 완료
    logoutError:null, // 로그아웃 에러 
    signUploading:false, // 회원가입 시도중 
    signUpDone:false, // 회원가입 완료 
    signUpError:null, // 회원가입 에러 
    me:null,
    signUpData:{},
    loginData:{}
}


export const loginRequestAction = (data)=>{
    return {
        type:type.LOG_IN_REQUEST,
        data,
    }
};


export const logoutRequestAction = (data)=>{
    return {
        type:type.LOG_OUT_REQUEST,
        data,
    }
};

export const signUpRequestAction=(data)=>{
    return{
        type:type.SIGN_UP_REQUEST,
        data,
    }
}

const dummyData=(data)=>({
    ...data,
    id:2,
    nickname:'도람뿌',
    Posts:[],
    Followings:[],
    Followers:[],
});

const reducer= (state = initialState , action)=>{
    switch(action.type){

        // login
        case type.LOG_IN_REQUEST:
            return{
                ...state,
                isLoggingIn:true,
                isLoggedIn:false,
                loginError:null,
            }
        case type.LOG_IN_SUCCESS:
            const dummyUser=dummyData(action.data);
            return{
                ...state,
                me:dummyUser,
                isLoggingIn:false,
                isLoggedIn:true,
            }
        case type.LOG_IN_FAIL:
            return{ ...state,
                isLoggingIn:false,
                isLoggedIn:false,
                loginError:action.error,
            }

        // logout
        case type.LOG_OUT_REQUEST:
            return{
                ...state,
                isLoggingOut:true,
                isLoggedOut:false,
                logoutError:null,
            }
        case type.LOG_OUT_SUCCESS:
            return{
                ...state,
                isLoggingOut:false,
                isLoggedIn:false,
                isLoggedOut:true,
                me:null
            }
        case type.LOG_OUT_FAIL:
            return{
                ...state,
                isLoggingOut:false,
                isLoggedOut:false,
                logoutError:action.error,
            }

        // signup
        case type.SIGN_UP_REQUEST:
            return{
                ...state,
                signUploading:true,
                signUpDone:false,
                signUpError:null,
            }
        case type.SIGN_UP_SUCCESS:
            return{
                ...state,
                signUploading:false,
                signUpDone:true,
            }
        case type.SIGN_UP_FAIL:
            return{
                ...state,
                signUploading:false,
                signUpDone:false,
                signUpError:action.error,
            }

        case type.ADD_POST_TO_ME:
            return{
             ...state,
                me:{
                    ...state.me,
                    Posts: [{ id: action.data }, ...state.me.Posts]
                },
            }
        case type.REMOVE_POST_OF_ME:
            const newPosts = state.me.Posts.filter((v)=>v.id!==action.data.id);
            return{
                ...state,
                me:{
                    ...state.me,
                    Posts:newPosts,
                }
            }
        default:
            return state;
    }
}

export default reducer;