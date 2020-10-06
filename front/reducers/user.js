import * as type from '../actions/user';
import produce from 'immer';

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
    followLoading:false,
    followDone:false,
    followError:null,
    unfollowLoading:false,
    unfollowDone:false,
    unfollowError:null,
    changeNicknameLoading:false,
    changeNicknameDone:false,
    changeNicknameError:null,
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
    return produce(state,draft=>{
        switch(action.type){
            case type.LOG_IN_REQUEST:
                draft.isLoggingIn=true;
                draft.isLoggedIn=false;
                draft.loginError=null;
                break;

            case type.LOG_IN_SUCCESS:
                const dummyUser=dummyData(action.data);
                draft.me=dummyUser;
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
                break;
    
            case type.FOLLOW_FAIL:
                draft.followloading=false;
                draft.followError=action.error;
                break;

            case type.UNFOLLOW_REQUEST:
                draft.unfollowloading=true;
                draft.unfollowDone=false;
                draft.unfollowError=null;
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