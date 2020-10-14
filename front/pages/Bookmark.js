import React, {useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import {useSelector} from 'react-redux';

const BookMark =()=>{
    const isLoggedIn=useSelector((state)=>state.user.isLoggedIn);
    useEffect(()=>{
        if(!isLoggedIn){
            Router.push('/login');
        }
    },[isLoggedIn]);

    return(
        <AppLayout>
            <Head>
                <title>BookMark | JackJack</title>
            </Head>

        </AppLayout>
    );
}

export default BookMark;