import * as type from '../actions/user';

export const initialState={
    isLoggedIn:false, // 로그인 완료 
    isLoggingIn:false, // 로그인 시도중 
    loginError:null, // 로그인 에러 
    isLoggingOut:false, // 로그아웃 시도중 
    isLoggedOut:false, // 로그아웃 완료
    logoutError:null,
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

const dummyData=(data)=>({
    ...data,
    id:1,
    nickname:'도람뿌',
    Posts:[],
    Followings:[],
    Followers:[],
});

const reducer= (state = initialState , action)=>{
    switch(action.type){
        case type.LOG_IN_REQUEST:
            return{
                ...state,
                isLoggingIn:true,
                isLoggedIn:false,
                loginError:null,
            }
        case type.LOG_IN_SUCCESS:
            return{
                ...state,
                isLoggingIn:false,
                isLoggedIn:true,
                me:dummyData(action.data),
            }
        case type.LOG_IN_FAIL:
            return{ ...state,
                isLoggingIn:false,
                isLoggedIn:false,
                loginError:action.error,
            }
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
        default:
            return state;
    }
}

export default reducer;