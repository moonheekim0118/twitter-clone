import React , { useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import FollowButton from '../../Follow/FollowButton';
import { Wrapper,UpperWrapper,UserInfoWrapper,DownWrapper,NicknameWrapper,FollowWrapper,Description } from './style';

const UserProfile=({user})=>{
    const me = useSelector((state)=>state.user.me?.id);

    const onClickFollowings=useCallback(()=>{
        Router.push(`/user/${user.id}/followings`);
    },[]);

    const onClickFollowers=useCallback(()=>{
        Router.push(`/user/${user.id}/followers`);
    },[]);

    return(
        <Wrapper>
            <UpperWrapper>
                <UserInfoWrapper>
                    <Avatar size="large">{user.nickname[0]}</Avatar>
                    <NicknameWrapper>{user.nickname}</NicknameWrapper>
                    <div>{user.email}</div>
                </UserInfoWrapper>
                {me && user.id!==me&& <FollowButton userId={user.id}/>}
            </UpperWrapper>
            <DownWrapper>
                <FollowWrapper onClick={onClickFollowings}>{user.Followings} <Description>Followings</Description></FollowWrapper>
                <FollowWrapper onClick={onClickFollowers}>{user.Followers} <Description>Followers</Description></FollowWrapper>
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
