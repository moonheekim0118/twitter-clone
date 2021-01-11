import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import {
    likePostAction,
    unLikePostAction,
    retweetAction,
    unretweetAction,
} from '../../../actions/post';
import PostImages from '../../Image/PostImages';
import PostCardContent from '../PostCardContent';
import Comment from '../../Comment';
import Avatar from '../../Avatar';
import {
    Wrapper,
    SideWrapper,
    Card,
    CardMeta,
    CardButtons,
    NicknameWrapper,
    Count,
    CommentButtonWrapper,
    LikeButtonWrapper,
    Retweet,
    RetweetCard,
    ContentWrapper,
    PostInfoWrapper,
    Date,
    CommentWrapper,
} from './style';
import Tooltip from '../Tooltip';
import {
    HeartIcon,
    RetweetIcon,
    MoreIcon,
    CommentIcon,
    SmallRetweetIcon,
} from '../../Icons';

const PostCard = ({ post, commentFormOpen }) => {
    let CardComponent = Card;
    let loadedPost = post;
    let author = post.User;
    let retweetUser;

    if (post.Retweet) {
        CardComponent = RetweetCard;
        loadedPost = post.Retweet;
        author = post.Retweet.User;
        retweetUser = post.User;
    }

    const dispatch = useDispatch();
    const [commentFormOpend, setCommentFormOpend] = useState(commentFormOpen);
    const me = useSelector((state) => state.user.me?.id);
    const [liked, setLiked] = useState(
        loadedPost.Likers.find((x) => x.id === me)
    );

    const onClickPost = useCallback(() => {
        // 해당 post Single page로 라우팅
        Router.push(`/post/${loadedPost.id}`);
    }, []);

    const onLikeToggle = useCallback(() => {
        if (!me) {
            return;
        }
        if (liked) {
            setLiked(false);
            return dispatch(unLikePostAction(loadedPost.id));
        }
        setLiked(true);
        dispatch(likePostAction(loadedPost.id));
    }, [liked]);

    const onToggleComment = useCallback(() => {
        setCommentFormOpend((prev) => !prev);
    }, []);

    const onRetweetToggle = useCallback(() => {
        if (!me) {
            // 로그인 안되어 있다면
            return;
        }
        if (retweetUser && retweetUser.id === me) {
            // 내가 리트윗한 게시글이라면
            return dispatch(unretweetAction(post.id));
        } else if (author.id !== me) {
            // 내 글이 아니라면
            dispatch(retweetAction(loadedPost.id));
        }
    }, []);

    const onClickUser = useCallback((e) => {
        e.stopPropagation();
        Router.push(`/user/${author.id}`);
    }, []);

    const onClickRetweetUser = useCallback((e) => {
        if (!retweetUser) {
            return;
        }
        e.stopPropagation();
        Router.push(`/user/${retweetUser.id}`);
    }, []);

    const onClickButtons = useCallback((e) => {
        e.stopPropagation();
    });

    return (
        <Wrapper>
            <CardComponent onClick={onClickPost}>
                {retweetUser && (
                    <Retweet onClick={onClickRetweetUser}>
                        <SmallRetweetIcon />
                        {retweetUser.nickname}님이 리트윗 하셨습니다
                    </Retweet>
                )}
                <SideWrapper>
                    <Avatar
                        user={author}
                        size={65}
                        isLink={true}
                        isMyPic={false}
                        onClick={onClickButtons}
                    />
                </SideWrapper>
                <CardMeta>
                    <PostInfoWrapper>
                        <NicknameWrapper onClick={onClickUser}>
                            {author.nickname}
                        </NicknameWrapper>
                        <Date>
                            {dayjs(loadedPost.createdAt).format('MMM DD YYYY')}
                        </Date>
                    </PostInfoWrapper>
                    <ContentWrapper onClick={onClickButtons}>
                        <PostCardContent postData={loadedPost.content} />
                    </ContentWrapper>
                    {loadedPost.Images[0] && (
                        <div onClick={onClickButtons}>
                            <PostImages images={loadedPost.Images} />
                        </div>
                    )}
                    <CardButtons onClick={onClickButtons}>
                        <RetweetIcon
                            retweeted={
                                me && retweetUser && retweetUser.id === me
                                    ? 'true'
                                    : 'false'
                            }
                            onClick={onRetweetToggle}
                            key="retweet"
                        />
                        <LikeButtonWrapper liked={liked ? 'true' : 'false'}>
                            <HeartIcon onClick={onLikeToggle} />
                            {loadedPost.Likers.length > 0 && (
                                <Count>{loadedPost.Likers.length}</Count>
                            )}
                        </LikeButtonWrapper>
                        <CommentButtonWrapper
                            opend={commentFormOpend ? 'true' : 'false'}>
                            <CommentIcon
                                onClick={onToggleComment}
                                key="comment"
                            />
                            {loadedPost.Comments.length > 0 && (
                                <Count>{loadedPost.Comments.length}</Count>
                            )}
                        </CommentButtonWrapper>
                        {me && (
                            <Tooltip post={loadedPost}>
                                <MoreIcon />
                            </Tooltip>
                        )}
                    </CardButtons>
                </CardMeta>
            </CardComponent>
            {commentFormOpend && (
                <CommentWrapper>
                    <Comment
                        postId={loadedPost.id}
                        Comments={loadedPost.Comments}
                    />
                </CommentWrapper>
            )}
        </Wrapper>
    );
};

PostCard.defaultProps = {
    commentFormOpen: false,
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.shape({
            id: PropTypes.number,
            nickname: PropTypes.string,
        }),
        content: PropTypes.string,
        createdAt: PropTypes.string,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
        Likers: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    commentFormOpen: PropTypes.bool.isRequired,
};

export default PostCard;
