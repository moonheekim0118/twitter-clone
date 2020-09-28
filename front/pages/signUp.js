import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import SignUpComponent from '../components/SignUp';

const SignUp=()=>{


    return(
        <AppLayout>
            <Head>
                <title>Sign up | JackJack</title>
            </Head>
            <SignUpComponent/>
        </AppLayout>        
    );
}



export default SignUp;