import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  followRequestAction,
  unfollowRequestAction,
} from "../../../actions/user";
import Button from "../../../atom/Button";
import { LoadingIcon } from "../../Icons";

const FollowButton = ({ userId }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector(
    (state) => state.user
  );
  const isFollowing = me && me.Followings.find((v) => v.id === userId);

  const onClickFollow = useCallback(
    (e) => {
      e.stopPropagation();
      if (isFollowing) {
        // 언팔로우
        dispatch(unfollowRequestAction(userId));
      } else {
        // 팔로우
        dispatch(followRequestAction(userId));
      }
    },
    [isFollowing]
  );

  return (
    <>
      {followLoading || unfollowLoading ? (
        <LoadingIcon />
      ) : (
        <Button
          onClick={onClickFollow}
          style={{ radius: "24px", back: "trans" }}
          type="button">
          {isFollowing ? "언팔로우" : "팔로우"}
        </Button>
      )}
    </>
  );
};

FollowButton.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default FollowButton;
