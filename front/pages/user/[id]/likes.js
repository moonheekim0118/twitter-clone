import React, {useEffect} from 'react';
import { scrollHandler } from '../../../util/scrollHandler';
import { useSelector , useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {END} from 'redux-saga';
import { loadMyInfoAction } from '../../../actions/user';
import { loadUserInfoAction } from '../../../actions/commonUser';
import { loadUserLikedPostsAction,changeTargetAction } from '../../../actions/post';
import axios from 'axios';
import wrapper from '../../../store/configureStore';
import AppLayout from '../../../components/AppLayout'
import ProfileCard from '../../../components/User/ProfileCard';
import Header from '../../../components/Header';
import PostsList from '../../../components/Post/PostsList';


const Detail =()=>{
    const dispatch = useDispatch();
    const router = useRouter();
    const { id  } = router.query;
    const { userInfo } = useSelector((state)=>state.commonUser);
    const { mainPosts, hasMorePost, loadPostloading   } = useSelector((state)=>state.post);

    useEffect(()=>{
        const lastId= mainPosts[mainPosts.length-1]?.id;
        const onScroll = scrollHandler(null,dispatch.bind(null,loadUserLikedPostsAction({userId:id, lastId:lastId},
                                       hasMorePost, loadPostloading)));
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
                <title>{userInfo.nickname}님이 좋아한 게시글</title>
            </Head>
            <meta name="description" content={userInfo.nickname}/>
            <meta property="og:title" content={`${userInfo.nickname}님의 짹짹 페이지`}/>
            <meta property="og:url" content={`https://jackjacks.com/user/${id}`}/>
            <ProfileCard user={userInfo}/>
            <Header userId={id} theme="Tweet" where={"Likes"}/>
            {mainPosts.length > 0 && <PostsList posts={mainPosts} loading={loadPostloading} target="like"/>}
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
    context.store.dispatch(loadUserInfoAction(context.params.id)); // 유저 정보 불러오기 
    context.store.dispatch(loadUserLikedPostsAction({userId:context.params.id})); // 좋아요 게시글 정보 
    context.store.dispatch(changeTargetAction('like'));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  });


export default Detail;