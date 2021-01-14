import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
  width: 100%;

  padding: ${({ theme }) => theme.paddings.xxxl};
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_gray};
  }
`;

export const RetweetCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
  width: 100%;

  padding: ${({ theme }) => theme.paddings.xxxl};
  padding-top: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 90%;
  position: relative;
  width: 100%;

  padding: 0 ${({ theme }) => theme.paddings.xl};
  margin-left: ${({ theme }) => theme.margins.lg};
`;

export const CardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: ${({ theme }) => theme.margins.xxxl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const Retweet = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue_2};

  &:hover {
    text-decoration: underline;
  }
`;

export const ContentContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const CommentContainer = styled.div`
  padding: ${({ theme }) => theme.paddings.xxl};
`;
