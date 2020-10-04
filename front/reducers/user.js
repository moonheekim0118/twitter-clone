export const initialState={
    isLoggedIn:false, // 로그인 완료 
    isLoggingIn:false, // 로그인 시도중 
    isLoggingOut:false, // 로그아웃 시도중 
    me:null,
    signUpData:{},
    loginData:{}
}

// 로그인 액션 
const LOG_IN_REQUEST="LOG_IN_REQUEST";
const LOG_IN_SUCCESS="LOG_IN_SUCCESS";
const LOG_IN_FAIL="LOG_IN_FAIL";

// 로그아웃 액션 
const LOG_OUT_REQUEST="LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS="LOG_OUT_SUCCESS";
const LOG_OUT_FAIL="LOG_OUT_FAIL";


export const loginRequestAction = (data)=>{
    return {
        type:LOG_IN_REQUEST,
        data,
    }
};


export const logoutRequestAction = (data)=>{
    return {
        type:LOG_OUT_REQUEST,
        data,
    }
};


const reducer= (state = initialState , action)=>{
    switch(action.type){
        case LOG_IN_REQUEST:
            return{
                ...state,
                isLoggingIn:true,
            }
        case LOG_IN_SUCCESS:
            return{
                ...state,
                isLoggingIn:false,
                isLoggedIn:true,
                me:{...action.data, nickname:'도람뿌'},
            }
        case LOG_IN_FAIL:
            return{ ...state,
                isLoggingIn:false,
                isLoggedIn:false,
            }
        case LOG_OUT_REQUEST:
            return{
                ...state,
                isLoggingOut:true,
            }
        case LOG_OUT_SUCCESS:
            return{
                ...state,
                isLoggingOut:false,
                isLoggedIn:false,
                me:null
            }
        case LOG_OUT_FAIL:
            return{
                ...state,
                isLoggingOut:false
            }
        default:
            return state;
    }
}

export default reducer;