import React from "react";
import useToggle from "../../../hooks/useToggle";
import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";
import { Detail } from "../style";
import Modal from "../../../atom/Modal";
import PostFormModal from "../../ModalContents/PostFormModal";

const TweetButton = () => {
  const [showModal, openModal, closeModal] = useToggle();

  return (
    <>
      {showModal && (
        <Modal onClose={closeModal} color="black">
          <PostFormModal onClose={closeModal} />
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
