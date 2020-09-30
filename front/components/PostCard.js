import React , {useState , useCallback} from 'react';
import { Button, Card, Popover,Avatar } from 'antd';
import {RetweetOutlined,HeartOutlined,HeartTwoTone,MessageOutlined,EllipsisOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import {useSelector } from 'react-redux';
import PostImages from './PostImages';
import styled from 'styled-components';

const CardWrapper = styled.div`
    margin-bottom:20px;
`


const PostCard=({post})=>{
    const [liked, setLiked]=useState(false);
    const [commentFormOpend, setCommentFormOpend]=useState(false);
    const me = useSelector(state => state.me?.id);
    const onToggleLike = useCallback(()=>{
        setLiked((prev)=>!prev);
    })

    const onToggleComment = useCallback(()=>{
        setCommentFormOpend((prev)=>!prev);
    })

    return(
       <CardWrapper>
        <Card 
            cover={post.Images[0] && <PostImages images={post.Images}/>}
            actions={[
                <RetweetOutlined key="retweet"/>,
                liked ?
                <HeartTwoTone key="heart" twoToneColor="#eb2f96" onClick={onToggleLike}/>
                :<HeartOutlined onClick={onToggleLike} key="heart" />,
                <MessageOutlined onClick={onToggleComment} key="comment"/>,
                <Popover key="more" content={(<Button.Group>
                    {me===post.User.id 
                    ?<>
                        <Button>수정</Button>
                        <Button type="danger">삭제</Button>
                    </>
                    :  <Button>신고</Button>}
                </Button.Group>)}>
                    <EllipsisOutlined/>
                </Popover>
            ]}
        >
            <Card.Meta 
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={post.content}/>
            {/* <Buttons></Buttons> */}
        </Card>
        {commentFormOpend && <div>댓글부분</div> }
            {/* <CommentForm/>
        <Comments/> */}
       </CardWrapper>
    );
}

PostCard.propTypes = {
    post:PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.shape({
            id:PropTypes.number,
            nickname:PropTypes.string
        }),
        content:PropTypes.string,
        createdAt:PropTypes.object,
        Comments:PropTypes.arrayOf(PropTypes.object),
        Images:PropTypes.arrayOf(PropTypes.object)

    }).isRequired,
}

export default PostCard;