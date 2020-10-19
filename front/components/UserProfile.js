import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {Avatar} from 'antd';
import FollowButton from './FollowButton';

const Wrapper = styled.div`
    width:100%;
    height:250px;
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
    flex-direction:column;
`;

// 팔로잉 몇명 / 팔로우 몇명 
const DownWrapper = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:20px;
    margin-top: 20px;
    cursor:pointer;
    font-size:1rem;
`;

const NicknameWrapper= styled.div`
    margin-top:10px;
    font-size:1.3rem;
    font-weight:bold;
`;

const FollowWrapper =styled.div`
    margin-right:20px;
`;

const Description=styled.span`
    color:#75a3a3;
    font-weight:bold;
`;

const UserProfile=({user})=>{
    const me = useSelector((state)=>state.user.me);
    return(
        <Wrapper>
            <UpperWrapper>
                <UserInfoWrapper>
                    <Avatar size="large">{user.nickname[0]}</Avatar>
                    <NicknameWrapper>{user.nickname}</NicknameWrapper>
                    <div>{user.email}</div>
                </UserInfoWrapper>
                {me && <FollowButton userId={user.id}/>}
            </UpperWrapper>
            <DownWrapper>
                <FollowWrapper>{user.Followings} <Description>Followings</Description></FollowWrapper>
                <FollowWrapper>{user.Followers} <Description>Followers</Description></FollowWrapper>
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
