import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import FollowButton from '../FollowButton';
import Avatar from '../../Avatar';
import styled from 'styled-components';

const FollowList = ({ user }) => {
    const me = useSelector((state) => state.user.me?.id);

    const onClickUser = useCallback(() => {
        Router.push(`/user/${user.id}`);
    }, []);

    return (
        <Container onClick={onClickUser}>
            <SideWrapper>
                <Avatar user={user} isLink={true} isMyPic={false} size={65} />
            </SideWrapper>
            <span>{user.nickname}</span>
            <FollowButtonWrapper>
                {me && user.id !== me && <FollowButton userId={user.id} />}
            </FollowButtonWrapper>
        </Container>
    );
};

FollowList.propTypes = {
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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100px;
    padding: ${({ theme }) => theme.paddings.xl};

    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
    color: black;
    cursor: pointer;

    &:hover {
        background-color: rgba(214, 214, 194, 0.3);
    }
`;

const SideWrapper = styled.div`
    margin-right: ${({ theme }) => theme.margins.base};
`;

const FollowButtonWrapper = styled.div`
    position: absolute;
    right: 5px;
`;

export default FollowList;
