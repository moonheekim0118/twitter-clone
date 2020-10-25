import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideProfileModalAction } from '../../actions/ui';
import styled from 'styled-components';
import { Card } from 'antd';
import  Avatar from '../Avatar';
import LogoutButton from '../User/LogoutButton';
import { TransparentOveraly } from './style';
import { AvatarWrapper } from '../globalStyle';

const CardWrapper = styled(Card)`
    position:fixed;
    bottom:120px;
    left:20px;
    width:250px;
    box-shadow: -1px 1px 7px -2px rgba(0,0,0,0.64);
    z-index:6000;

    @media ${({theme})=>theme.device.tablet}{
        display:none;
    }
`;



const UserProfileDetail =()=>{
    const me = useSelector((state)=>state.user.me);
    const dispatch = useDispatch();

    const onClose=useCallback(()=>{
        dispatch(hideProfileModalAction());
    },[]);

    const onClickProfilePage=useCallback(()=>{
        window.open(`/user/${me.id}`,'_self');
    },[]);

    const onClickFollowingPage=useCallback(()=>{
        window.open(`/user/${me.id}/followings`,'_self');
    },[]);

    const onClickFollowerPage=useCallback(()=>{
        window.open(`/user/${me.id}/followers`,'_self');
    })

    return(
        <>
        <TransparentOveraly onClick={onClose}/>
        <CardWrapper
            actions={[
            <div onClick={onClickProfilePage} key="twit">트윗 <br/>{me.Posts.length}</div>,
            <div onClick={onClickFollowingPage} key="followings">팔로잉 <br/>{me.Followings.length}</div>,
            <div onClick={onClickFollowerPage} key="followers">팔로워<br/>{me.Followers.length}</div>,
            ]}
           >
            <Card.Meta
            avatar={
                <AvatarWrapper size={45}>
                    <Avatar imageSrc={me.profilepic} userId={me.id} userNickname={me.nickname} isLink={true} isMyPic={false}/>
                </AvatarWrapper>
            }
            title={me.nickname}/>
           <LogoutButton/>
        </CardWrapper>
     </>
    );
};

export default UserProfileDetail;