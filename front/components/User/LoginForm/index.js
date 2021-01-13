import React, { useCallback, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../../actions/user";
import Link from "next/link";
import useInput from "../../../hooks/useInput";
import {
  Form,
  ButtonWrapper,
  Text,
} from "../style";
import SignInput from "../SignInput";
import SignSubmitButton from "../SignSubmitButton";
import { ErrorMessage } from "../../globalStyle";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggingIn, loginError } = useSelector((state) => state.user);
  const [hasLoginError, setHasLoginError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const firstUpdate = useRef(true); // 첫번째 렌더링에는 에러 검사가 실행되지 않도록

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
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
      <ButtonWrapper>
        <SignSubmitButton
          onClick={onSubmit}
          title="로그인"
          loading={isLoggingIn}
        />
        <Link href="/signUp">
          <Text>회원가입</Text>
        </Link>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
