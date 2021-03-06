import React from "react";
import { END } from "redux-saga";
import { loadMyInfoAction } from "../actions/user";
import Head from "next/head";
import axios from "axios";
import wrapper from "../store/configureStore";
import AppLayout from "../components/AppLayout";
import SignUpComponent from "../components/User/SignUpForm";

const SignUp = () => {
  return (
    <AppLayout pageName={"SignUp"}>
      <Head>
        <title>회원가입 | Twitter</title>
      </Head>
      <SignUpComponent />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default SignUp;
