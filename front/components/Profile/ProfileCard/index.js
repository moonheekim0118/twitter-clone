import React , { useCallback , useState } from 'react';
import PropTypes from 'prop-types';
import useToggle from '../../../hooks/useToggle';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import Avatar from '../../Avatar';
import FollowButton from '../../Follow/FollowButton';
import { Wrapper,UpperWrapper,UserInfoWrapper,DownWrapper,NicknameWrapper,FollowWrapper,Description } from './style';
import { Button, AvatarWrapper } from '../../globalStyle';
import ImagesZoom from '../../Image/ImagesZoom';
import Modal from '../../../atom/Modal';
import EditProfileForm from '../../User/EditProfileForm';

const UserProfile=({user})=>{
    const me = useSelector((state)=>state.user.me?.id);
    const [showAvatarZoom, setAvatarZoom]=useState(false);
    const [showModal, openModal, closeModal] = useToggle();

    const onClickFollowings=useCallback(()=>{
        Router.push(`/user/${user.id}/followings`);
    },[user]);

    const onClickFollowers=useCallback(()=>{
        Router.push(`/user/${user.id}/followers`);
    },[user]);


    const onZoomClose=useCallback(()=>{
        setAvatarZoom(false);
    },[]);

    const onZoom=useCallback(()=>{
        setAvatarZoom(true);
    },[]);

    return(
        <>
        {user.profilepic&& showAvatarZoom && <ImagesZoom images={[{src:user.profilepic}]} onClose={onZoomClose} initial={0}/>}
        {me===user.id && showModal && <Modal onClose={closeModal} color="black"><EditProfileForm onClose={closeModal}/></Modal>}
        <Wrapper>
            <UpperWrapper>
                <UserInfoWrapper>
                    <AvatarWrapper size={90} onClick={onZoom}>
                        <Avatar imageSrc={user.profilepic || ""} userId={user.id} userNickname={user.nickname} isLink={false} isMyPic={false}/>
                    </AvatarWrapper>
                    <NicknameWrapper>{user.nickname}</NicknameWrapper>
                    <div>{user.email}</div>
                </UserInfoWrapper>
                {me && user.id!==me && <FollowButton userId={user.id}/>}
                {me && user.id===me&& <Button onClick={openModal}>프로필 수정</Button>}
            </UpperWrapper>
            <DownWrapper>
                <FollowWrapper onClick={onClickFollowings}>{user.Followings} <Description>Followings</Description></FollowWrapper>
                <FollowWrapper onClick={onClickFollowers}>{user.Followers} <Description>Followers</Description></FollowWrapper>
            </DownWrapper>
        </Wrapper>
        </>
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
