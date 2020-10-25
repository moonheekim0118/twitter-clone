import React , { useState , useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dayjs from 'dayjs';
import { useSelector ,useDispatch } from 'react-redux';
import {likePostAction,unLikePostAction,retweetAction,unretweetAction } from '../../../actions/post';
import { List, Comment } from 'antd';
import { RetweetOutlined,HeartOutlined,HeartTwoTone,EllipsisOutlined } from '@ant-design/icons';
import PostImages from '../../Image/PostImages';
import PostCardContent from '../PostCardContent';
import CommentForm from '../../Comment';
import Avatar from '../../Avatar';
import { SideWrapper, Card, CardMeta, CardButtons, 
    NicknameWrapper,LikedCount,LikersCount,
    LikeButtonWrapper,Retweet,RetweetCard,RetweetIcon,
    CommentIcon,RetweetedIcon,ContentWrapper,PostInfoWrapper,Date,MoreIcon } from './style';
import { AvatarWrapper } from '../../globalStyle';
import Tooltip from '../Tooltip';

const PostCard=({post})=>{
    const dispatch = useDispatch();
    const [commentFormOpend, setCommentFormOpend]=useState(false);
    const me = useSelector(state => state.user.me?.id);
    const liked = post.Likers.find((x)=>x.id===me);

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
        <SideWrapper>
            <AvatarWrapper size={65}>
                <Avatar imageSrc={post.Retweet.User.profilepic} userId={post.Retweet.User.id}
                userNickname={post.Retweet.User.nickname} isLink={true} isMyPic={false}/>     
            </AvatarWrapper>
        </SideWrapper>
            <CardMeta>
                    <PostInfoWrapper>
                        <NicknameWrapper onClick={onClickRetweetedUser}>{post.Retweet.User.nickname}</NicknameWrapper>
                        <Date>{dayjs(post.createdAt).format('MMM DD YYYY')}</Date>
                    </PostInfoWrapper>
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
                            {me &&<Tooltip post={post.Retweet}>
                                <MoreIcon/>
                            </Tooltip>}
                        </CardButtons>
            </CardMeta>
        </RetweetCard>
       :
       <Card>
            <SideWrapper>
                <AvatarWrapper size={65}>
                    <Avatar imageSrc={post.User.profilepic} userId={post.User.id}
                    userNickname={post.User.nickname} isLink={true} isMyPic={false}/>     
                </AvatarWrapper>
            </SideWrapper>
            <CardMeta>
                <PostInfoWrapper>
                    <NicknameWrapper onClick={onClickUser}>{post.User.nickname}</NicknameWrapper>
                    <Date>{dayjs(post.createdAt).format('MMM DD YYYY')}</Date>
                </PostInfoWrapper>
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
                        {me && <Tooltip post={post}>
                                <MoreIcon/>
                            </Tooltip>}
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
                            avatar={
                            <AvatarWrapper size={30}>
                                <Avatar imageSrc={item.User.profilepic} userId={item.User.id}
                                userNickname={item.User.nickname} isLink={true} isMyPic={false}/>
                            </AvatarWrapper>
                        }
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