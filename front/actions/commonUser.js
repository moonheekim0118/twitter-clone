
// 유저 정보 로딩
export const LOAD_USER_INFO_REQUEST = "LOAD_USER_INFO_REQUEST";
export const LOAD_USER_INFO_SUCCESS="LOAD_USER_INFO_SUCCESS";
export const LOAD_USER_INFO_FAIL="LOAD_USER_INFO_FAIL";


// 팔로워 , 팔로잉 목록 로딩 

export const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
export const LOAD_FOLLOWINGS_SUCCESS="LOAD_FOLLOWINGS_SUCCESS";
export const LOAD_FOLLOWINGS_FAIL="LOAD_FOLLOWINGS_FAIL";

export const LOAD_FOLLOWERS_REQUEST="LOAD_FOLLOWERS";
export const LOAD_FOLLOWERS_SUCCESS="LOAD_FOLLOWERS_SUCCESS";
export const LOAD_FOLLOWERS_FAIL="LOAD_FOLLOWERS_FAIL";


export const loadUserInfoAction=(data)=>{
    return {
        type: LOAD_USER_INFO_REQUEST,
        data,
    }
}


export const loadFollowingsAction=(data)=>{
    return {
        type:LOAD_FOLLOWINGS_REQUEST,
        data,
    }
}

export const loadFollowersAction=(data)=>{
    return {
        type:LOAD_FOLLOWERS_REQUEST,
        data,
    }
}