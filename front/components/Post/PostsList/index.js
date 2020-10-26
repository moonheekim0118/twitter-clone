import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostCard from '../PostCard';
import { LoadingIcon } from '../../Icons';

const Wrapper = styled.div`
    text-align:center;
`;

const PostsList=({posts, loading,target})=>{

    return(
        <>
           {posts.map((post)=><PostCard key={post.id} post={post} target={target}/>)}
           {loading? <Wrapper><LoadingIcon/></Wrapper> : ''}
        </>
    )
}

PostsList.defaultProps={
    target:"main",
};

PostsList.propTypes = {
    target:PropTypes.string.isRequired,
    posts:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default PostsList;