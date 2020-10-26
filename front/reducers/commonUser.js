import * as type from '../actions/commonUser';
import produce from '../util/produce';
// 선택한 유저 정보 불러오는 곳 (including 로그인된 사용자)
// 유저정보에는 , id, nickname, Following 수 , Follower 수
// 작성 Post 수, Like Post 수가 들어있다.



export const initialState={
    loadUserInfoLoading:false, // 유저 로딩 
    loadUserInfoDone:false,
    loadUserInfoError:null,

    loadFollowingListLoading:false, // 팔로잉 목록
    loadFollowingListDone:false,
    loadFollowingListError:null,

    loadFollowerListLoading:false, // 팔로워 목록
    loadFollowerListDone:false,
    loadFollowerListError:null,

    loadUserPostLoading:false, // 해당 user가 작성한 포스트 목록 가져오기 
    loadUserPostDone:false,
    loadUserPostError:null,
    
    loadLikedPostLoading:false, // 해당 user가 좋아요 누른 포스트 목록 가져오기 
    loadLikedPostDone:false,
    loadLikedPostError:null,

    hasMoreFollowings:true,
    hasMoreFollowers:true, 
    hasMoerUserPosts:true,
    hasMoreLikedPosts:true,

    FollowingList:[],
    FollowerList:[],
    UserPosts:[],
    LikedPosts:[],

    userInfo:null, // 로딩된 유저 인포 저장
};


const reducer=(state= initialState, action)=>{
    return produce(state,draft=>{
        switch(action.type){
            case type.LOAD_USER_INFO_REQUEST:
                draft.loadUserInfoLoading=true;
                draft.loadUserInfoDone=false;
                draft.loadUserInfoError=null;
                break;
            case type.LOAD_USER_INFO_SUCCESS: 
                draft.userInfo=action.data;
                draft.loadUserInfoDone=true;
                draft.loadUserInfoLoading=false;
                break;
            case type.LOAD_USER_INFO_FAIL:
                draft.loadUserInfoLoading=false;
                draft.loadUserInfoError=action.error;
                break;

            case type.LOAD_FOLLOWINGS_REQUEST:
                draft.loadFollowingListLoading=true;
                draft.loadFollowingListDone=false;
                draft.loadFollowingListError=null;
                break;
            case type.LOAD_FOLLOWINGS_SUCCESS:
                draft.loadFollowingListLoading=false;
                draft.loadFollowingListDone=true;
                draft.FollowingList=draft.FollowingList.concat(action.data);
                draft.hasMoreFollowings=draft.FollowingList.length<draft.userInfo.Followings;
                break;
            case type.LOAD_FOLLOWINGS_FAIL:
                draft.loadFollowerListLoading=false;
                draft.loadFollowingListError=action.error;
                break;

            case type.LOAD_FOLLOWERS_REQUEST:
                draft.loadFollowersListLoading=true;
                draft.loadFollowersListDone=false;
                draft.loadFollowersListError=null;
                break;
            case type.LOAD_FOLLOWERS_SUCCESS:
                draft.loadFollowersListLoading=false;
                draft.loadFollowersListDone=true;
                draft.FollowerList=draft.FollowerList.concat(action.data);
                draft.hasMoreFollowers=draft.FollowerList.length<draft.userInfo.Followers;
                break;
            case type.LOAD_FOLLOWERS_FAIL:
                draft.loadFollowersListLoading=true;
                draft.loadFollowersListDone=false;
                draft.loadFollowersListError=null;
                break;

            case type.LOAD_USER_POST_REQUEST:
                draft.loadUserPostLoading=true;
                draft.loadUserPostDone=false;
                draft.loadUserPostError=null;
                break;
            case type.LOAD_USER_POST_SUCCESS:
                draft.loadUserPostLoading=false;
                draft.loadUserPostDone=true;
                draft.UserPosts=draft.UserPosts.concat(action.data);
                draft.hasMoerUserPosts=draft.UserPosts.length<draft.userInfo.Posts;
                break;
            case type.LOAD_USER_POST_FAIL:
                draft.loadUserPostLoading=false;
                draft.loadUserPostError=action.error;
                break;
                
            case type.LOAD_LIKED_POST_REQUEST:
                draft.loadLikedPostLoading=true;
                draft.loadLikedPostDone=false;
                draft.loadLikedPostError=null;
                break;
            case type.LOAD_LIKED_POST_SUCCESS:
                draft.loadLikedPostLoading=false;
                draft.loadLikedPostDone=true;
                draft.LikedPosts=draft.LikedPosts.concat(action.data);
                draft.hasMoreLikedPosts=draft.LikedPosts.length<draft.userInfo.Liked;
                break;
            case type.LOAD_LIKED_POST_FAIL:
                draft.loadLikedPostLoading=false;
                draft.loadLikedPostError=action.error;
                break;
        }
    });
};

export default reducer;