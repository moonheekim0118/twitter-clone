import React from "react";
import styled from "styled-components";
import Avatar from "../../Avatar";
import PropTypes from "prop-types";
import { EditIcon } from "../../Icons";

const ProfilePicForm = ({ user, imageInput, onChange, onClick }) => {
  return (
    <Container>
      <Overaly />
      <input
        type="file"
        multiple
        name="image"
        hidden
        ref={imageInput}
        onChange={onChange}
      />
      <EditIcon onClick={onClick} />
      <Avatar user={user} size={80} isLink={false} isMyPic={true} />
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: ${({ theme }) => theme.margins.xl};
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const Overaly = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: 1000;
  cursor: pointer;
`;

ProfilePicForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    profilepic: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  imageInput: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLInputElement),
  }),
};

export default ProfilePicForm;
