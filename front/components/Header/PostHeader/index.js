import React ,{ useCallback } from 'react';
import PropTypes from 'prop-types';
import { Wrapper,First,Second } from '../style';

const ProfileMenu =({userId,pageName})=>{
    
    const onClickTweet = useCallback(()=>{
        // 라우팅 
        window.open(`/user/${userId}`,'_self');
    },[]);

    const onClickLikePosts = useCallback(()=>{
        window.open(`/user/${userId}/likes`,'_self');
    },[]);

    return(
        <Wrapper>
            <First onClick={onClickTweet} clicked={pageName==="Tweet"}>  
                Tweets
            </First>
            <Second onClick={onClickLikePosts} clicked={pageName==="Likes"}>
                Liked Tweets
            </Second>
        </Wrapper>
    );
};

ProfileMenu.propTypes={
    userId:PropTypes.string.isRequired,
    pageName:PropTypes.string.isRequired,
};
export default ProfileMenu;
