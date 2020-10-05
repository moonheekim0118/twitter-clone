import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';
import {useSelector } from 'react-redux';

const Profile=()=>{
    const me = useSelector(state => state.user.me);

    return (
        <AppLayout>
            <Head>
                <title>My profile | JackJack</title>
            </Head>
            <NickNameEditForm/>
            <FollowList header="팔로잉" data={me ? me.Followings: '' }/>
            <FollowList header="팔로워"  data={me ? me.Followers: ''}/>
        </AppLayout>
    );
}

export default Profile;