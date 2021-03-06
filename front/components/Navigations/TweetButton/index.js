import React, { useCallback } from "react";
import useModal from "../../../hooks/useModal";
import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";
import { Detail } from "../style";
import { useDispatch } from "react-redux";
import { resetImageAction } from "../../../actions/post";;
import styled from "styled-components";
import Modal from "../../../atom/Modal";
import ModalContents from "../../ModalContents";
import PostForm from "../../Post/PostForm";

const TweetButton = () => {
  const dispatch = useDispatch();
  const [showModal, openModal, closeModal] = useModal();

  const onResetImage = useCallback(() => {
    dispatch(resetImageAction()); // 업로드된 이미지 리셋
    closeModal();
  }, []);

  return (
    <>
      {showModal && (
        <Modal onClose={closeModal} color="black">
          <ModalContents
            onClose={onResetImage}
            child={<PostForm isModal={true} onClose={closeModal} />}
          />
        </Modal>
      )}
      <Button onClick={openModal}>
        <EditOutlined />
        <Detail>Tweet</Detail>
      </Button>
    </>
  );
};

const Button = styled.button`
  display: flex;

  border: none;
  border-radius: 10px;
  padding: ${({ theme }) => theme.paddings.base};
  margin-bottom: ${({ theme }) => theme.margins.base};

  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue_1};
  transition: 0.2s background-color ease-in-out;
  cursor: pointer;

  -mox-box-shadow: -1px 1px 5px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 1px 5px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 5px -1px rgba(0, 0, 0, 0.75);

  @media ${({ theme }) => theme.device.pcS} {
    margin-right: 0;
    border-radius: 50%;
  }

  @media ${({ theme }) => theme.device.tablet} {
    position: fixed;
    bottom: 10px;
    right: 10px;
    font-size: ${({ theme }) => theme.device.xxxl};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_2};
  }
`;

export default TweetButton;
