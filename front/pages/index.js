import React from 'react';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector} from 'react-redux';

const Home =()=>{
    const isLoggedIn =useSelector((state)=>state.user.isLoggedIn);
    const mainPosts = useSelector((state)=>state.post.mainPosts);

    return(
        <AppLayout>
            {isLoggedIn && <PostForm/>}
            <br/>
            {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)}
        </AppLayout>
    );
}

export default Home;