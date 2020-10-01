import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import { useSelector} from 'react-redux';

const Login =()=>{
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