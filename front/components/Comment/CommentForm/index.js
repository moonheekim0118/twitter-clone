import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import useInput from '../../../hooks/useInput';
import styled from 'styled-components';
import Form from '../../Form';
import SubmitButton from '../../Form/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAction } from '../../../actions/post';

const CommentForm = ({ postId }) => {
    const dispatch = useDispatch();
    const { isLoggedIn, me } = useSelector((state) => state.user);
    const { addCommentDone, addCommentloading } = useSelector(
        (state) => state.post
    );
    const [commentText, onChangeText, setCommentText] = useInput('');

    useEffect(() => {
        if (addCommentDone) {
            setCommentText('');
        }
    }, [addCommentDone]);

    const onSubmitComment = useCallback(
        (e) => {
            e.preventDefault();
            if (!isLoggedIn) {
                // 로그인 되지 않은 상태라면 로그인 페이지로 리다이렉트
                Router.push('/login');
            } else if (commentText.length > 0) {
                // commenet 추가
                dispatch(
                    addCommentAction({
                        text: commentText,
                        id: me?.id,
                        nickname: me?.nickname,
                        postId: postId,
                    })
                );
            }
        },
        [commentText]
    );

    return (
        <Container>
            <Form
                type={'comment'}
                value={commentText}
                onChange={onChangeText}
                Button={
                    <SubmitButton
                        onClick={onSubmitComment}
                        disabled={
                            commentText.length === 0 || commentText.length > 50
                        }
                        loading={addCommentloading}
                        title="Comment"
                    />
                }
            />
        </Container>
    );
};

CommentForm.propTypes = {
    postId: PropTypes.number.isRequired,
};

const Container = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: ${({ theme }) => theme.paddings.xxxl};
    margin-bottom: ${({ theme }) => theme.margins.xxl};
`;

export default CommentForm;
