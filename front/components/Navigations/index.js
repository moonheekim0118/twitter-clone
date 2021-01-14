import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LogoutButton from "../User/LogoutButton";
import UserProfile from "./UserProfile";
import TweetButton from "./TweetButton";
import Navigator from "./Navigator";
import { useSelector } from "react-redux";

const Navigation = ({ isLoggedIn }) => {
  const me = useSelector((state) => state.user.me?.id);
  return (
    <Container>
      <Menu>
        <Navigator where="Home" href="/" as="/" />
        {isLoggedIn ? (
          <>
            <Navigator where="Profile" href="/user/[id]" as={`/user/${me}`} />
            <TweetButton />
            <UserProfile />
            <LogOutWrapper>
              <LogoutButton />
            </LogOutWrapper>
          </>
        ) : (
          <>
            <Navigator where="Signup" href="/signUp" as="/signUp" />
            <Navigator where="Login" href="/login" as="/login" />
          </>
        )}
      </Menu>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 20%;
  height: 100%;
  max-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  margin-right: ${({ theme }) => theme.margins.base};
  border-right: 2px solid ${({ theme }) => theme.colors.gray_3};

  background: ${({ theme }) => theme.colors.white};
  z-index: 20;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    position: -webkit-sticky;
    position: sticky;
    top: 0;

    margin-bottom: 10px;
    padding-top: ${({ theme }) => theme.paddings.base};
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray_3};
    background: ${({ theme }) => theme.colors.white};

    z-index: 20;
  }

  @media ${({ theme }) => theme.device.pcS} {
    width: 10%;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin: 0;

  @media ${({ theme }) => theme.device.pcS} {
    padding: 25px 10px 25px 25px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    padding: 0;
    margin: 0;
  }
`;

const LogOutWrapper = styled.div`
  display: none;
  margin-bottom: ${({ theme }) => theme.margins.xl};

  @media ${({ theme }) => theme.device.tablet} {
    display: inline-block;
    margin-bottom: 0px;
    margin-left: ${({ theme }) => theme.margins.base};
  }
`;

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Navigation;
