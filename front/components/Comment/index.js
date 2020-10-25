import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
import styled from 'styled-components';

export const CommentBar = styled.div`   
    position:relative;

    &::after{
        content:"";
        background-color:${({theme})=>theme.colors.blue_1};
        position:absolute;
        width: 10px;
        height: 33px;
        bottom:-17px;
        left:20px;
    }
    
`;
const Comment =({postId , Comments})=>{

    return(
        <>
            <CommentBar/>
            <CommentForm postId={postId}/>
            {Comments.map(comment=>(<CommentCard key={comment.id}comment={comment}/>))}
        </>
    );
};

Comment.propTypes = {
    postId:PropTypes.number.isRequired,
    Comments:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.shape({
            id:PropTypes.number,
            nickname:PropTypes.string,
            profilepic:PropTypes.string,
        }),
        content:PropTypes.string,
    }).isRequired,)
}

export default Comment;