import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";
import useInput from "../../../hooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import {
  updateMyInfoAction,
  uploadProfilePicAction,
} from "../../../actions/user";
import { updateUserInfoAction } from "../../../actions/commonUser";
import { CloseLeftIcon } from "../../Icons";
import Button from "../../../atom/Button";
import SignInput from "../SignInput";
import ProfilePicForm from "../ProfilePicForm";
import styled from "styled-components";

const EditProfileForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const { me, profilePicPath } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me.nickname);

  // 프로필 이미지 수정 폼 , 닉네임 수정

  const onSubmitUpdate = useCallback(() => {
    // submit
    dispatch(updateMyInfoAction({ nickname: nickname, image: profilePicPath }));
    dispatch(
      updateUserInfoAction({ nickname: nickname, image: profilePicPath })
    );
    onClose();
  }, [nickname, profilePicPath]);

  // 이미지 업로드
  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    imageFormData.append("image", e.target.files[0]);
    dispatch(uploadProfilePicAction(imageFormData));
  }, []);

  // 이미지 업로드 버튼 클릭
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Container>
      <Header>
        <CloseLeftIcon onClick={onClose} />
        <Title>Edit Profile</Title>
        <Button
          onClick={onSubmitUpdate}
          disabled={nickname.length > 5}
          style={{ back: "full", radius: "10px" }}>
          저장
        </Button>
      </Header>
      <Contents>
        <ProfilePicForm
          user={me}
          imageInput={imageInput}
          onChange={onChangeImages}
          onClick={onClickImageUpload}
        />
        <SignInput
          name="nickname"
          value={nickname}
          onChange={onChangeNickname}
          label="닉네임"
          type="text"
        />
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 290px;

  margin: 0;
  border-radius: 20px;
  background: #fff;

  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 7000;

  -webkit-box-shadow: 1px 2px 6px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 2px 6px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 2px 6px -1px rgba(0, 0, 0, 0.75);

  @media ${({ theme }) => theme.device.tablet} {
    width: 70%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.paddings.base}
    ${({ theme }) => theme.paddings.small};
`;

const Title = styled.span`
  position: absolute;
  left: 60px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: ${({ theme }) => theme.paddings.xxl}
    ${({ theme }) => theme.paddings.xxl};
  border-top: 1px solid ${({ theme }) => theme.colors.gray_4};
`;

EditProfileForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditProfileForm;
