import React, { useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostAction, uploadImagesAction } from '../../../actions/post';
import { showAlertAction } from '../../../actions/ui';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import Form from '../../Form';
import SubmitButton from '../../Form/SubmitButton';

const PostForm = ({ isModal, onClose }) => {
    const { addPostloading, addPostDone, imagePaths } = useSelector(
        (state) => state.post
    );

    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            let formData;
            if (imagePaths.length > 0) {
                formData = new FormData();
                imagePaths.forEach((i) => {
                    formData.append('image', i);
                });
                formData.append('content', text);
            } else {
                formData = { content: text };
            }
            dispatch(addPostAction(formData));
            if (onClose) {
                onClose();
            }
        },
        [text, imagePaths]
    );

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onChangeImages = useCallback((e) => {
        if (e.target.files.length > 4) {
            // 이미지 개수가 4개를 초과할 경우 alert 띄워준다.
            return dispatch(
                showAlertAction('이미지는 최대 4장 업로드 가능합니다.')
            );
        }
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        });
        dispatch(uploadImagesAction(imageFormData));
    }, []);

    return (
        <Form
            type={isModal ? 'modal' : 'post'}
            onChange={onChangeText}
            value={text}
            Button={
                <SubmitButton
                    onClick={onSubmit}
                    disabled={text.length === 0 || text.length >= 140}
                    loading={addPostloading}
                    title="Tweet"
                />
            }
            onChangeImage={onChangeImages}
            imageInput={imageInput}
            onClickImageUpload={onClickImageUpload}
        />
    );
};

PostForm.defaultProps = {
    isModal: false,
    onClose: () => {},
};

PostForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    isModal: PropTypes.bool.isRequired,
};

export default PostForm;
