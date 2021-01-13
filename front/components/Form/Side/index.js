import React from "react";
import Avatar from "../../Avatar";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Side = () => {
  const me = useSelector((state) => state.user.me);

  return (
    <Container>
      <Avatar user={me} size={65} isLink={false} isMyPic={true} />
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 5%;
`;

export default Side;
