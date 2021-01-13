import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyPostAction } from '../../../actions/post';
import useInput from '../../../hooks/useInput';
import PropTypes from 'prop-types';
import SubmitButton from '../../Form/SubmitButton';
import Form from '../../Form';

const ModifyPostPorm = ({ postId, postContent, onClose }) => {
    const modifyPostloading = useSelector(
        (state) => state.post.modifyPostloading
    );
    const dispatch = useDispatch();
    const [text, onChangeText] = useInput(postContent);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(modifyPostAction({ postId: postId, content: text }));
            onClose();
        },
        [text]
    );

    return (
        <Form
            type="modify"
            onChange={onChangeText}
            value={text}
            Button={
                <SubmitButton
                    onClick={onSubmit}
                    disabled={
                        text.length === 0 ||
                        text.length >= 140 ||
                        text === postContent
                    }
                    loading={modifyPostloading}
                    title="수정"
                />
            }
        />
    );
};

ModifyPostPorm.propTypes = {
    postId: PropTypes.number.isRequired,
    postContent: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModifyPostPorm;
