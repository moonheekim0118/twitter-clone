import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import useToggle from '../../../hooks/useToggle';
import { useSelector } from 'react-redux';
import Avatar from '../../Avatar';
import Button from '../../../atom/Button';
import FollowButton from '../../Follow/FollowButton';
import ImagesZoom from '../../Images/ImagesZoom';
import Modal from '../../../atom/Modal';
import EditProfileForm from '../EditProfileForm';
import {
    Wrapper,
    UpperWrapper,
    UserInfoWrapper,
    DownWrapper,
    NicknameWrapper,
    FollowWrapper,
    Description,
} from './style';

const UserProfile = ({ user }) => {
    const me = useSelector((state) => state.user.me?.id);
    const [showAvatarZoom, setAvatarZoom] = useState(false);
    const [showModal, openModal, closeModal] = useToggle();

    const onZoomClose = useCallback(() => {
        setAvatarZoom(false);
    }, []);

    const onZoom = useCallback(() => {
        setAvatarZoom(true);
    }, []);

    return (
        <>
            {user.profilepic && showAvatarZoom && (
                <ImagesZoom
                    images={[{ src: user.profilepic }]}
                    onClose={onZoomClose}
                    initial={0}
                />
            )}
            {me === user.id && showModal && (
                <Modal onClose={closeModal} color="black">
                    <EditProfileForm onClose={closeModal} />
                </Modal>
            )}
            <Wrapper>
                <UpperWrapper>
                    <UserInfoWrapper>
                        <Avatar
                            user={user}
                            size={90}
                            isLink={false}
                            isMyPic={false}
                            onClick={onZoom}
                        />
                        <NicknameWrapper>{user.nickname}</NicknameWrapper>
                        <div>{user.email}</div>
                    </UserInfoWrapper>
                    {me && user.id !== me && <FollowButton userId={user.id} />}
                    {me && user.id === me && (
                        <Button
                            style={{ back: 'trans' }}
                            type="button"
                            onClick={openModal}>
                            프로필 수정
                        </Button>
                    )}
                </UpperWrapper>
                <DownWrapper>
                    <Link
                        href="/user/[id]/followings"
                        as={`/user/${user.id}/followings`}>
                        <a>
                            <FollowWrapper>
                                {user.Followings}{' '}
                                <Description>Followings</Description>
                            </FollowWrapper>
                        </a>
                    </Link>
                    <Link
                        href="/user/[id]/followers"
                        as={`/user/${user.id}/followers`}>
                        <a>
                            <FollowWrapper>
                                {user.Followers}{' '}
                                <Description>Followers</Description>
                            </FollowWrapper>
                        </a>
                    </Link>
                </DownWrapper>
            </Wrapper>
        </>
    );
};

export default UserProfile;

UserProfile.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        email: PropTypes.string,
        Followings: PropTypes.number,
        Followers: PropTypes.number,
        Posts: PropTypes.number,
        Likes: PropTypes.number,
    }).isRequired,
};
