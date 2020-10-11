import * as type from '../actions/ui';
import produce from 'immer';

export const initialState={
    showProfileModal:false,
    showPostModal:false,
    showModifyModal:false,
    modifyFormerContent:'',
    modifyPostId:null,
}

const reducer=(state=initialState, action)=>{
    return produce(state,draft=>{
        switch(action.type){
            case type.SHOW_PROFILE_MODAL:
                draft.showProfileModal=true;
                break;
            case type.HIDE_PROFILE_MODAL:
                draft.showProfileModal=false;
                break;
            case type.SHOW_POST_MODAL:
                draft.showPostModal=true;
                break;
            case type.HIDE_POST_MODAL:
                draft.showPostModal=false;
                break;
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
        }
    })
}

export default reducer;