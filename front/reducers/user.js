import * as type from '../actions/user';
import produce from '../util/produce';

// User === 로그인한 유저
export const initialState = {
    loadMyInfoLoading: false, // 현재 로그인한 유저 정보 로딩
    loadMyInfoDone: false,
    loadMyInfoError: null,

    isLoggedIn: false, // 로그인
    isLoggingIn: false,
    loginError: null,

    isLoggingOut: false, // 로그아웃
    isLoggedOut: false,
    logoutError: null,

    signUploading: false, // 회원가입
    signUpDone: false,
    signUpError: null,

    followLoading: false, // 팔로잉
    followDone: false,
    followError: null,

    unfollowLoading: false, // 언팔로잉
    unfollowDone: false,
    unfollowError: null,

    updateMyInfoLoading: false, // 유저 인포 변경
    updateMyInfoDone: false,
    updateMyInfoErorr: null,

    uploadProfilePicLoading: false, // 프로필 사진 업로드
    uploadProfilePicDone: false,
    uploadProfilePicErorr: null,

    profilePicPath: null, // 프로필 사진 업로드 경로

    me: null, // 현재 로그인한 유저 정보 --> 팔로우 / 팔로잉 id만 가져오기
};

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            // 로그인한 유저 정보 불러오기
            case type.LOAD_MY_INFO_REQUEST:
                draft.loadMyInfoLoading = true;
                draft.loadMyInfoDone = false;
                draft.loadMyInfoError = null;
                break;

            case type.LOAD_MY_INFO_SUCCESS:
                draft.me = action.data;
                if (draft.me) {
                    draft.isLoggedIn = true;
                    draft.profilePicPath = draft.me.profilepic;
                }
                draft.loadMyInfoDone = true;
                draft.loadMyInfoLoading = false;
                break;

            case type.LOAD_MY_INFO_FAIL:
                draft.loadMyInfoLoading = false;
                draft.loadMyInfoError = action.error;
                break;

            // 로그인
            case type.LOG_IN_REQUEST:
                draft.isLoggingIn = true;
                draft.isLoggedIn = false;
                draft.loginError = null;
                break;

            case type.LOG_IN_SUCCESS:
                draft.me = action.data;
                draft.isLoggedIn = true;
                draft.isLoggingIn = false;
                break;

            case type.LOG_IN_FAIL:
                draft.isLoggingIn = false;
                draft.loginError = action.error;
                break;

            // 로그아웃
            case type.LOG_OUT_REQUEST:
                draft.isLoggingOut = true;
                draft.isLoggedOut = false;
                draft.logoutError = null;
                break;

            case type.LOG_OUT_SUCCESS:
                draft.isLoggingOut = false;
                draft.isLoggedOut = true;
                draft.isLoggedIn = false;
                draft.me = null;
                break;

            case type.LOG_OUT_FAIL:
                draft.isLoggingOut = false;
                draft.logoutError = action.error;
                break;

            // 회원가입
            case type.SIGN_UP_REQUEST:
                draft.signUploading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;

            case type.SIGN_UP_SUCCESS:
                draft.signUploading = false;
                draft.signUpDone = true;
                break;

            case type.SIGN_UP_FAIL:
                draft.signUploading = false;
                draft.signUpError = action.error;
                break;

            case type.SIGN_UP_RESET:
                draft.signUpDone = false;
                break;

            // 내 게시글 추가
            case type.ADD_POST_TO_ME:
                draft.me.Posts.unshift({ id: action.data });
                break;

            // 내 게시글 삭제
            case type.REMOVE_POST_OF_ME:
                draft.me.Posts = draft.me.Posts.filter(
                    (v) => v.id !== action.data.id
                );
                break;

            // 타 유저 팔로우
            case type.FOLLOW_REQUEST:
                draft.followloading = true;
                draft.followDone = false;
                draft.followError = null;
                break;

            case type.FOLLOW_SUCCESS:
                draft.followloading = false;
                draft.followDone = true;
                draft.me.Followings.push(action.data);
                break;

            case type.FOLLOW_FAIL:
                draft.followloading = false;
                draft.followError = action.error;
                break;

            // 타 유저 언팔로우
            case type.UNFOLLOW_REQUEST:
                draft.unfollowloading = true;
                draft.unfollowDone = false;
                draft.unfollowError = null;
                draft.me.Followings = draft.me.Followings.filter(
                    (v) => v.id !== action.data
                );
                break;

            case type.UNFOLLOW_SUCCESS:
                draft.unfollowloading = false;
                draft.unfollowDone = true;
                break;

            case type.UNFOLLOW_FAIL:
                draft.unfollowloading = false;
                draft.unfollowError = action.error;
                break;

            // 프로필 수정 ->  프로필 사진 업로드
            case type.UPLOAD_PROFILE_PIC_REQUEST:
                draft.uploadProfilePicLoading = true;
                draft.uploadProfilePicDone = false;
                draft.uploadProfilePicErorr = null;
                break;

            case type.UPLOAD_PROFILE_PIC_SUCCESS:
                draft.uploadProfilePicLoading = false;
                draft.uploadProfilePicDone = true;
                draft.profilePicPath = action.data; // path 에 저장
                break;

            case type.UPLOAD_PROFILE_PIC_FAIL:
                draft.uploadProfilePicLoading = false;
                draft.uploadProfilePicErorr = action.error;
                break;

            // 프로필 수정 -> 내 전체 정보 업데이트
            case type.UPDATE_MY_INFO_REQUEST:
                draft.updateMyInfoLoading = true;
                draft.updateMyInfoDone = false;
                draft.updateMyInfoErorr = null;
                break;

            case type.UPDATE_MY_INFO_SUCCESS:
                draft.updateMyInfoLoading = false;
                draft.updateMyInfoDone = true;
                draft.me.nickname = action.data.nickname; // 변경
                draft.me.profilepic = action.data.profilepic;
                break;

            case type.UPDATE_MY_INFO_FAIL:
                draft.updateMyInfoLoading = false;
                draft.updateMyInfoErorr = action.error;
                break;

            default:
                break;
        }
    });
};

export default reducer;
