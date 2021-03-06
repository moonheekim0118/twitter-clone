// POST 관련 액션

// 포스트 여러개 가져오기
export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAIL = "LOAD_POST_FAIL";

// 포스트 하나 가져오기
export const LOAD_SINGLE_POST_REQUEST = "LOAD_SINGLE_POST_REQUEST";
export const LOAD_SINGLE_POST_SUCCESS = "LOAD_SINGLE_POST_SUCCESS";
export const LOAD_SINGLE_POST_FAIL = "LOAD_SINGLE_POST_FAIL";

// 유저가 작성한 포스트 로딩

export const LOAD_USER_POST_REQUEST = "LOAD_USER_POST_REQUEST";
export const LOAD_USER_POST_SUCCESS = "LOAD_USER_POST_SUCCESS";
export const LOAD_USER_POST_FAIL = "LOAD_USER_POST_FAIL";

// 유저가 좋아요한 포스트 로딩

export const LOAD_LIKED_POST_REQUEST = "LOAD_LIKED_POST_REQUEST";
export const LOAD_LIKED_POST_SUCCESS = "LOAD_LIKED_POST_SUCCESS";
export const LOAD_LIKED_POST_FAIL = "LOAD_LIKED_POST_FAIL";

// 포스트 추가
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAIL = "ADD_POST_FAIL";

// 포스트 삭제
export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAIL = "REMOVE_POST_FAIL";

//포스트 수정
export const MODIFY_POST_REQUEST = "MODIFY_POST_REQUEST";
export const MODIFY_POST_SUCCESS = "MODIFY_POST_SUCCESS";
export const MODIFY_POST_FAIL = "MODIFY_POST_FAIL";

// COMMENT

// 커멘트 추가
export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAIL = "ADD_COMMENT_FAIL";

// 커멘트 삭제
export const REMOVE_COMMENT_REQUEST = "REMOVE_COMMENT_REQUEST";
export const REMOVE_COMMENT_SUCCESS = "REMOVE_COMMENT_SUCCESS";
export const REMOVE_COMMENT_FAIL = "REMOVE_COMMENT_FAIL";

// LIKE POSt

//포스트 좋아요
export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAIL = "LIKE_POST_FAIL";

//포스트 좋아요 취소
export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAIL = "UNLIKE_POST_FAIL";

// 이미지 업로드

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAIL = "UPLOAD_IMAGES_FAIL";

// 이미지 삭제
export const REMOVE_IMAGE = "REMOVE_IMAGE";
// 이미지 path 초기화
export const RESET_IMAGE = "RESET_IMAGE";

// 리트윗 포스트
export const RETWEET_POST_REQUEST = "RETWEET_POST_REQUEST";
export const RETWEET_POST_SUCCESS = "RETWEET_POST_SUCCESS";
export const RETWEET_POST_FAIL = "RETWEET_POST_FAIL";

// 언리트윗 포스트
export const UNRETWEET_POST_REQUEST = "UNRETWEET_POST_REQUEST";
export const UNRETWEET_POST_SUCCESS = "UNRETWEET_POST_SUCCESS";
export const UNRETWEET_POST_FAIL = "UNRETWEET_POST_FAIL";

export const LOAD_HASHTAG_REQUEST = "LOAD_HASHTAG_REQUEST";
export const LOAD_HASHTAG_SUCCESS = "LOAD_HASHTAG_SUCCESS";
export const LOAD_HASHTAG_FAIL = "LOAD_HASHTAG_FAIL";

// 타겟 변경
export const CHANGE_TARGET = "CHANGE_TARGET";

export const changeTargetAction = (data) => {
  return {
    type: CHANGE_TARGET,
    data,
  };
};

export const loadPostsAction = (data) => {
  return {
    type: LOAD_POST_REQUEST,
    data,
  };
};

export const loadUserLikedPostsAction = (data) => {
  return {
    type: LOAD_LIKED_POST_REQUEST,
    data,
  };
};

export const loadUserPostsAction = (data) => {
  return {
    type: LOAD_USER_POST_REQUEST,
    data,
  };
};

export const loadHashtagAction = (data) => {
  return {
    type: LOAD_HASHTAG_REQUEST,
    data,
  };
};

export const loadSinglePostAction = (data) => {
  return {
    type: LOAD_SINGLE_POST_REQUEST,
    data,
  };
};

export const resetImageAction = (data) => {
  return {
    type: RESET_IMAGE,
    data,
  };
};

export const removeImageAction = (data) => {
  return {
    type: REMOVE_IMAGE,
    data,
  };
};
export const uploadImagesAction = (data) => {
  return {
    type: UPLOAD_IMAGES_REQUEST,
    data,
  };
};
export const addPostAction = (data) => {
  return {
    type: ADD_POST_REQUEST,
    data,
  };
};

export const removePostAction = (data) => {
  return {
    type: REMOVE_POST_REQUEST,
    data,
  };
};

export const modifyPostAction = (data) => {
  return {
    type: MODIFY_POST_REQUEST,
    data,
  };
};

export const addCommentAction = (data) => {
  return {
    type: ADD_COMMENT_REQUEST,
    data,
  };
};

export const removeCommentAction = (data) => {
  return {
    type: REMOVE_COMMENT_REQUEST,
    data,
  };
};

export const likePostAction = (data) => {
  return {
    type: LIKE_POST_REQUEST,
    data,
  };
};

export const unLikePostAction = (data) => {
  return {
    type: UNLIKE_POST_REQUEST,
    data,
  };
};

// 리트윗
export const retweetAction = (data) => {
  return {
    type: RETWEET_POST_REQUEST,
    data,
  };
};

export const unretweetAction = (data) => {
  return {
    type: UNRETWEET_POST_REQUEST,
    data,
  };
};
