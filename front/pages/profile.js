import React, {useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';
import {useSelector } from 'react-redux';
import {END} from 'redux-saga';
import {LOAD_MY_INFO_REQUEST } from '../actions/user';
import axios from 'axios';
import wrapper from '../store/configureStore';

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
        <AppLayout>
            <Head>
                <title>My profile | JackJack</title>
            </Head>
            <NickNameEditForm/>
            <FollowList header="팔로잉" data={me.Followings}/>
            <FollowList header="팔로워"  data={me.Followers}/>
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


export default Profile;