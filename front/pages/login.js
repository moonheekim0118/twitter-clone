import React, {useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import {useSelector} from 'react-redux';

const Login =()=>{
    const isLoggedIn=useSelector((state)=>state.user.isLoggedIn);
    useEffect(()=>{
        if(isLoggedIn){
            Router.push('/');
        }
    },[isLoggedIn]);

    return(
        <AppLayout>
            <Head>
                <title>Login | JackJack</title>
            </Head>
           <LoginForm/>
        </AppLayout>
    );
}

export default Login;