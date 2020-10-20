import React , { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { END } from 'redux-saga';
import { loadPostsAction } from '../actions/post';
import { loadMyInfoAction } from '../actions/user';
import axios from 'axios';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/Post/PostForm';
import ModifyModal from '../components/Modals/ModifyPostModal';
import wrapper from '../store/configureStore';
import PostsList from '../components/Post/PostsList';


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
                    dispatch(loadPostsAction(lastId));
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
            <PostsList posts={mainPosts} loading={loadPostloading}/>
        </AppLayout>
    );
}

export const getServerSideProps= wrapper.getServerSideProps(async(context)=>{
    const cookie=context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie='';
    if(context.req && cookie){
        axios.defaults.headers.Cookie=cookie;
    }
    context.store.dispatch(loadMyInfoAction() );
    context.store.dispatch(loadPostsAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});


export default Home;