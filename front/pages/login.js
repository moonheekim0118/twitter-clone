import React, {useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import {useSelector} from 'react-redux';
import {END} from 'redux-saga';
import {LOAD_MY_INFO_REQUEST } from '../actions/user';
import axios from 'axios';
import wrapper from '../store/configureStore';

const Login =()=>{
    const isLoggedIn=useSelector((state)=>state.user.isLoggedIn);
    useEffect(()=>{
        if(isLoggedIn){
            Router.push('/');
        }
    },[isLoggedIn]);

    return(
        <AppLayout pageName={"Login"}>
            <Head>
                <title>Login | JackJack</title>
            </Head>
           <LoginForm/>
        </AppLayout>
    );
}

export const getServerSideProps= wrapper.getServerSideProps(async(context)=>{
    const cookie=context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie='';
    if(context.req && cookie){
        axios.defaults.headers.Cookie=cookie;
    }
    context.store.dispatch({ type : LOAD_MY_INFO_REQUEST} );
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
}); // 이부분이 home 보다 먼저 실행됨 



export default Login;