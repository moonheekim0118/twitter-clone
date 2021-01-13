import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import { loadMyInfoAction } from "../actions/user";
import Head from "next/head";
import Router from "next/router";
import axios from "axios";
import wrapper from "../store/configureStore";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/User/LoginForm";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <AppLayout pageName={"Login"}>
      <Head>
        <title>로그인 | Twitter</title>
      </Head>
      <LoginForm />
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

export default Login;
