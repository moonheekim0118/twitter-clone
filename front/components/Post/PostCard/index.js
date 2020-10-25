import React , { useState , useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dayjs from 'dayjs';
import { useSelector ,useDispatch } from 'react-redux';
import {likePostAction,unLikePostAction,retweetAction,unretweetAction } from '../../../actions/post';
import { List, Comment } from 'antd';
import PostImages from '../../Image/PostImages';
import PostCardContent from '../PostCardContent';
import CommentForm from '../../Comment';
import Avatar from '../../Avatar';
import { SideWrapper, Card, CardMeta, CardButtons, 
    NicknameWrapper,LikersCount,
    LikeButtonWrapper,Retweet,RetweetCard,
    ContentWrapper,PostInfoWrapper,Date } from './style';
import { AvatarWrapper } from '../../globalStyle';
import Tooltip from '../Tooltip';
import { HeartIcon , RetweetIcon , MoreIcon, CommentIcon, SmallRetweetIcon } from '../../Icons';

const PostCard=({post})=>{
    const dispatch = useDispatch();
    const [commentFormOpend, setCommentFormOpend]=useState(false);
    const me = useSelector(state => state.user.me?.id);
    const [liked, setLiked] = useState(post.Likers.find((x)=>x.id===me));

    const onLikeToggle=useCallback(()=>{
        if(!me){
            return;
        }
        if(liked){
            setLiked(false);
            return dispatch(unLikePostAction(post.id));
        }
        setLiked(true);
        dispatch(likePostAction(post.id));
    },[liked]);

    const onToggleComment = useCallback(()=>{
        setCommentFormOpend((prev)=>!prev);
    },[])

    const onRetweetToggle = useCallback(()=>{
        if(!me ){ // 로그인 안되어 있다면 
            return;
        }
        if( post.UserId === me && post.Retweet ){ // 내가 리트윗한 게시글이라면 
            return dispatch(unretweetAction(post.id));
        }
        else if( post.UserId!==me ){
            dispatch(retweetAction(post.id));
        }
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
            <Retweet onClick={onClickUser}><SmallRetweetIcon/>  {post.User.nickname}님이 리트윗 하셨습니다</Retweet>
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
                    <RetweetIcon retweeted={post.UserId === me && "true"} onClick={onRetweetToggle} key="retweet"/>
                    <LikeButtonWrapper liked={liked && "true"}>
                        <HeartIcon onClick={onLikeToggle} />
                        {post.Likers.length>0 && <LikersCount>{post.Likers.length}</LikersCount>}
                    </LikeButtonWrapper>
                    <CommentIcon opend={commentFormOpend && "true"} onClick={onToggleComment} key="comment"/>
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
                    <RetweetIcon onClick={onRetweetToggle} key="retweet"/>
                    <LikeButtonWrapper liked={liked && "true" } >
                        <HeartIcon onClick={onLikeToggle} />
                        {post.Likers.length>0 && <LikersCount>{post.Likers.length}</LikersCount>}
                    </LikeButtonWrapper>
                    <CommentIcon opend={commentFormOpend && "true"} onClick={onToggleComment} key="comment"/>
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