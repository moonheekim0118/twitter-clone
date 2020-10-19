import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {END} from 'redux-saga';
import {LOAD_MY_INFO_REQUEST } from '../../../actions/user';
import { loadUserInfoAction,loadFollowingsAction,
    loadUserLikedPostsAction,loadFollowersAction} from '../../../actions/commonUser';
import axios from 'axios';
import wrapper from '../../../store/configureStore';
import AppLayout from '../../../components/AppLayout'
import UserProfile from '../../../components/UserProfile';
import ProfileMenu from '../../../components/ProfileMenu';
import { useSelector , useDispatch } from 'react-redux';
import PostsList from '../../../components/PostsList';

const Detail =()=>{
    return(
        <AppLayout>
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
    context.store.dispatch(loadUserInfoAction(context.params.id)); // 유저 정보 불러오기 
    if(context.params.detail === "followings"){
        context.store.dispatch(loadFollowingsAction({userId:context.params.id}));
    }
    if(context.params.detail === "followers"){
        context.store.dispatch(loadFollowersAction({userId:context.params.id}));
    }
    if(context.params.detail=== "likes"){
        context.store.dispatch(loadUserLikedPostsAction({userId:context.params.id}));
    }
   
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  });


export default Detail;