// 모달 UI 액션

// UserProfile
export const SHOW_PROFILE_MODAL="SHOW_PROFILE_MODAL";
export const HIDE_PROFILE_MODAL="HIDE_PROFILE_MODAL";

// Post
export const SHOW_POST_MODAL="SHOW_POST_MODAL";
export const HIDE_POST_MODAL="HIDE_POST_MODAL";


// ModifyPost

export const SHOW_MODIFY_MODAL="SHOW_MODIFY_MODAL";
export const HIDE_MODIFY_MODAL="HIDE_MODIFY_MODAL";

// Alert

export const SHOW_ALERT="SHOW_ALERT";
export const HIDE_ALERT="HIDE_ALERT";

// ProfileEidt

export const SHOW_INFO_EDIT_MODAL="SHOW_INFO_EDIT_MODAL";
export const HIDE_INFO_EDIT_MODAL="HIDE_INFO_EDIT_MODAL";

export const showInfoEditModalAction=(data)=>{
    return {
        type:SHOW_INFO_EDIT_MODAL,
        data,
    }    
}

export const hideInfoEditModalAction=(data)=>{
    return {
        type:HIDE_INFO_EDIT_MODAL,
        data,
    }
}


export const showAlertAction=(data)=>{
    return {
        type:SHOW_ALERT,
        data,
    }
}

export const hideAlertAction=(data)=>{
    return {
        type:HIDE_ALERT
    }
}

export const showProfileModalAction=(data)=>{
    return{
        type:SHOW_PROFILE_MODAL,
        data,
    }
}

export const hideProfileModalAction=(data)=>{
    return{
        type:HIDE_PROFILE_MODAL,
        data,
    }
}

export const showPostModalAction=(data)=>{
    return{
        type:SHOW_POST_MODAL,
        data,
    }
}

export const hidePostModalAction=(data)=>{
    return{
        type:HIDE_POST_MODAL,
        data,
    }
}

export const showModifyModalAction=(data)=>{
    return{
        type:SHOW_MODIFY_MODAL,
        data,
    }
}

export const hideModifyModalAction=(data)=>{
    return{
        type:HIDE_MODIFY_MODAL,
        data,
    }
}

