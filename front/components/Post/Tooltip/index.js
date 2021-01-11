import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import useToggle from '../../../hooks/useToggle';
import { useSelector, useDispatch } from 'react-redux';
import {
    followRequestAction,
    unfollowRequestAction,
} from '../../../actions/user';
import { removePostAction } from '../../../actions/post';
import styled from 'styled-components';
import Modal from '../../../atom/Modal';
import ModifyPostModal from '../../ModalContents/ModifyPostModal';

const Tooltip = ({ post, children }) => {
    const dispatch = useDispatch();
    const [showModal, openModal, closeModal] = useToggle();
    const me = useSelector((state) => state.user.me);
    const isFollowing = me && me.Followings.find((v) => v.id === post.User.id);

    const onClickFollow = useCallback(() => {
        if (isFollowing) {
            // 언팔로우
            dispatch(unfollowRequestAction(post.User.id));
        } else {
            // 팔로우
            dispatch(followRequestAction(post.User.id));
        }
    }, [isFollowing]);

    const onClickRemove = useCallback(() => {
        if (!me) {
            return;
        }
        dispatch(removePostAction({ id: post.id }));
    }, []);

    const onClickModify = useCallback(() => {
        if (!me) {
            return;
        }
        openModal();
    }, [post.content]);

    if (me.id === post.User.id) {
        // 내 포스트일경우 수정 / 삭제 가능
        return (
            <Container>
                {showModal && (
                    <Modal onClose={closeModal} color="black">
                        <ModifyPostModal
                            onClose={closeModal}
                            postId={post.id}
                            postContent={post.content}
                        />
                    </Modal>
                )}
                <Wrapper className="tooltip">
                    <ItemWrapper onClick={onClickModify}>
                        <Item>포스트 수정하기</Item>
                    </ItemWrapper>
                    <ItemWrapper onClick={onClickRemove}>
                        <Item>포스트 삭제하기</Item>
                    </ItemWrapper>
                </Wrapper>
                {children}
            </Container>
        );
    }

    return (
        // 남의 포스트일경우 팔로우 / 언팔로우 만 가능
        <Container>
            <Wrapper className="tooltip">
                <ItemWrapper onClick={onClickFollow}>
                    <Item>
                        {isFollowing
                            ? `${post.User.nickname}님 언팔로우`
                            : `${post.User.nickname}님 팔로우`}
                    </Item>
                </ItemWrapper>
            </Wrapper>
            {children}
        </Container>
    );
};

Tooltip.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.shape({
            id: PropTypes.number,
            nickname: PropTypes.string,
        }),
        content: PropTypes.string,
        createdAt: PropTypes.string,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
        Likers: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

const Container = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;

    &:hover > .tooltip,
    &:active > .tooltip {
        display: flex;
    }
`;

const Wrapper = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    right: -10px;
    bottom: 12px;
    width: 200px;

    font-size: ${({ theme }) => theme.fontSizes.base};
    border-radius: 5px;

    background-color: ${({ theme }) => theme.colors.white};
    -webkit-box-shadow: 1px 2px 6px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 2px 6px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 2px 6px -1px rgba(0, 0, 0, 0.75);
    z-index: 2000;
`;

const ItemWrapper = styled.div`
    cursor: pointer;
    transition: 0.2s background-color ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hover_gray};
    }
`;

const Item = styled.div`
    padding: ${({ theme }) => theme.paddings.xl};
`;

export default Tooltip;
