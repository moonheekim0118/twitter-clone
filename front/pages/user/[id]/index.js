import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { END } from 'redux-saga';
import { loadMyInfoAction } from '../../../actions/user';
import { useSelector , useDispatch } from 'react-redux';
import { loadUserInfoAction } from '../../../actions/commonUser';
import { loadUserPostsAction } from '../../../actions/post';
import axios from 'axios';
import wrapper from '../../../store/configureStore';
import AppLayout from '../../../components/AppLayout'
import ProfileCard from '../../../components/Profile/ProfileCard';
import PostHeader from '../../../components/Header/PostHeader';
import PostsList from '../../../components/Post/PostsList';


const User=()=>{
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const { userInfo  } = useSelector((state)=>state.commonUser);
    const { mainPosts, hasMorePost, loadPostloading   } = useSelector((state)=>state.post);
    
    useEffect(()=>{
      function onScroll(){
          if(window.pageYOffset + document.documentElement.clientHeight+100>=document.documentElement.scrollHeight){
              if(hasMorePost && !loadPostloading){ // 이미 요청이 간 상태에서는 다시 요청을 보내지 않도록 
                  const lastId= mainPosts[mainPosts.length-1]?.id;
                  dispatch(loadUserPostsAction({userId:id, lastId:lastId}));
              }
          }
      }
      window.addEventListener('scroll',onScroll);
      return()=>{
          window.removeEventListener('scroll',onScroll);
      }
  },[mainPosts,hasMorePost,loadPostloading])

    if(!userInfo){
      return(
        <AppLayout pageName={""}>
            <h1>존재하지 않는 사용자입니다.</h1>
        </AppLayout>
      )
    }
    
    return(
      <AppLayout pageName={userInfo.nickname}>
          <Head>
                <title>{userInfo.nickname}님</title>
          </Head>
          <meta name="description" content={userInfo.nickname}/>
          <meta property="og:title" content={`${userInfo.nickname}님의 트위터`}/>
          <meta property="og:url" content={`https://jackjacks.com/user/${id}`}/>
          <ProfileCard user={userInfo}/>
          <PostHeader userId={id} pageName={"Tweet"}/>
          {mainPosts.length > 0 && <PostsList posts={mainPosts} loading={loadPostloading}/>}
    </AppLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoAction());
    context.store.dispatch(loadUserInfoAction(context.params.id));
    context.store.dispatch(loadUserPostsAction({userId:context.params.id}));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  });

  export default User;