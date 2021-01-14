import React, { useState, useCallback, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import useInput from "../../../hooks/useInput";
import useValidation from "../../../hooks/useValidation";
import SignInput from "../SignInput";
import SignSubmitButton from "../SignSubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { signUpRequestAction, signUpResetAction } from "../../../actions/user";
import { showAlertAction } from "../../../actions/ui";
import { Form,Text,ButtonContainer } from "../style";

const SignUp = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword, passwordLengthError] = useValidation(
    "",
    6,
    15
  );
  const [nickname, onChangeNickname, nicknameLengthError] = useValidation(
    "",
    1,
    5
  );
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const { signUploading, signUpDone, signUpError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (signUpDone) {
      dispatch(signUpResetAction()); // signup하고 다시 signUp페이지로 갈 수 있도록
      Router.push("/");
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      dispatch(showAlertAction(signUpError));
    }
  }, [signUpError]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      dispatch(
        signUpRequestAction({
          email,
          password,
          passwordCheck,
          nickname,
        })
      );
    },
    [email, password, passwordCheck, nickname]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  return (
    <Form>
      <SignInput
        name="email"
        value={email}
        onChange={onChangeEmail}
        label="이메일"
        type="text"
      />
      <SignInput
        name="nickname"
        value={nickname}
        onChange={onChangeNickname}
        label="닉네임"
        type="text"
        Error={nicknameLengthError}
      />
      <SignInput
        name="password"
        value={password}
        onChange={onChangePassword}
        label="비밀번호"
        type="password"
        Error={passwordLengthError}
      />
      <SignInput
        name="passwordcheck"
        value={passwordCheck}
        onChange={onChangePasswordCheck}
        label="비밀번호 확인"
        type="password"
        Error={passwordError}
      />

      <ButtonContainer>
        <SignSubmitButton
          onClick={onSubmit}
          loading={signUploading}
          title="회원가입"
          disabled={
            passwordLengthError ||
            nicknameLengthError ||
            passwordError ||
            email.length < 2 ||
            nickname.length < 1 ||
            password.length < 6 ||
            passwordCheck.length < 6
          }
        />
        <Link href="/login">
          <Text>로그인</Text>
        </Link>
      </ButtonContainer>
    </Form>
  );
};

export default SignUp;