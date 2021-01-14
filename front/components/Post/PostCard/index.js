import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import PostImages from "../../Images/PostImages";
import PostCardContent from "../PostCardContent";
import PostInfo from "../PostInfo";
import PostButton from "../PostButton";
import Comment from "../../Comment";
import Tooltip from "../Tooltip";
import Side from "../../Form/Side";
import { useSelector, useDispatch } from "react-redux";
import {
  likePostAction,
  unLikePostAction,
  retweetAction,
  unretweetAction,
} from "../../../actions/post";
import {
  Container,
  Card,
  CardMeta,
  CardButtons,
  Retweet,
  RetweetCard,
  ContentContainer,
  CommentContainer,
} from "./style";
import { RetweetIcon, MoreIcon, SmallRetweetIcon } from "../../Icons";

const PostCard = ({ post, commentFormOpen }) => {
  const dispatch = useDispatch();

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

  const [commentFormOpend, setCommentFormOpend] = useState(commentFormOpen);
  const me = useSelector((state) => state.user.me?.id);
  const [liked, setLiked] = useState(
    loadedPost.Likers.find((x) => x.id === me)
  );

  const onClickPost = useCallback(() => {
    // 해당 post Single page로 라우팅
    Router.push(`/post/${loadedPost.id}`);
  }, []);

  const onToggleLike = useCallback(() => {
    if (!me) {
      // 로그인 안되어있을 경우
      return;
    } else if (liked) {
      setLiked(false);
      return dispatch(unLikePostAction(loadedPost.id));
    }
    setLiked(true);
    dispatch(likePostAction(loadedPost.id));
  }, [liked]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, []);

  const onToggleRetweet = useCallback(() => {
    if (!me || author.id === me) {
      // 로그인 안되었거나, 내가 작성한 글일 경우
      return;
    } else if (retweetUser && retweetUser.id === me) {
      // 내가 리트윗한 게시글이라면
      return dispatch(unretweetAction(post.id));
    }
    dispatch(retweetAction(loadedPost.id));
  }, []);

  const onClickUser = useCallback((e, userId) => {
    e.stopPropagation();
    Router.push(`/user/${userId}`);
  }, []);

  const onStopBubbling = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <Container>
      <CardComponent onClick={onClickPost}>
        {retweetUser && (
          <Retweet onClick={(e) => onClickUser(e, retweetUser.id)}>
            <SmallRetweetIcon />
            {retweetUser.nickname}님이 리트윗 하셨습니다
          </Retweet>
        )}
        <Side isLink={true} user={author} isMyPic={false} />
        <CardMeta>
          <PostInfo
            nickname={author.nickname}
            onClick={(e) => onClickUser(e, author.id)}
            date={loadedPost.createdAt}
          />
          <ContentContainer onClick={onStopBubbling}>
            <PostCardContent postData={loadedPost.content} />
          </ContentContainer>
          {loadedPost.Images[0] && (
            <div onClick={onStopBubbling}>
              <PostImages images={loadedPost.Images} />
            </div>
          )}
          <CardButtons onClick={onStopBubbling}>
            <RetweetIcon
              retweeted={
                me && retweetUser && retweetUser.id === me ? "true" : "false"
              }
              onClick={onToggleRetweet}
              key="retweet"
            />
            <PostButton
              type="like"
              checked={liked}
              onClick={onToggleLike}
              counts={loadedPost.Likers.length}
            />
            <PostButton
              type="comment"
              checked={commentFormOpend}
              onClick={onToggleComment}
              counts={loadedPost.Comments.length}
            />
            {me && (
              <Tooltip post={loadedPost}>
                <MoreIcon />
              </Tooltip>
            )}
          </CardButtons>
        </CardMeta>
      </CardComponent>
      {commentFormOpend && (
        <CommentContainer>
          <Comment
            postId={loadedPost.id}
            Comments={loadedPost.Comments}
            me={me}
          />
        </CommentContainer>
      )}
    </Container>
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
