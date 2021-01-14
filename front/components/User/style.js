import styled from "styled-components";

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const Form = styled.form`
  position: relative;
  width: 50%;
  padding: 3rem 2.2rem 2.2rem 2.2rem;
  margin: 50px auto;
  border: none;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.gradient};
  @media ${({ theme }) => theme.device.tabletL} {
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.a`
    margin-top:${({ theme }) => theme.margins.xxl};
    font-weight:bold;
    color:${({ theme }) => theme.colors.white};
    cursor-pointer;
`;
