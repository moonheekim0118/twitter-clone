import * as type from '../actions/ui';
import produce from '../util/produce';

export const initialState={
    showProfileModal:false,
    showPostModal:false,
    showModifyModal:false,
    modifyFormerContent:'',
    modifyPostId:null,
    showAlert:false,
    alertContent:'',
    showInfoEditModal:false,
}

const reducer=(state=initialState, action)=>{
    return produce(state,draft=>{
        switch(action.type){
            // 프로필 모달 
            case type.SHOW_PROFILE_MODAL:
                draft.showProfileModal=true;
                break;
            case type.HIDE_PROFILE_MODAL:
                draft.showProfileModal=false;
                break;

                // 포스트 작성  모달 
            case type.SHOW_POST_MODAL:
                draft.showPostModal=true;
                break;
            case type.HIDE_POST_MODAL:
                draft.showPostModal=false;
                break;

                // 포스트 수정 모달 
            case type.SHOW_MODIFY_MODAL:
                draft.showModifyModal=true;
                draft.modifyPostId=action.data.postId;
                draft.modifyFormerContent=action.data.postContent;
                break;
            case type.HIDE_MODIFY_MODAL:
                draft.showModifyModal=false;
                draft.modifyPostId=null;
                draft.modifyFormerContent='';
                break;

                // 알림창 
            case type.SHOW_ALERT:
                draft.showAlert=true;
                draft.alertContent=action.data;
                break;
            case type.HIDE_ALERT:
                draft.showAlert=false;
                break; 
            
                // 유저 프로필 수정 모달 
            case type.SHOW_INFO_EDIT_MODAL:
                draft.showInfoEditModal=true;
                break;

            case type.HIDE_INFO_EDIT_MODAL:
                draft.showInfoEditModal=false;
                break;
                
        }
    })
}

export default reducer;