import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {END} from 'redux-saga';
import {LOAD_MY_INFO_REQUEST } from '../../../actions/user';
import { loadUserInfoAction,
    loadUserLikedPostsAction,} from '../../../actions/commonUser';
import axios from 'axios';
import wrapper from '../../../store/configureStore';
import AppLayout from '../../../components/AppLayout'
import UserProfile from '../../../components/UserProfile';
import ProfileMenu from '../../../components/ProfileMenu';
import { useSelector , useDispatch } from 'react-redux';
import PostsList from '../../../components/PostsList';

const Detail =()=>{
    const dispatch = useDispatch();
    const router = useRouter();
    const { id  } = router.query;
    const { userInfo , LikedPosts, hasMoreLikedPosts , loadLikedPostLoading } = useSelector((state)=>state.commonUser);

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
                if(hasMoerUserPosts && !loadUserPostLoading){ // 이미 요청이 간 상태에서는 다시 요청을 보내지 않도록 
                    const lastId= LikedPosts[LikedPosts.length-1]?.id;
                    dispatch(loadUserLikedPostsAction({userId:id, lastId:lastId}));
                }
            }
        }
        window.addEventListener('scroll',onScroll);
        return()=>{
            window.removeEventListener('scroll',onScroll);
        }
    },[hasMoreLikedPosts,loadLikedPostLoading])
  
    return(
        <AppLayout pageName={userInfo.nickname}> 
              <Head>
                {userInfo.nickname} 님
            </Head>
            <meta name="description" content={userInfo.nickname}/>
            <meta property="og:title" content={`${userInfo.nickname}님의 짹짹 페이지`}/>
            <meta property="og:url" content={`https://jackjacks.com/user/${id}`}/>
            <UserProfile user={userInfo}/>
            <ProfileMenu userId={id} pageName={"Likes"}/>
            {LikedPosts.length > 0 && <PostsList posts={LikedPosts} loading={loadLikedPostLoading}/>}
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
    context.store.dispatch(loadUserLikedPostsAction({userId:context.params.id})); // 좋아요 게시글 정보 

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  });


export default Detail;