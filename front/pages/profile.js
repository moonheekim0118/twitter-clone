import React, {useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';
import {useSelector } from 'react-redux';

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

export default Profile;