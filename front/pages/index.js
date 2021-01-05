import React , { useEffect } from 'react';
import { scrollHandler } from '../util/scrollHandler';
import { useSelector , useDispatch} from 'react-redux';
import { END } from 'redux-saga';
import { loadPostsAction } from '../actions/post';
import { loadMyInfoAction } from '../actions/user';
import axios from 'axios';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/Post/PostForm';
import wrapper from '../store/configureStore';
import PostsList from '../components/Post/PostsList';


const Home =()=>{
    const isLoggedIn =useSelector((state)=>state.user.isLoggedIn);
    const {mainPosts, hasMorePost, loadPostloading} = useSelector((state)=>state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        const lastId= mainPosts[mainPosts.length-1]?.id;

        const onScroll= scrollHandler(dispatch.bind(null,loadPostsAction(lastId)),
                                      hasMorePost, loadPostloading);
        window.addEventListener('scroll',onScroll);

        return()=>{
            window.removeEventListener('scroll',onScroll);
        }
    },[mainPosts,hasMorePost,loadPostloading])


    return(
        <AppLayout pageName={"Home"}>
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
    context.store.dispatch(loadMyInfoAction());
    context.store.dispatch(loadPostsAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});


export default Home;