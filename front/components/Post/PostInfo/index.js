import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";

const PostInfo = ({ nickname, date, onClick }) => {
  return (
    <Container>
      <Nickname onClick={onClick}>{nickname}</Nickname>
      <Date>{dayjs(date).format("MMM DD YYYY")}</Date>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Nickname = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Date = styled.span`
  margin-left: ${({ theme }) => theme.margins.xsmall};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.gray_2};
`;

export default PostInfo;
