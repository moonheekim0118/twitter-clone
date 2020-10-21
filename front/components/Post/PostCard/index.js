import React , { useState , useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useSelector ,useDispatch } from 'react-redux';
import { showModifyModalAction,showAlertAction } from '../../../actions/ui';
import { removePostAction,likePostAction,unLikePostAction,retweetAction,unretweetAction } from '../../../actions/post';
import { Button, Popover,Avatar, List, Comment } from 'antd';
import { RetweetOutlined,HeartOutlined,HeartTwoTone,EllipsisOutlined } from '@ant-design/icons';
import PostImages from '../../Image/PostImages';
import PostCardContent from '../PostCardContent';
import CommentForm from '../../Comment';
import FollowButton from '../../Follow/FollowButton';
import { AvatarWrapper, Card, CardMeta, CardButtons, 
    FollowButtonWrapper,NicknameWrapper,LikedCount,LikersCount,
    LikeButtonWrapper,Retweet,RetweetCard,RetweetIcon,CommentIcon,RetweetedIcon,ContentWrapper } from './style';

const PostCard=({post})=>{
    const dispatch = useDispatch();
    const [commentFormOpend, setCommentFormOpend]=useState(false);
    const me = useSelector(state => state.user.me?.id);
    const {removePostloading} = useSelector(state=>state.post);
    const liked = post.Likers.find((x)=>x.id===me);


    const onShare=useCallback(()=>{ // 주소 복사해주기 
        // `http://localhost:3000/post/${post.id}` 복사하도록 구현하기 
        dispatch(showAlertAction('포스트 주소가 복사되었습니다.'));
    });

    // Card div 내부에 있는 요소들 onClick 이벤트에 stopPropagation 적용
    const onUnlike=useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(unLikePostAction(post.id));
    },[]);

    const onLike=useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(likePostAction(post.id));
    },[]);

    const onToggleComment = useCallback(()=>{
        setCommentFormOpend((prev)=>!prev);
    },[])

    const onClickRemove=useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(removePostAction({id:post.id}));
    },[]);

    const onClickModify=useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(showModifyModalAction({ postId:post.id, postContent:post.content}));
    },[post.content]);
    
    const onRetweet = useCallback(()=>{
        if(!me || post.UserId === me){
            return;
        }
        dispatch(retweetAction(post.id));

    },[]);

    const onUnRetweet=useCallback(()=>{
        dispatch(unretweetAction(post.id));
    },[]);

    const onClickUser= useCallback(()=>{
        Router.push(`/user/${post.User.id}`);
    },[]);

    const onClickRetweetedUser=useCallback(()=>{
        Router.push(`/user/${post.Retweet.User.id}`);
    },[]);


    return(
       <>
       {post.RetweetId && post.Retweet ?  
        <RetweetCard>
            <Retweet onClick={onClickUser}><RetweetOutlined/>  {post.User.nickname}님이 리트윗 하셨습니다</Retweet>
        {me && post.Retweet.User.id!==me && <FollowButtonWrapper><FollowButton userId={post.Retweet.User.id}/></FollowButtonWrapper>}
        <AvatarWrapper><Avatar>{post.Retweet.User.nickname[0]}</Avatar></AvatarWrapper>
            <CardMeta>
                    <NicknameWrapper onClick={onClickRetweetedUser}>{post.Retweet.User.nickname}</NicknameWrapper>
                        <PostCardContent postData={post.Retweet.content}/>
                        {post.Retweet.Images[0] && <PostImages onClick={onClickContent}   images={post.Retweet.Images}/>}
                        <CardButtons>
                            { post.UserId === me ? <RetweetedIcon onClick={onUnRetweet} key="retweet"/> : 
                            <RetweetIcon onClick={onRetweet} key="retweet"/> }
                            { liked ?
                                <div>
                                    <HeartTwoTone key="heart" twoToneColor="#eb2f96" onClick={onUnlike}/>
                                    {post.Retweet.Likers.length>0 && <LikedCount>{post.Retweet.Likers.length}</LikedCount>}
                                </div>
                                :
                                <LikeButtonWrapper>
                                    <HeartOutlined onClick={onLike} key="heart" />
                                    {post.Retweet.Likers.length>0 && <LikersCount>{post.Retweet.Likers.length}</LikersCount>}
                                </LikeButtonWrapper>
                                }
                            <CommentIcon onClick={onToggleComment} key="comment"/>
                            <Popover key="more" content={(<Button.Group>
                                <Button onClick={onShare}>공유</Button>
                                <Button>신고</Button>
                            </Button.Group>)}>
                            <EllipsisOutlined/>
                            </Popover>
                        </CardButtons>
            </CardMeta>
        </RetweetCard>
       :
       <Card>
            {me && post.User.id!==me && <FollowButtonWrapper><FollowButton userId={post.User.id}/></FollowButtonWrapper>}
            <AvatarWrapper><Avatar>{post.User.nickname[0]}</Avatar></AvatarWrapper>
            <CardMeta>
                    <NicknameWrapper onClick={onClickUser}>{post.User.nickname}</NicknameWrapper>
                    <ContentWrapper >
                        <PostCardContent postData={post.content}/>
                    </ContentWrapper>
                    {post.Images[0] && <PostImages images={post.Images}/>}
                    <CardButtons>
                        <RetweetIcon onClick={onRetweet} key="retweet"/>
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
                        <CommentIcon onClick={onToggleComment} key="comment"/>
                        <Popover key="more" content={(<Button.Group>
                            {me===post.User.id 
                            ?<>
                            <Button onClick={onShare}>공유</Button>
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
       }
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