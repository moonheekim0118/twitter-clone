import React , {useEffect} from 'react';
import {END} from 'redux-saga';
import {LOAD_POST_REQUEST} from '../actions/post';
import {LOAD_MY_INFO_REQUEST } from '../actions/user';
import axios from 'axios';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector , useDispatch} from 'react-redux';
import {Spin} from 'antd';
import styled from 'styled-components';
import ModifyModal from '../components/Modals/ModifyPostModal';
import wrapper from '../store/configureStore';

const Wrapper = styled.div`
    text-align:center;
`;

const Home =()=>{
    const showModifyModal = useSelector(state=>state.ui.showModifyModal);
    const isLoggedIn =useSelector((state)=>state.user.isLoggedIn);
    const {mainPosts, hasMorePost, loadPostloading} = useSelector((state)=>state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        function onScroll(){
            if(window.pageYOffset + document.documentElement.clientHeight+100>=document.documentElement.scrollHeight){
                if(hasMorePost && !loadPostloading){ // 이미 요청이 간 상태에서는 다시 요청을 보내지 않도록 
                    const lastId= mainPosts[mainPosts.length-1]?.id;
                    dispatch(
                        { type:LOAD_POST_REQUEST ,data:lastId },
                     );
                }
            }
        }
        window.addEventListener('scroll',onScroll);
        return()=>{
            window.removeEventListener('scroll',onScroll);
        }
    },[hasMorePost,loadPostloading])


    return(
        <AppLayout pageName={"Home"}>
            {isLoggedIn && showModifyModal && <ModifyModal/>}
            {isLoggedIn && <PostForm/>}
            <br/>
            {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)}
            {loadPostloading? <Wrapper><Spin/></Wrapper> : ''}
        </AppLayout>
    );
}

export const getServerSideProps= wrapper.getServerSideProps(async(context)=>{
    const cookie=context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie='';
    if(context.req && cookie){
        axios.defaults.headers.Cookie=cookie;
    }
    context.store.dispatch({ type : LOAD_MY_INFO_REQUEST} );
    context.store.dispatch( { type : LOAD_POST_REQUEST  } );
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
}); // 이부분이 home 보다 먼저 실행됨 


export default Home;