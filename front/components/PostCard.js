import React , {useState , useCallback} from 'react';
import { Button, Card, Popover,Avatar, List, Comment } from 'antd';
import {RetweetOutlined,HeartOutlined,HeartTwoTone,MessageOutlined,EllipsisOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import {useSelector ,useDispatch } from 'react-redux';
import PostImages from './PostImages';
import PostCardContent from './PostCardContent';
import CommentForm from './CommentForm';
import styled from 'styled-components';
import { removePostRequest } from '../reducers/post';
import FollowButton from './FollowButton';

const CardWrapper = styled.div`
    margin-bottom:20px;
`


const PostCard=({post})=>{
    const dispatch = useDispatch();
    const [liked, setLiked]=useState(false);
    const [commentFormOpend, setCommentFormOpend]=useState(false);
    const me = useSelector(state => state.user.me?.id);
    const {removePostloading} = useSelector(state=>state.post);
    const onToggleLike = useCallback(()=>{
        setLiked((prev)=>!prev);
    },[])

    const onToggleComment = useCallback(()=>{
        setCommentFormOpend((prev)=>!prev);
    },[])

    const onClickRemove=useCallback(()=>{
        dispatch(removePostRequest({id:post.id}));
    },[]);

    return(
       <CardWrapper>
        <Card 
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
                        <Button type="danger" onClick={onClickRemove} loading={removePostloading}>삭제</Button>
                    </>
                    :  <Button>신고</Button>}
                </Button.Group>)}>
                    <EllipsisOutlined/>
                </Popover>
            ]}
            extra={me && <FollowButton post={post}/>}
        >
            <Card.Meta 
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={<PostCardContent postData={post.content}/>}
            />
            {post.Images[0] && <PostImages images={post.Images}/>}
        </Card>
        {commentFormOpend && 
        <div>
            <CommentForm post={post}/>
            <List
                header={`${post.Comments.length}개의 댓글`}
                itemLayout="horizontal"
                dataSource={post.Comments}
                renderItem={(item)=>(
                    <li>
                        <Comment
                            author={item.User.nickname}
                            avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                            content={item.content}
                        />
                    </li>
                )}
            />
        </div> }
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