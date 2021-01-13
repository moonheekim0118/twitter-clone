import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { resetImageAction } from "../../actions/post";
import PostForm from "../Post/PostForm";
import { ModalFormWrapper, ModalBoxHeader } from "./style";
import { CloseRightIcon } from "../Icons";

const PostformModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const onCloseRequest = useCallback(() => {
    dispatch(resetImageAction()); // 업로드된 이미지 리셋
    onClose();
  }, []);

  return (
    <ModalFormWrapper>
      <ModalBoxHeader>
        <CloseRightIcon onClick={onCloseRequest} />
      </ModalBoxHeader>
      <PostForm isModal={true} onClose={onClose} />
    </ModalFormWrapper>
  );
};

PostformModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PostformModal;
