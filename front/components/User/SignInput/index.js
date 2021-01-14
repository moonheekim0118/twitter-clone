import React from "react";
import styled from "styled-components";
import { ErrorMessage } from "../../globalStyle";

const ErrorType = {
  nickname: "닉네임은 1자리 이상 5자리 이하여야 합니다.",
  email: "이메일을 올바르게 입력해주세요",
  password: "비밀번호는 6자리 이상 14자리 이하여야 합니다",
  passwordcheck: "비밀번호가 일치하지 않습니다.",
};

const SignInput = ({ name, value, onChange, label, type, Error = false }) => {
  return (
    <Container>
      {type === "text" ? (
        <TextInput name={name} value={value} onChange={onChange} />
      ) : (
        <PasswordInput name={name} value={value} onChange={onChange} />
      )}
      {name === "nickname" && (
        <TextLength limit={value.length > 5}>{value.length}/5</TextLength>
      )}
      <Label htmlFor={name}>{label}</Label>
      {Error && <ErrorMessage>{ErrorType[name]}</ErrorMessage>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem auto;
  color: ${({ theme }) => theme.colors.black};
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-50%);

  padding: 0 0.3rem;
  margin: 0 0.5rem;

  border-radius: 5px;

  font-size: ${({ theme }) => theme.fontSizes.base};

  color: ${({ theme }) => theme.colors.gray_2};
  background-color: ${({ theme }) => theme.colors.white};

  pointer-events: none;
  transition: 0.2s color ease-in-out;
`;

const TextInput = styled.input.attrs({ type: "text" })`
  width: 100%;
  padding: ${({ theme }) => theme.paddings.base}
    ${({ theme }) => theme.colors.small};

  border-radius: 5px;
  border: none;
  outline: none;

  font-size: ${({ theme }) => theme.fontSizes.small};

  color: ${({ theme }) => theme.colors.gray_2};
  background-color: ${({ theme }) => theme.colors.white};

  &:focus + label {
    color: ${({ theme }) => theme.colors.blue_2};
  }
`;

const PasswordInput = styled.input.attrs({ type: "password" })`
  width: 100%;
  padding: ${({ theme }) => theme.paddings.base}
    ${({ theme }) => theme.colors.small};

  border: none;
  border-radius: 5px;
  outline: none;

  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.gray_2};

  &:focus + label {
    color: ${({ theme }) => theme.colors.blue_2};
  }
`;

const TextLength = styled.span`
  position: absolute;
  right: 5px;
  top: 10px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${(props) => (props.limit ? "red" : "gray")};
`;

export default SignInput;
