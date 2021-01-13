import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: ${({ theme }) => theme.margins.xxxl};
  margin-bottom: ${({ theme }) => theme.margins.xxxl};
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 50%;
`;
