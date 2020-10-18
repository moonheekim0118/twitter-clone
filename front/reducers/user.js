import * as type from '../actions/user';
import produce from 'immer';
// User === 로그인한 유저
export const initialState={
    loadMyInfoLoading:false, // 현재 로그인한 유저 정보 로딩 
    loadMyInfoDone:false,
    loadMyInfoError:null,

    isLoggedIn:false, // 로그인 
    isLoggingIn:false, 
    loginError:null, 

    isLoggingOut:false, // 로그아웃 
    isLoggedOut:false, 
    logoutError:null, 
    
    signUploading:false, // 회원가입 
    signUpDone:false, 
    signUpError:null, 
    
    followLoading:false, // 팔로잉 
    followDone:false,
    followError:null,
    
    unfollowLoading:false, // 언팔로잉 
    unfollowDone:false,
    unfollowError:null,
    
    changeNicknameLoading:false, // 닉네임 변경
    changeNicknameDone:false,
    changeNicknameError:null,

    me:null, // 현재 로그인한 유저 정보 --> 팔로우 / 팔로잉 id만 가져오기

}


const reducer= (state = initialState , action)=>{
    return produce(state,draft=>{
        switch(action.type){
            case type.LOAD_MY_INFO_REQUEST:
                draft.loadMyInfoLoading=true;
                draft.loadMyInfoDone=false;
                draft.loadMyInfoError=null;
                break;

            case type.LOAD_MY_INFO_SUCCESS:
                draft.me=action.data;
                if(draft.me){
                    draft.isLoggedIn=true;
                }
                draft.loadMyInfoDone=true;
                draft.loadMyInfoLoading=false;
                break;

            case type.LOAD_MY_INFO_FAIL:
                draft.loadMyInfoLoading=false;
                draft.loadMyInfoError=action.error;
                break;
                
            case type.LOG_IN_REQUEST:
                draft.isLoggingIn=true;
                draft.isLoggedIn=false;
                draft.loginError=null;
                break;

            case type.LOG_IN_SUCCESS:
                draft.me=action.data;
                draft.isLoggedIn=true;
                draft.isLoggingIn=false;
                break;

            case type.LOG_IN_FAIL:
                draft.isLoggingIn=false;
                draft.loginError=action.error;
                break;
                
            case type.LOG_OUT_REQUEST:
                draft.isLoggingOut=true;
                draft.isLoggedOut=false;
                draft.logoutError=null;
                break;

            case type.LOG_OUT_SUCCESS:
                draft.isLoggingOut=false;
                draft.isLoggedOut=true;
                draft.isLoggedIn=false;
                draft.me=null;
                break;

            case type.LOG_OUT_FAIL:
                draft.isLoggingOut=false;
                draft.logoutError=action.error;
                break;
    
            case type.SIGN_UP_REQUEST:
                draft.signUploading=true;
                draft.signUpDone=false;
                draft.signUpError=null;
                break;
                

            case type.SIGN_UP_SUCCESS:
                draft.signUploading=false;
                draft.signUpDone=true;
                break;

            case type.SIGN_UP_FAIL:
                draft.signUploading=false;
                draft.signUpError=action.error;
                break;

            case type.SIGN_UP_RESET:
                draft.signUpDone=false;
                break;
                
            case type.ADD_POST_TO_ME:
                draft.me.Posts.unshift({ id: action.data});
                break;

            case type.REMOVE_POST_OF_ME:
                draft.me.Posts= draft.me.Posts.filter((v)=>v.id!==action.data.id);
                break;

            case type.FOLLOW_REQUEST:
                draft.followloading=true;
                draft.followDone=false;
                draft.followError=null;
                break;        
    
            case type.FOLLOW_SUCCESS:
                draft.followloading=false;
                draft.followDone=true;
                draft.me.Followings.push(action.data);
                break;
    
            case type.FOLLOW_FAIL:
                draft.followloading=false;
                draft.followError=action.error;
                break;

            case type.UNFOLLOW_REQUEST:
                draft.unfollowloading=true;
                draft.unfollowDone=false;
                draft.unfollowError=null;
                draft.me.Followings=draft.me.Followings.filter((v)=>v.id!==action.data);
                break;      

            case type.UNFOLLOW_SUCCESS:
                draft.unfollowloading=false;
                draft.unfollowDone=true;
                break;

            case type.UNFOLLOW_FAIL:
                draft.unfollowloading=false;
                draft.unfollowError=action.error;
                break;

            case type.CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading=true;
                draft.changeNicknameDone=false;
                draft.changeNicknameError=null;
                break;

            case type.CHANGE_NICKNAME_SUCCESS:
                draft.changeNicknameLoading=false;
                draft.changeNicknameDone=true;
                draft.me.nickname=action.data;
                break;

            case type.CHANGE_NICKNAME_FAIL:
                draft.changeNicknameLoading=false;
                draft.changeNicknameError=action.error;
                break;
            default:
                break;
        }
    })
   
}

export default reducer;