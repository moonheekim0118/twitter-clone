import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Detail } from "../style";
import { Description } from "../../AppLayout/style";
import { HomeIcon, LoginIcon, ProfileIcon, SignupIcon } from "../../Icons";
import styled from "styled-components";

const ICONS = {
  Home: HomeIcon,
  Login: LoginIcon,
  Profile: ProfileIcon,
  Signup: SignupIcon,
};

const Navigator = ({ where, href, as }) => {
  const Router = useRouter();
  const pageName = Router.pathname;
  const SpecificIcon = ICONS[where];

  return (
    <Container visit={pageName === href && "true"}>
      <Link href={as}>
        <a>
          <SpecificIcon />
        </a>
      </Link>
      <Detail>
        <Link href={as}>
          <Description>{where}</Description>
        </Link>
      </Detail>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  margin-bottom: ${({ theme }) => theme.margins.base};
  padding: ${({ theme }) => theme.paddings.base};
  border-radius: 20px;

  background-color: ${(props) =>
    props.visit ? "rgba(153, 204, 255,0.2)" : "none"};
  transition: 0.2s background-color ease-in-out;
  cursor: pointer;

  @media ${({ theme }) => theme.device.pcS} {
    border-radius: 50%;
    margin-right: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

Navigator.propTypes = {
  where: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
};

export default Navigator;
