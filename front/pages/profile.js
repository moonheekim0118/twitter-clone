import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile=()=>{
    return (
    <>
        <Head>
             <title>My profile | JackJack</title>
        </Head>
        <AppLayout>내 프로필</AppLayout>
    </>
    );
}

export default Profile;