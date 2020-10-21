import React ,{ useCallback } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Wrapper,First,Second } from '../style';

const ProfileMenu =({userId,pageName})=>{
    
    const onClickTweet = useCallback(()=>{
        // 라우팅 
        Router.push(`/user/${userId}`);
    },[]);

    const onClickLikePosts = useCallback(()=>{
        Router.push(`/user/${userId}/likes`);
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
