import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { loadMyInfoAction } from '../actions/user';
import Head from 'next/head';
import Router from 'next/router';
import axios from 'axios';
import wrapper from '../store/configureStore';
import AppLayout from '../components/AppLayout';
import EditProfileForm from '../components/User/EditProfileForm';

const Profile=()=>{
    const me = useSelector(state => state.user.me);
    
    useEffect(()=>{ // login 안되어있을 경우 리다이렉트 
        if(!(me && me.id)){
            Router.push('/login');
        }
    },[me && me.id]);
    if(!me){
        return null;
    }
    
    return (
        <AppLayout  pageName={"Profile"}>
            <Head>
                <title>My profile | JackJack</title>
            </Head>
            <EditProfileForm/>
        </AppLayout>
    );
}

export const getServerSideProps= wrapper.getServerSideProps(async(context)=>{
    const cookie=context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie='';
    if(context.req && cookie){
        axios.defaults.headers.Cookie=cookie;
    }
    context.store.dispatch(loadMyInfoAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});


export default Profile;