import React, { useCallback, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import useToggle from "../../../hooks/useToggle";
import { useSelector } from "react-redux";
import Avatar from "../../Avatar";
import Button from "../../../atom/Button";
import FollowButton from "../../Follow/FollowButton";
import ImagesZoom from "../../Images/ImagesZoom";
import Modal from "../../../atom/Modal";
import EditProfileForm from "../EditProfileForm";
import styled from "styled-components";

const ProfileCard = ({ user }) => {
  const me = useSelector((state) => state.user.me?.id);
  const [showAvatarZoom, setAvatarZoom] = useState(false);
  const [showModal, openModal, closeModal] = useToggle();

  const onZoomClose = useCallback(() => {
    setAvatarZoom(false);
  }, []);

  const onZoom = useCallback(() => {
    setAvatarZoom(true);
  }, []);

  return (
    <>
      {user.profilepic && showAvatarZoom && (
        <ImagesZoom
          images={[{ src: user.profilepic }]}
          onClose={onZoomClose}
          initial={0}
        />
      )}
      {me === user.id && showModal && (
        <Modal onClose={closeModal} color="black">
          <EditProfileForm onClose={closeModal} />
        </Modal>
      )}
      <Container>
        <UpperContainer>
          <UserInfo>
            <Avatar
              user={user}
              size={90}
              isLink={false}
              isMyPic={false}
              onClick={onZoom}
            />
            <Nickname>{user.nickname}</Nickname>
            <div>{user.email}</div>
          </UserInfo>
          {me && user.id !== me && <FollowButton userId={user.id} />}
          {me && user.id === me && (
            <Button style={{ back: "trans" }} type="button" onClick={openModal}>
              프로필 수정
            </Button>
          )}
        </UpperContainer>
        <LowerContainer>
          <Link href="/user/[id]/followings" as={`/user/${user.id}/followings`}>
            <Follow>
              {user.Followings} <Description>Followings</Description>
            </Follow>
          </Link>
          <Link href="/user/[id]/followers" as={`/user/${user.id}/followers`}>
            <Follow>
              {user.Followers} <Description>Followers</Description>
            </Follow>
          </Link>
        </LowerContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 250px;
`;

// 유저정보  / 팔로우버튼
const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.paddings.xxl};
`;
// 아바타 / 이메일 / 닉네임
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// 팔로잉 몇명 / 팔로우 몇명
const LowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${({ theme }) => theme.margins.xxl};
  margin-top: ${({ theme }) => theme.margins.xxl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
`;

const Nickname = styled.div`
  margin-top: ${({ theme }) => theme.margins.base};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: bold;
`;

const Follow = styled.a`
  margin-right: ${({ theme }) => theme.margins.xxxl};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_2};
  }
`;

const Description = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray_2};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_2};
  }
`;

ProfileCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    email: PropTypes.string,
    Followings: PropTypes.number,
    Followers: PropTypes.number,
    Posts: PropTypes.number,
    Likes: PropTypes.number,
  }).isRequired,
};

export default ProfileCard;
