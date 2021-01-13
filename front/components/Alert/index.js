import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Alert = () => {
  const { showAlert, alertContent } = useSelector((state) => state.ui);

  return <Container show={showAlert}>{alertContent}</Container>;
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  text-align: center;
  transform: ${(props) =>
    props.show ? "translate(-50%,0%)" : "translate(-50%,100%)"};
  width: 330px;

  padding: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #fff;
  background-color: ${({ theme }) => theme.colors.blue_1};

  z-index: 5000;

  -webkit-transition: 1s ease-in-out;
  transition: 1s ease-in-out;
`;

export default Alert;
