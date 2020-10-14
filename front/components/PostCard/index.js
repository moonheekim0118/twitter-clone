import React , {useState , useCallback} from 'react';
import { Button, Popover,Avatar, List, Comment } from 'antd';
import {RetweetOutlined,HeartOutlined,HeartTwoTone,MessageOutlined,EllipsisOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import {useSelector ,useDispatch } from 'react-redux';
import PostImages from '../PostImages';
import PostCardContent from '../PostCardContent';
import CommentForm from '../CommentForm';
import FollowButton from '../FollowButton';
import { removePostRequest,likePostRequest,unLikePostRequest } from '../../actions/post';
import {showModifyModalAction} from '../../actions/ui';
import {AvatarWrapper, Card, CardMeta, CardButtons, 
    FollowButtonWrapper,NicknameWrapper,LikedCount,LikersCount,LikeButtonWrapper} from './style';

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
                        <LikeButtonWrapper>
                            <HeartOutlined onClick={onLike} key="heart" />
                            {post.Likers.length>0 && <LikersCount>{post.Likers.length}</LikersCount>}
                        </LikeButtonWrapper>
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