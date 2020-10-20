import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spin } from 'antd';
import PostCard from '../PostCard';


const Wrapper = styled.div`
    text-align:center;
`;

const PostsList=({posts, loading})=>{

    return(
        <>
           {posts.map((post)=><PostCard key={post.id} post={post}/>)}
           {loading? <Wrapper><Spin/></Wrapper> : ''}
        </>
    )
}

PostsList.propTypes = {
    posts:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default PostsList;