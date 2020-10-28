import React , { useState , useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dayjs from 'dayjs';
import { useSelector ,useDispatch } from 'react-redux';
import {likePostAction,unLikePostAction,retweetAction,unretweetAction } from '../../../actions/post';
import PostImages from '../../Image/PostImages';
import PostCardContent from '../PostCardContent';
import Comment from '../../Comment';
import Avatar from '../../Avatar';
import { Wrapper, SideWrapper, Card, CardMeta, CardButtons, 
    NicknameWrapper,Count,CommentButtonWrapper,
    LikeButtonWrapper,Retweet,RetweetCard,
    ContentWrapper,PostInfoWrapper,Date,CommentWrapper } from './style';
import { AvatarWrapper } from '../../globalStyle';
import Tooltip from '../Tooltip';
import { HeartIcon , RetweetIcon , MoreIcon, CommentIcon, SmallRetweetIcon } from '../../Icons';

const PostCard=({post,commentFormOpen})=>{
    const dispatch = useDispatch();
    const [commentFormOpend, setCommentFormOpend]=useState(commentFormOpen);
    const me = useSelector(state => state.user.me?.id);
    const [liked, setLiked] = useState(post.Likers.find((x)=>x.id===me));

    const onClickPost=useCallback(()=>{ // 해당 post Single page로 라우팅 
        if(post.Retweet){
            Router.push(`/post/${post.Retweet.id}`);
        }
        else{
            Router.push(`/post/${post.id}`);
        }
    });

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

    const onClickUser= useCallback((e)=>{
        e.stopPropagation();
        Router.push(`/user/${post.User.id}`);
    },[]);

    const onClickRetweetedUser=useCallback((e)=>{
        e.stopPropagation();
        Router.push(`/user/${post.Retweet.User.id}`);
    },[]);

    const onClickButtons = useCallback((e)=>{
        e.stopPropagation();
    })

    return(
       <Wrapper>
       {post.RetweetId && post.Retweet ?  
        <RetweetCard onClick={onClickPost}>
            <Retweet onClick={onClickUser}><SmallRetweetIcon/>  {post.User.nickname}님이 리트윗 하셨습니다</Retweet>
        <SideWrapper>
            <AvatarWrapper onClick={onClickButtons} size={65}>
                <Avatar imageSrc={post.Retweet.User.profilepic || ""} userId={post.Retweet.User.id}
                userNickname={post.Retweet.User.nickname} isLink={true} isMyPic={false}/>     
            </AvatarWrapper>
        </SideWrapper>
            <CardMeta>
                <PostInfoWrapper>
                    <NicknameWrapper onClick={onClickRetweetedUser}>{post.Retweet.User.nickname}</NicknameWrapper>
                    <Date>{dayjs(post.createdAt).format('MMM DD YYYY')}</Date>
                </PostInfoWrapper>
                <ContentWrapper onClick={onClickButtons}>
                    <PostCardContent postData={post.Retweet.content}/>
                </ContentWrapper>
                {post.Retweet.Images[0] && <div onClick={onClickButtons}><PostImages images={post.Retweet.Images}/></div>}
                <CardButtons onClick={onClickButtons}>
                    <RetweetIcon retweeted={post.UserId===me?"true":"false"} onClick={onRetweetToggle} key="retweet"/>
                    <LikeButtonWrapper liked={liked?"true":"false"}>
                        <HeartIcon onClick={onLikeToggle} />
                        {post.Likers.length>0 && <Count>{post.Likers.length}</Count>}
                    </LikeButtonWrapper>
                    <CommentButtonWrapper opend={commentFormOpend?"true":"false"} >
                        <CommentIcon
                        onClick={onToggleComment} key="comment"/>
                        {post.Comments.length > 0 && <Count>{post.Comments.length}</Count>}
                    </CommentButtonWrapper>
                    {me &&<Tooltip post={post.Retweet}>
                            <MoreIcon/>
                    </Tooltip>}
                 </CardButtons>
            </CardMeta>
        </RetweetCard>
       :
       <Card onClick={onClickPost}>
            <SideWrapper>
                <AvatarWrapper onClick={onClickButtons} size={65}>
                    <Avatar imageSrc={post.User.profilepic || ""} userId={post.User.id}
                    userNickname={post.User.nickname} isLink={true} isMyPic={false}/>     
                </AvatarWrapper>
            </SideWrapper>
            <CardMeta>
                <PostInfoWrapper>
                    <NicknameWrapper onClick={onClickUser}>{post.User.nickname}</NicknameWrapper>
                    <Date>{dayjs(post.createdAt).format('MMM DD YYYY')}</Date>
                </PostInfoWrapper>
                <ContentWrapper onClick={onClickButtons}>
                    <PostCardContent postData={post.content}/>
                </ContentWrapper>
                {post.Images[0] && <div onClick={onClickButtons} ><PostImages images={post.Images}/></div>}
                <CardButtons onClick={onClickButtons}>
                    <RetweetIcon retweeted="false" onClick={onRetweetToggle} key="retweet"/>
                    <LikeButtonWrapper liked={liked ? "true":"false" } >
                        <HeartIcon onClick={onLikeToggle} />
                        {post.Likers.length>0 && <Count>{post.Likers.length}</Count>}
                    </LikeButtonWrapper>
                    <CommentButtonWrapper opend={commentFormOpend ? "true" : "false"} >
                        <CommentIcon
                        onClick={onToggleComment} key="comment"/>
                        {post.Comments.length > 0 && <Count>{post.Comments.length}</Count>}
                    </CommentButtonWrapper>
                    {me && <Tooltip post={post}>
                            <MoreIcon/>
                        </Tooltip>}
                </CardButtons>
            </CardMeta>
        </Card>
       }
        {commentFormOpend &&
        <CommentWrapper><Comment postId={post.id} Comments={post.Comments}/></CommentWrapper> }
       </Wrapper>
    );
}

PostCard.defaultProps={
    commentFormOpen:false,
};


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
    commentFormOpen:PropTypes.bool.isRequired,
}

export default PostCard;