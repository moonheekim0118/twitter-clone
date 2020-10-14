import React , {useEffect} from 'react';
import {LOAD_POST_REQUEST} from '../actions/post';
import { LOAD_USER_INFO_REQUEST } from '../actions/user';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector , useDispatch} from 'react-redux';
import {Spin} from 'antd';
import styled from 'styled-components';
import ModifyModal from '../components/Modals/ModifyPostModal';

const Wrapper = styled.div`
    text-align:center;
`;

const Home =()=>{
    const showModifyModal = useSelector(state=>state.ui.showModifyModal);
    const isLoggedIn =useSelector((state)=>state.user.isLoggedIn);
    const {mainPosts, hasMorePost, loadPostloading} = useSelector((state)=>state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(
        { type : LOAD_USER_INFO_REQUEST} // 로그인 상태 복구 
        )
    })
    useEffect(()=>{ // 첫 로딩시
        if(hasMorePost){
            dispatch(
                { type:LOAD_POST_REQUEST}
             );
        }
    },[hasMorePost]);

    useEffect(()=>{
        function onScroll(){
            if(window.pageYOffset + document.documentElement.clientHeight+100>=document.documentElement.scrollHeight){
                if(hasMorePost && !loadPostloading){ // 이미 요청이 간 상태에서는 다시 요청을 보내지 않도록 
                    const lastId= mainPosts[mainPosts.length-1]?.id;
                    dispatch(
                        { type:LOAD_POST_REQUEST},
                        lastId,
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
        <AppLayout>
            {isLoggedIn && showModifyModal && <ModifyModal/>}
            {isLoggedIn && <PostForm/>}
            <br/>
            {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)}
            {loadPostloading? <Wrapper><Spin/></Wrapper> : ''}
        </AppLayout>
    );
}

export default Home;