import * as type from '../actions/user';

export const initialState={
    isLoggedIn:false, // 로그인 완료 
    isLoggingIn:false, // 로그인 시도중 
    isLoggingOut:false, // 로그아웃 시도중 
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


const reducer= (state = initialState , action)=>{
    switch(action.type){
        case type.LOG_IN_REQUEST:
            return{
                ...state,
                isLoggingIn:true,
            }
        case type.LOG_IN_SUCCESS:
            return{
                ...state,
                isLoggingIn:false,
                isLoggedIn:true,
                me:{...action.data, nickname:'도람뿌'},
            }
        case type.LOG_IN_FAIL:
            return{ ...state,
                isLoggingIn:false,
                isLoggedIn:false,
            }
        case type.LOG_OUT_REQUEST:
            return{
                ...state,
                isLoggingOut:true,
            }
        case type.LOG_OUT_SUCCESS:
            return{
                ...state,
                isLoggingOut:false,
                isLoggedIn:false,
                me:null
            }
        case type.LOG_OUT_FAIL:
            return{
                ...state,
                isLoggingOut:false
            }
        default:
            return state;
    }
}

export default reducer;