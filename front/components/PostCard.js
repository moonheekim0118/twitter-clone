import React , {useState , useCallback} from 'react';
import { Button, Popover,Avatar, List, Comment } from 'antd';
import {RetweetOutlined,HeartOutlined,HeartTwoTone,MessageOutlined,EllipsisOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import {useSelector ,useDispatch } from 'react-redux';
import PostImages from './PostImages';
import PostCardContent from './PostCardContent';
import CommentForm from './CommentForm';
import styled from 'styled-components';
import FollowButton from './FollowButton';
import { removePostRequest,likePostRequest,unLikePostRequest } from '../actions/post';
import {showModifyModalAction} from '../actions/ui';

const AvatarWrapper=styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 5%;
`;

const Card = styled.div`
    position:relative;
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: stretch;
    padding:20px 20px;
    margin-bottom:30px;
    border:1px solid #f4f4f4;
    background-color:#fff;
    cursor:pointer;
    &:hover{
        background-color:rgba(214, 214, 194,0.3);
    }
`;

const CardMeta = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 90%;
    display:flex;
    flex-direction:column;
    padding:0 20px;
    margin-left:20px;
`;

const CardButtons= styled.div`
    margin-top:20px;
    font-size:1.2rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

const FollowButtonWrapper=styled.div`
    position: absolute;
    right:15px;
    top:5px;
`;

const NicknameWrapper=styled.div`
    font-size:1.2rem;
    font-weight:bold;
`;

const LikedCount=styled.span`   
    margin-left:5px;
    font-size:1rem;
    color:#eb2f96;
`;

const LikersCount=styled.span`
    margin-left:5px;
    font-size:1rem;
    color:#f4f4f4;

    &:hover{
        color:#eb2f96;
    }
`;

const PostCard=({post})=>{
    const dispatch = useDispatch();
    const [commentFormOpend, setCommentFormOpend]=useState(false);
    const me = useSelector(state => state.user.me?.id);
    const {removePostloading} = useSelector(state=>state.post);
    const liked = post.Likers.find((x)=>x.id===me);
    const onUnlike=useCallback(()=>{
        dispatch(unLikePostRequest(post.id));
    },[]);

    const onLike=useCallback(()=>{
        dispatch(likePostRequest(post.id));
    },[]);

    const onToggleComment = useCallback(()=>{
        setCommentFormOpend((prev)=>!prev);
    },[])

    const onClickRemove=useCallback(()=>{
        dispatch(removePostRequest({id:post.id}));
    },[]);

    const onClickModify=useCallback(()=>{
        dispatch(showModifyModalAction({ postId:post.id, postContent:post.content}));
    },[post.content]);
    
    return(
       <>
        <Card>
            {me && post.User.id!==me && <FollowButtonWrapper><FollowButton post={post}/></FollowButtonWrapper>}
            <AvatarWrapper><Avatar>{post.User.nickname[0]}</Avatar></AvatarWrapper>
            <CardMeta>
                <NicknameWrapper>{post.User.nickname}</NicknameWrapper>
                <PostCardContent postData={post.content}/>
                {post.Images[0] && <PostImages images={post.Images}/>}
                <CardButtons>
                      <RetweetOutlined key="retweet"/>
                      { liked ?
                        <div>
                            <HeartTwoTone key="heart" twoToneColor="#eb2f96" onClick={onUnlike}/>
                            {post.Likers.length>0 && <LikedCount>{post.Likers.length}</LikedCount>}
                        </div>
                        :
                        <div>
                            <HeartOutlined onClick={onLike} key="heart" />
                            {post.Likers.length>0 && <LikersCount>{post.Likers.length}</LikersCount>}
                        </div>
                        }
                      <MessageOutlined onClick={onToggleComment} key="comment"/>
                      <Popover key="more" content={(<Button.Group>
                         {me===post.User.id 
                         ?<>
                        <Button onClick={onClickModify}>수정</Button>
                        <Button type="danger" onClick={onClickRemove} loading={removePostloading}>삭제</Button>
                         </>
                        :  <Button>신고</Button>}
                        </Button.Group>)}>
                     <EllipsisOutlined/>
                     </Popover>
                </CardButtons>
            </CardMeta>
        </Card>
        {commentFormOpend && 
        <div>
            <CommentForm postId={post.id}/>
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
       </>
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
        createdAt:PropTypes.string,
        Comments:PropTypes.arrayOf(PropTypes.object),
        Images:PropTypes.arrayOf(PropTypes.object),
        Likers:PropTypes.arrayOf(PropTypes.object)

    }).isRequired,
}

export default PostCard;