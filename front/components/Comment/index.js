import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
import styled from 'styled-components';

const Comment = ({ postId, Comments, me=null }) => {
    return (
        <>
            <CommentBar />
            {me && <CommentForm postId={postId} />}
            {Comments.map((comment) => (
                <CommentCard
                    key={comment.id}
                    comment={comment}
                    postId={postId}
                />
            ))}
        </>
    );
};

const CommentBar = styled.div`
    position: relative;

    &::after {
        position: absolute;
        width: 10px;
        height: 33px;
        bottom: -17px;
        left: 20px;
        content: '';
        background-color: ${({ theme }) => theme.colors.blue_1};
    }
`;

Comment.propTypes = {
    postId: PropTypes.number.isRequired,
    Comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            User: PropTypes.shape({
                id: PropTypes.number,
                nickname: PropTypes.string,
                profilepic: PropTypes.string,
            }),
            content: PropTypes.string,
        }).isRequired
    ),
    me:PropTypes.number
};

export default Comment;
