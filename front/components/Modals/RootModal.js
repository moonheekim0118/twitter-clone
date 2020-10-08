import React from 'react';
import {useSelector} from 'react-redux';
import PostFormModal from './PostFormModal';
import UserProfileModal from './UserProfileModal';

const RootModal =()=>{
    const { showProfileModal , showPostModal }=useSelector(state=>state.ui);
    return(
        <>
            {showProfileModal &&<UserProfileModal/>}
            {showPostModal && <PostFormModal/>}
        </>
    );
};

export default RootModal;