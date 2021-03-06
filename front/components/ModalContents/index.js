import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CloseRightIcon } from "../Icons";

const ModalContents = ({ onClose = null, child }) => {
  return (
    <Container>
      <Header>
        <CloseRightIcon onClick={onClose} />
      </Header>
      {child}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;

  padding: 20px 10px;
  margin: 0;
  border-radius: 5px;

  background-color: #fff;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 7000;

  @media ${({ theme }) => theme.device.tablet} {
    width: 70%;
  }
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.margins.xl};
`;

ModalContents.propTypes = {
  onClose: PropTypes.func.isRequired,
  isMyPic: PropTypes.node.isRequired,
};

export default ModalContents;
