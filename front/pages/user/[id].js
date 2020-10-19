import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {END} from 'redux-saga';
import {LOAD_MY_INFO_REQUEST } from '../../actions/user';
import { LOAD_USER_INFO_REQUEST } from '../../actions/commonUser';
import axios from 'axios';
import wrapper from '../../store/configureStore';
import AppLayout from '../../components/AppLayout'
import UserProfile from '../../components/UserProfile';
import ProfileMenu from '../../components/ProfileMenu';
import { useSelector } from 'react-redux';

const User=()=>{
    const router = useRouter();
    const { id } = router.query;
    const { userInfo } = useSelector((state)=>state.commonUser);

    if(!userInfo){
      return(
        <AppLayout>
            <h1>존재하지 않는 사용자입니다.</h1>
        </AppLayout>
      )
    }
    return(
      <AppLayout>
          <Head>
                {userInfo.nickname} 님
          </Head>
          <meta name="description" content={userInfo.nickname}/>
          <meta property="og:title" content={`${userInfo.nickname}님의 짹짹 페이지`}/>
          <meta property="og:url" content={`https://jackjacks.com/user/${id}`}/>
          <UserProfile user={userInfo}/>
          {userInfo.NotFoundUser? "존재하지 않는 유저입니다." : <ProfileMenu/>}
    </AppLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({ // 로그인 정보 불러오기 
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type:LOAD_USER_INFO_REQUEST,
      data:context.params.id,
    })
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  });

  export default User;