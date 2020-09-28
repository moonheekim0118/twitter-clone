import React, { useState }from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';

const Profile=()=>{
    const [followingList, setFollowingList]=useState([{nickname:'뇽뇽'}]);
    const [followerList, setFollowerList]=useState([{nickname:'어허'}]);

    return (
        <AppLayout>
            <Head>
                <title>My profile | JackJack</title>
            </Head>
            <NickNameEditForm/>
            <FollowList header="팔로잉 목록" data={followingList}/>
            <FollowList header="팔로워 목록"  data={followerList}/>
        </AppLayout>
    );
}

export default Profile;