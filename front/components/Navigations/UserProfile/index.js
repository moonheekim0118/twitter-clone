import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../../Avatar";
import styled from "styled-components";
import useToggle from "../../../hooks/useToggle";
import { DownOutlined } from "@ant-design/icons";
import { Detail } from "../style";
import { Description } from "../../AppLayout/style";
import Modal from "../../../atom/Modal";
import UserProfileDetail from "../UserProfileDetail";

const UserProfile = () => {
  const me = useSelector((state) => state.user.me);
  const [showModal, openModal, closeModal] = useToggle();

  return (
    <>
      {showModal && (
        <Modal color="none" onClose={closeModal}>
          <UserProfileDetail />
        </Modal>
      )}
      <Container onClick={openModal}>
        <Avatar user={me} size={45} isLink={false} isMyPic={false} />
        <Detail>
          <UserInfo>
            <Description>{me.nickname}</Description>
            <Email>{me.email}</Email>
          </UserInfo>
          <DownOutlined />
        </Detail>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80%;
  margin-right: ${({ theme }) => theme.margins.base};
  margin-bottom: ${({ theme }) => theme.margins.base};
  padding: ${({ theme }) => theme.paddings.small};
  border-radius: 20px;

  transition: 0.2s background-color ease-in-out;
  cursor: pointer;

  @media ${({ theme }) => theme.device.pcS} {
    width: 60px;
    border-radius: 50%;
    margin-right: ${({ theme }) => theme.margins.base};
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }

  &:hover {
    background: rgba(128, 223, 255, 0.2);
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Email = styled.span`
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.gray_2};
`;

export default UserProfile;
