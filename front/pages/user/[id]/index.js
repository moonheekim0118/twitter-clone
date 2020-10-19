import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {END} from 'redux-saga';
import {LOAD_MY_INFO_REQUEST } from '../../../actions/user';
import { loadUserInfoAction,loadUserPostsAction } from '../../../actions/commonUser';
import axios from 'axios';
import wrapper from '../../../store/configureStore';
import AppLayout from '../../../components/AppLayout'
import UserProfile from '../../../components/UserProfile';
import ProfileMenu from '../../../components/ProfileMenu';
import { useSelector , useDispatch } from 'react-redux';
import PostsList from '../../../components/PostsList';


const User=()=>{
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const { userInfo , UserPosts, hasMoerUserPosts , loadUserPostLoading } = useSelector((state)=>state.commonUser);

    
    useEffect(()=>{
      function onScroll(){
          if(window.pageYOffset + document.documentElement.clientHeight+100>=document.documentElement.scrollHeight){
              if(hasMoerUserPosts && !loadUserPostLoading){ // 이미 요청이 간 상태에서는 다시 요청을 보내지 않도록 
                  const lastId= UserPosts[UserPosts.length-1]?.id;
                  dispatch(loadUserPostsAction({userId:id, lastId:lastId}));
              }
          }
      }
      window.addEventListener('scroll',onScroll);
      return()=>{
          window.removeEventListener('scroll',onScroll);
      }
  },[hasMoerUserPosts,loadUserPostLoading])

    if(!userInfo){
      return(
        <AppLayout header={""}>
            <h1>존재하지 않는 사용자입니다.</h1>
        </AppLayout>
      )
    }
    return(
      <AppLayout pageName={userInfo.nickname}>
          <Head>
                {userInfo.nickname} 님
          </Head>
          <meta name="description" content={userInfo.nickname}/>
          <meta property="og:title" content={`${userInfo.nickname}님의 짹짹 페이지`}/>
          <meta property="og:url" content={`https://jackjacks.com/user/${id}`}/>
          <UserProfile user={userInfo}/>
          <ProfileMenu/>
          {UserPosts.length > 0 && <PostsList posts={UserPosts} loading={loadUserPostLoading}/>}
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
    context.store.dispatch(loadUserInfoAction(context.params.id));
    context.store.dispatch(loadUserPostsAction({userId:context.params.id}));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  });

  export default User;