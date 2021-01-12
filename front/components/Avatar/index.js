import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Avatar = ({ user, size, isLink, isMyPic, onClick }) => {
    const profilePicPath = useSelector((state) => state.user.profilePicPath);

    const AvatarImage = isMyPic ? (
        <>
            {profilePicPath ? (
                <Image src={`${profilePicPath}`} />
            ) : (
                <NicknameWrapper size={size}>
                    {user.nickname[0]}
                </NicknameWrapper>
            )}
        </>
    ) : (
        <>
            {user.profilepic ? (
                <Image src={`${user.profilepic}`} />
            ) : (
                <NicknameWrapper size={size}>
                    {user.nickname[0]}
                </NicknameWrapper>
            )}
        </>
    );

    return (
        <Container size={size} onClick={onClick}>
            {isLink ? (
                <Link href="/user/[id]" as={`/user/${user.id}`}>
                    <a>{AvatarImage}</a>
                </Link>
            ) : (
                <>{AvatarImage}</>
            )}
        </Container>
    );
};

Avatar.defaultProps = {
    imageSrc: '',
    size: 24,
    onClick: () => {},
};

Avatar.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        profilepic: PropTypes.string,
    }).isRequired,
    size: PropTypes.number.isRequired,
    isLink: PropTypes.bool.isRequired,
    isMyPic: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

const Container = styled.div`
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    oveflow: hidden;
    object-fit: fill;
`;

const NicknameWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    oveflow: hidden;
    font-size: ${(props) => `${props.size - 10}px`};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray_1};
`;

export default Avatar;
