import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Avatar from "../../Avatar";
import styled from "styled-components";
import { removeCommentAction } from "../../../actions/post";
import { useSelector, useDispatch } from "react-redux";
import { RedCloseIcon } from "../../Icons";

// Comment
const CommentCard = ({ postId, comment }) => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.me);

  const onClickRemove = useCallback(() => {
    if (!me || comment.User.id !== me.id) {
      return;
    }
    dispatch(removeCommentAction({ postId, commentId: comment.id }));
  }, []);

  return (
    <Container>
      <AvatarContainer>
        <Avatar user={comment.User} isLink={true} isMyPic={false} size={30} />
      </AvatarContainer>
      <Contents>
        <Nickname>{comment.User.nickname}</Nickname>
        <span> {comment.content}</span>
      </Contents>
      {me && comment.User.id === me.id && (
        <ButtonContainer>
          <RedCloseIcon onClick={onClickRemove}>삭제</RedCloseIcon>
        </ButtonContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;

  margin-bottom: ${({ theme }) => theme.margins.xl};
  padding: 0 ${({ theme }) => theme.paddings.lg}
    ${({ theme }) => theme.paddings.lg} ${({ theme }) => theme.paddings.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: 0.2s background-color ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_gray};
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

// for avatar
const AvatarContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 5%;
`;

// for nickanme and contents
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 90%;
`;

const Nickname = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray_2};
`;

CommentCard.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.shape({
      id: PropTypes.number,
      nickname: PropTypes.string,
      profilepic: PropTypes.string,
    }),
    content: PropTypes.string,
  }).isRequired,
};

export default CommentCard;
