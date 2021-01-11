import React from 'react';
import ModifyPostForm from '../Post/ModifyPostForm';
import PropTypes from 'prop-types';
import { ModalFormWrapper, ModalBoxHeader } from './style';
import { CloseRightIcon } from '../Icons';

const ModifyPostModal = ({ onClose, postId, postContent }) => {
    return (
        <>
            <ModalFormWrapper>
                <ModalBoxHeader>
                    <CloseRightIcon onClick={onClose} />
                </ModalBoxHeader>
                <ModifyPostForm
                    postId={postId}
                    postContent={postContent}
                    onClose={onClose}
                />
            </ModalFormWrapper>
        </>
    );
};

ModifyPostModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired,
    postContent: PropTypes.string.isRequired,
};

export default ModifyPostModal;
