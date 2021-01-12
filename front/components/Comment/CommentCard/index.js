import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { removeCommentAction } from '../../../actions/post';
import Avatar from '../../Avatar';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    AvatarWrapper,
    ContentsWrapper,
    NicknameWrapper,
    ButtonWrapper,
} from './style';
import { RedCloseIcon } from '../../Icons';
// Comment
const CommentCard = ({ postId, comment }) => {
    const dispatch = useDispatch();
    const me = useSelector((state) => state.user.me);

    const onClickRemove = useCallback(() => {
        if (!me || comment.User.id !== me.id) {
            return;
        }
        dispatch(removeCommentAction({ postId, commentId: comment.id }));
    }, []);

    return (
        <Container>
            <AvatarWrapper>
                <Avatar user={me} isLink={true} isMyPic={false} size={30} />
            </AvatarWrapper>
            <ContentsWrapper>
                <NicknameWrapper>{comment.User.nickname}</NicknameWrapper>
                <span> {comment.content}</span>
            </ContentsWrapper>
            {me && comment.User.id === me.id && (
                <ButtonWrapper>
                    <RedCloseIcon onClick={onClickRemove}>삭제</RedCloseIcon>
                </ButtonWrapper>
            )}
        </Container>
    );
};

CommentCard.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.shape({
            id: PropTypes.number,
            nickname: PropTypes.string,
            profilepic: PropTypes.string,
        }),
        content: PropTypes.string,
    }).isRequired,
};

export default CommentCard;
