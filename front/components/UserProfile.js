import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Avatar} from 'antd';
import FollowButton from './FollowButton';

const Wrapper = styled.div`
    width:100%;
    height:700px;
    position:relative;
    display:flex;
    flex-direction:column;
`;

// 유저정보  / 팔로우버튼 
const UpperWrapper= styled.div`
    width:100%;
    padding:20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

// 아바타 / 이메일 / 닉네임 
const UserInfoWrapper = styled.div`
    display:flex;
    flex-direction:colum;
`;

// 팔로잉 몇명 / 팔로우 몇명 
const DownWrapper = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:20px;
`;


const UserProfile=({user})=>{
    return(
        <Wrapper>
            <UpperWrapper>
                <UserInfoWrapper>
                    <Avatar/>
                    <span>{user.nickname}</span>
                    <span>{user.email}</span>
                </UserInfoWrapper>
                <FollowButton userId={user.id}/>
            </UpperWrapper>
            <DownWrapper>
                <span>{user.Followings} Following</span>
                <span>{user.Followers} Follower</span>
            </DownWrapper>
        </Wrapper>
    )
};

export default UserProfile;

UserProfile.propTypes = {
    user:PropTypes.shape({
        id:PropTypes.number,
        nickname:PropTypes.string,
        email:PropTypes.string,
        Followings:PropTypes.number,
        Followers:PropTypes.number,
        Posts:PropTypes.number,
        Likes:PropTypes.number,
    }).isRequired,
}
