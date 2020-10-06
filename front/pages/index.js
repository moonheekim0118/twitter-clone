import React , {useEffect} from 'react';
import {LOAD_POST_REQUEST} from '../actions/post';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector , useDispatch} from 'react-redux';
import {Spin} from 'antd';

const Home =()=>{
    const isLoggedIn =useSelector((state)=>state.user.isLoggedIn);
    const {mainPosts, hasMorePost, loadPostloading} = useSelector((state)=>state.post);
    const dispatch = useDispatch();

    useEffect(()=>{ // 첫 로딩시
        dispatch(
           { type:LOAD_POST_REQUEST}
        );
    },[]);

    useEffect(()=>{
        function onScroll(){
            if(window.scrollY + document.documentElement.clientHeight+100>=document.documentElement.scrollHeight){
                if(hasMorePost && !loadPostloading){ // 이미 요청이 간 상태에서는 다시 요청을 보내지 않도록 
                    dispatch(
                        { type:LOAD_POST_REQUEST}
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
            {isLoggedIn && <PostForm/>}
            <br/>
            {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)}
            {loadPostloading? <Spin/> : ''}
        </AppLayout>

    );
}

export default Home;