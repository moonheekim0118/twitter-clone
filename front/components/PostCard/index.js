import React , {useState , useCallback} from 'react';
import { Button, Popover,Avatar, List, Comment } from 'antd';
import {RetweetOutlined,HeartOutlined,HeartTwoTone,MessageOutlined,EllipsisOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import {useSelector ,useDispatch } from 'react-redux';
import PostImages from '../PostImages';
import PostCardContent from '../PostCardContent';
import CommentForm from '../CommentForm';
import FollowButton from '../FollowButton';
import { removePostRequest,likePostRequest,unLikePostRequest,retweetRequest } from '../../actions/post';
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
        if(!me){
            return;
        }
        dispatch(unLikePostRequest(post.id));
    },[]);

    const onLike=useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(likePostRequest(post.id));
    },[]);

    const onToggleComment = useCallback(()=>{
        setCommentFormOpend((prev)=>!prev);
    },[])

    const onClickRemove=useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(removePostRequest({id:post.id}));
    },[]);

    const onClickModify=useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(showModifyModalAction({ postId:post.id, postContent:post.content}));
    },[post.content]);
    
    const onRetweet = useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(retweetRequest(post.id));

    },[]);

    if(post.RetweetId&&post.User.id===me){ // 내가 리트윗한 게시물은 index에서 보이지 않음 
        return null;
    }
    return(
       <>
       {post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다`:null}
        <Card>
            {me && post.User.id!==me && <FollowButtonWrapper><FollowButton userId={post.User.id}/></FollowButtonWrapper>}
            <AvatarWrapper><Avatar>{post.User.nickname[0]}</Avatar></AvatarWrapper>
            {post.RetweetId && post.Retweet ? 
             <Card>
                 <CardMeta>
                    <NicknameWrapper>{post.Retweet.User.nickname}</NicknameWrapper>
                        <PostCardContent postData={post.Retweet.content}/>
                        {post.Retweet.Images[0] && <PostImages images={post.Retweet.Images}/>}
                        <CardButtons>
                            <RetweetOutlined onClick={onRetweet} key="retweet"/>
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
                                <Button>신고</Button>
                            </Button.Group>)}>
                            <EllipsisOutlined/>
                            </Popover>
                        </CardButtons>
                 </CardMeta>
             </Card>
            :
                <CardMeta>
                    <NicknameWrapper>{post.User.nickname}</NicknameWrapper>
                    <PostCardContent postData={post.content}/>
                    {post.Images[0] && <PostImages images={post.Images}/>}
                    <CardButtons>
                        <RetweetOutlined onClick={onRetweet} key="retweet"/>
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
            }
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