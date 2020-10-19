import React ,{ useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    cursor:pointer;
    font-size:1.2rem;
    font-weight:bold;
`;

const Tweet = styled.div`
    border-bottom:${props=>props.clicked ? "1px solid #0099cc;" : "none"};
    color:${props=>props.clicked ? "#0099cc" : "black"};
    padding:15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    width:50%;
    text-align:center;
    &:hover{
        color:#0099cc;
        background-color:rgba(51, 153, 255,0.2)
    }
`;

const Likes = styled.div`
    border-bottom:${props=>props.clicked ? "1px solid #0099cc;" : "none"};
    color:${props=>props.clicked ? "#0099cc" : "black"};
    width:50%;
    padding:15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    text-align:center;
    &:hover{
        color:#0099cc;
        background-color:rgba(51, 153, 255,0.2)
    }
`;

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
            <Tweet onClick={onClickTweet} clicked={pageName==="Tweet"}>  
                Tweets
            </Tweet>
            <Likes onClick={onClickLikePosts} clicked={pageName==="Likes"}>
                Liked Tweets
            </Likes>
        </Wrapper>
    );
};

ProfileMenu.propTypes={
    userId:PropTypes.string.isRequired,
    pageName:PropTypes.string.isRequired,
};
export default ProfileMenu;
