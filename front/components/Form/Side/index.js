import React from "react";
import Avatar from "../../Avatar";
import styled from "styled-components";
import PropTypes from "prop-types";

const Side = ({ isLink, user, isMyPic }) => {
  return (
    <Container>
      <Avatar user={user} size={65} isLink={isLink} isMyPic={isMyPic} />
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 5%;
`;

Side.propTypes = {
  isLink: PropTypes.bool.isRequired,
  isMyPic: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    profilepic: PropTypes.string,
  }).isRequired,
};

export default Side;
