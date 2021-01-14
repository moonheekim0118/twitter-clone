import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../../actions/user";
import { ErrorMessage } from "../../globalStyle";
import { Form, ButtonContainer, Text } from "../style";
import Link from "next/link";
import useInput from "../../../hooks/useInput";
import SignInput from "../SignInput";
import SignSubmitButton from "../SignSubmitButton";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggingIn, loginError } = useSelector((state) => state.user);
  const [hasLoginError, setHasLoginError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  useEffect(() => {
    if (loginError) {
      setHasLoginError(true);
    } else {
      setHasLoginError(false);
    }
  }, [loginError]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginRequestAction({ email, password }));
    },
    [email, password]
  );

  return (
    <Form>
      {hasLoginError && <ErrorMessage>{loginError}</ErrorMessage>}
      <SignInput
        name="email"
        value={email}
        onChange={onChangeEmail}
        type="text"
        label="이메일"
      />
      <SignInput
        name="password"
        value={password}
        onChange={onChangePassword}
        type="password"
        label="비밀번호"
      />
      <ButtonContainer>
        <SignSubmitButton
          onClick={onSubmit}
          title="로그인"
          loading={isLoggingIn}
          disabled={
            email.length < 2 || password.length < 6 || password.length > 14
          }
        />
        <Link href="/signUp">
          <Text>회원가입</Text>
        </Link>
      </ButtonContainer>
    </Form>
  );
};

export default LoginForm;
