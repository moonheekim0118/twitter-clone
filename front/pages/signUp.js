import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import SignUpComponent from '../components/SignUp';
import {END} from 'redux-saga';
import {LOAD_MY_INFO_REQUEST } from '../actions/user';
import axios from 'axios';
import wrapper from '../store/configureStore';

const SignUp=()=>{


    return(
        <AppLayout  pageName={"SignUp"}> 
            <Head>
                <title>Sign up | JackJack</title>
            </Head>
            <SignUpComponent/>
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



export default SignUp;