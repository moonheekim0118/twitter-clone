import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import {END} from 'redux-saga';
import {LOAD_MY_INFO_REQUEST } from '../../../actions/user';
import { loadUserInfoAction, loadFollowingsAction } from '../../../actions/commonUser';
import axios from 'axios';
import wrapper from '../../../store/configureStore';
import AppLayout from '../../../components/AppLayout';
import FollowMenu from '../../../components/FollowMenu';
import FollowList from '../../../components/FollowList';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align:center;
`;

const Followings=()=>{
    const dispatch = useDispatch();
    const router = useRouter();
    const { id  } = router.query;
    const { userInfo , FollowingList, hasMoreFollowings , loadFollowingListLoading } = useSelector((state)=>state.commonUser);

    if(!userInfo){
        return(
            <AppLayout pageName={""}>
                <h1>존재하지 않는 사용자입니다.</h1>
            </AppLayout>
          )
    }

    useEffect(()=>{
        function onScroll(){
            if(window.pageYOffset + document.documentElement.clientHeight+100>=document.documentElement.scrollHeight){
                if(hasMoreFollowings && !loadFollowingListLoading){ // 이미 요청이 간 상태에서는 다시 요청을 보내지 않도록 
                    const lastId= FollowingList[FollowingList.length-1]?.id;
                    dispatch(loadFollowingsAction({userId:id, lastId:lastId}));
                }
            }
        }
        window.addEventListener('scroll',onScroll);
        return()=>{
            window.removeEventListener('scroll',onScroll);
        }
    },[hasMoreFollowings,loadFollowingListLoading])

    return(
        <AppLayout pageName={userInfo.nickname}>
          <Head>
                {userInfo.nickname} 님
          </Head>
          <meta name="description" content={userInfo.nickname}/>
          <meta property="og:title" content={`${userInfo.nickname}님의 짹짹 페이지 팔로잉 목록 `}/>
          <meta property="og:url" content={`https://jackjacks.com/user/${id}`}/>
          <FollowMenu userId={id} pageName={"Followings"}/>
          {FollowingList.length === 0 ? <h1>팔로잉이 없습니다.</h1>:FollowingList.map((user)=><FollowList user={user}/>)}
          {loadFollowingListLoading? <Wrapper><Spin/></Wrapper> : ''}
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
    context.store.dispatch(loadFollowingsAction({userId:context.params.id})); // 팔로워 정보 
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  });



export default Followings;