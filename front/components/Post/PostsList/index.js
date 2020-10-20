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
    posts:PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.shape({
            id:PropTypes.number,
            nickname:PropTypes.string
        }),
        Retweet:PropTypes.shape({
            User:PropTypes.shape({
                id:PropTypes.number,
                nickname:PropTypes.string
            })
        }),
        Likers:PropTypes.shape({
            id:PropTypes.number,
            nickname:PropTypes.string
        }),
        Image:PropTypes.string,
        Comment:PropTypes.shape({
            User:PropTypes.shape({
                id:PropTypes.number,
                nickname:PropTypes.string
            })
        })
    }).isRequired,
    loading:PropTypes.bool.isRequired,
}

export default PostsList;