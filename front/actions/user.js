// USER 관련 액션
// 로그인 액션 
export const LOG_IN_REQUEST="LOG_IN_REQUEST";
export const LOG_IN_SUCCESS="LOG_IN_SUCCESS";
export const LOG_IN_FAIL="LOG_IN_FAIL";

// 로그아웃 액션 
export const LOG_OUT_REQUEST="LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS="LOG_OUT_SUCCESS";
export const LOG_OUT_FAIL="LOG_OUT_FAIL";


// 회원가입 액션

export const SIGN_UP_REQUEST ="SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS ="SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL="SIGN_UP_FAIL";

export const SIGN_UP_RESET="SIGN_UP_RESET"
// 내 포스트 등록 및 삭제 액션

export const ADD_POST_TO_ME="ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME="REMOVE_POST_OF_ME";

// 팔로우

export const FOLLOW_REQUEST ="FOLLOW_REQUEST";
export const FOLLOW_SUCCESS ="FOLLOW_SUCCESS";
export const FOLLOW_FAIL="FOLLOW_FAIL";

// 언팔로우
export const UNFOLLOW_REQUEST ="UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS ="UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAIL="UNFOLLOW_FAIL";

// 닉네임 변경

export const CHANGE_NICKNAME_REQUEST ="CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS ="CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAIL="CHANGE_NICKNAME_FAIL";

// 유저 로그인 복구 
export const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
export const LOAD_MY_INFO_SUCCESS="LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_FAIL="LOAD_MY_INFO_FAIL";


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

export const signUpRequestAction=(data)=>{
    return{
        type:SIGN_UP_REQUEST,
        data,
    }
}

export const signUpResetAction=()=>{
    return{
        type:SIGN_UP_RESET
    }
}


export const followRequestAction=(data)=>{
    return{
        type:FOLLOW_REQUEST,
        data,
    }
}

export const unfollowRequestAction=(data)=>{
    return{
        type:UNFOLLOW_REQUEST,
        data,
    }
}