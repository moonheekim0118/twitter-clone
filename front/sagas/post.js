import axios from 'axios';
import * as type from '../actions/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../actions/user';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { showAlertAction } from '../actions/ui';

function addPostAPI(data) {
    return axios.post('/post/addPost', data);
}

function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/addComment`, data);
}

function removeCommentAPI(data) {
    return axios.delete(
        `/post/${data.postId}/removeComment?commentId=${data.commentId}`
    );
}

function removePostAPI(postId) {
    return axios.delete(`/post/${postId}`);
}

function loadPostAPI(lastId) {
    return axios.get(`/posts?lastId=${lastId || 0}`);
}

function loadUserPostAPI(data) {
    return axios.get(`/users/${data.userId}/posts?lastId=${data.lastId || 0}`);
}

function loadLikedPostAPI(data) {
    return axios.get(`/users/${data.userId}/likes?lastId=${data.lastId || 0}`);
}

function loadSinglePostAPI(postId) {
    return axios.get(`/post/${postId}`);
}

function modifyPostApi(data) {
    return axios.put('/post/update', data);
}

function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`);
}

function unLikePostAPI(data) {
    return axios.delete(`/post/${data}/like`);
}

function uplaodImagesAPI(data) {
    return axios.post(`/post/images`, data);
}

function retweetPostAPI(data) {
    return axios.post(`/post/${data}/retweet`);
}

function unretweetPostAPI(data) {
    return axios.delete(`/post/${data}/retweet`);
}

function hashTagAPI(data) {
    return axios.get(
        `/hashtag/${encodeURIComponent(data.hashTag)}/?lastId=${
            data.lastId || 0
        }`
    );
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: type.ADD_POST_SUCCESS,
            data: result.data,
        });

        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    } catch (err) {
        yield put({
            type: type.ADD_POST_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: type.ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.ADD_COMMENT_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* removeComment(action) {
    try {
        const result = yield call(removeCommentAPI, action.data);
        yield put({
            type: type.REMOVE_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: type.REMOVE_COMMENT_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* removePost(action) {
    try {
        const result = yield call(removePostAPI, action.data.id);
        yield put({
            type: type.REMOVE_POST_SUCCESS,
            data: result.data,
        });

        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: type.REMOVE_POST_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* loadPost(action) {
    try {
        const result = yield call(loadPostAPI, action.data);
        yield put({
            type: type.LOAD_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.LOAD_POST_FAIL,
            error: err.response.data,
        });
    }
}

function* loadSinglePost(action) {
    try {
        const result = yield call(loadSinglePostAPI, action.data);
        yield put({
            type: type.LOAD_SINGLE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.LOAD_SINGLE_POST_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* loadUserPost(action) {
    try {
        const result = yield call(loadUserPostAPI, action.data);
        yield put({
            type: type.LOAD_USER_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.LOAD_USER_POST_FAIL,
            error: err.response.data,
        });
        yield put(showAlertAction(err.response.data));
    }
}

function* loadLikedPost(action) {
    try {
        const result = yield call(loadLikedPostAPI, action.data);
        yield put({
            type: type.LOAD_LIKED_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.LOAD_LIKED_POST_FAIL,
            error: err.response.data,
        });
        yield put(showAlertAction(err.response.data));
    }
}

function* modifyPost(action) {
    try {
        const result = yield call(modifyPostApi, action.data);
        yield put({
            type: type.MODIFY_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.MODIFY_POST_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: type.LIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.LIKE_POST_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* unLikePost(action) {
    try {
        const result = yield call(unLikePostAPI, action.data);
        yield put({
            type: type.UNLIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.UNLIKE_POST_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* uploadImages(action) {
    try {
        const result = yield call(uplaodImagesAPI, action.data);
        yield put({
            type: type.UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.UPLOAD_IMAGES_FAIL,
            error: err.response.data,
        });
    }
}

function* retweetPost(action) {
    try {
        const result = yield call(retweetPostAPI, action.data);
        yield put({
            type: type.RETWEET_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.RETWEET_POST_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* unretweetPost(action) {
    try {
        const result = yield call(unretweetPostAPI, action.data);
        yield put({
            type: type.UNRETWEET_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.UNRETWEET_POST_FAIL,
            error: err.response.data,
        });
    }
}

function* hashTag(action) {
    try {
        const result = yield call(hashTagAPI, action.data);
        yield put({
            type: type.LOAD_HASHTAG_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err);

        yield put({
            type: type.LOAD_HASHTAG_FAIL,
            error: err.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(type.ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
    yield takeLatest(type.REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(type.ADD_COMMENT_REQUEST, addComment);
}

function* watchRemoveComment() {
    yield takeLatest(type.REMOVE_COMMENT_REQUEST, removeComment);
}

function* watchLoadPost() {
    yield takeLatest(type.LOAD_POST_REQUEST, loadPost);
}

function* watchLoadSinglePost() {
    yield takeLatest(type.LOAD_SINGLE_POST_REQUEST, loadSinglePost);
}

function* watchModifyPost() {
    yield takeLatest(type.MODIFY_POST_REQUEST, modifyPost);
}

function* watchLikePost() {
    yield takeLatest(type.LIKE_POST_REQUEST, likePost);
}

function* watchUnLikePost() {
    yield takeLatest(type.UNLIKE_POST_REQUEST, unLikePost);
}

function* watchUploadImages() {
    yield takeLatest(type.UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchRetweetPost() {
    yield takeLatest(type.RETWEET_POST_REQUEST, retweetPost);
}

function* watchUnretweetPost() {
    yield takeLatest(type.UNRETWEET_POST_REQUEST, unretweetPost);
}

function* watchHashtag() {
    yield takeLatest(type.LOAD_HASHTAG_REQUEST, hashTag);
}

function* watchLoadUserPost() {
    yield takeLatest(type.LOAD_USER_POST_REQUEST, loadUserPost);
}

function* watchLoadLikedPost() {
    yield takeLatest(type.LOAD_LIKED_POST_REQUEST, loadLikedPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
        fork(watchRemoveComment),
        fork(watchLoadPost),
        fork(watchModifyPost),
        fork(watchLikePost),
        fork(watchUnLikePost),
        fork(watchUploadImages),
        fork(watchRetweetPost),
        fork(watchUnretweetPost),
        fork(watchLoadSinglePost),
        fork(watchHashtag),
        fork(watchLoadUserPost),
        fork(watchLoadLikedPost),
    ]);
}
