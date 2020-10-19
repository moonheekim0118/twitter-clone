import {all, fork, takeLatest, put, call} from 'redux-saga/effects';
import * as type from '../actions/commonUser';
import axios from 'axios';
import {showAlertAction } from '../actions/ui';

// 현재 로그인 된 사용자도 user 프로필 페이지 들어가면 이 정보를 로딩해줘야함 
function loadUserInfoAPI(userId){
    return axios.get(`/users/${userId}`);
}

function loadFollowingsListAPI(data){
    return axios.get(`/users/${data.userId}/followings?lastId=${data.lastId || 0}`);
}

function loadFollowerListAPI(data){
    return axios.get(`/users/${data.userId}/followers?lastId=${data.lastId || 0}`);
}

function loadUserPostAPI(data){
    //`/posts?lastId=${lastId || 0}`
    return axios.get(`/users/${data.userId}/posts?lastId=${data.lastId || 0}`);
};

function loadLikedPostAPI(data){
    return axios.get(`/users/${data.userId}/likes?lastId=${data.lastId || 0}`);
}

function* loadUserInfo(action){
    try{
        const result= yield call(loadUserInfoAPI,action.data);
        yield put({
            type:type.LOAD_USER_INFO_SUCCESS,
            data:result.data,
        });
    }catch(err){
        yield put({
            type:type.LOAD_USER_INFO_FAIL,
            error:err.response.data
        })
        yield put(showAlertAction(err.response.data))
    }
}

function* loadFollowings(action){
    try{
        const result= yield call(loadFollowingsListAPI,action.data);
        yield put({
            type:type.LOAD_FOLLOWINGS_SUCCESS,
            data:result.data,
        });
    }catch(err){
        yield put({
            type:type.LOAD_FOLLOWINGS_FAIL,
            error:err.response.data
        })
        yield put(showAlertAction(err.response.data))
    }
}


function* loadFollowers(action){
    try{
        const result= yield call(loadFollowerListAPI,action.data);
        yield put({
            type:type.LOAD_FOLLOWERS_SUCCESS,
            data:result.data,
        });
    }catch(err){
        yield put({
            type:type.LOAD_FOLLOWERS_FAIL,
            error:err.response.data
        })
        yield put(showAlertAction(err.response.data))
    }
}

function* loadUserPost(action){
    try{
        const result= yield call(loadUserPostAPI,action.data);
        yield put({
            type:type.LOAD_USER_POST_SUCCESS,
            data:result.data,
        });
    }catch(err){
        yield put({
            type:type.LOAD_USER_POST_FAIL,
            error:err.response.data
        })
        yield put(showAlertAction(err.response.data))
    }
}


function* loadLikedPost(action){
    try{
        const result= yield call(loadLikedPostAPI,action.data);
        yield put({
            type:type.LOAD_LIKED_POST_SUCCESS,
            data:result.data,
        });
    }catch(err){
        yield put({
            type:type.LOAD_LIKED_POST_FAIL,
            error:err.response.data
        })
        yield put(showAlertAction(err.response.data))
    }
}





function* watchLoadUserInfo(){
    yield takeLatest(type.LOAD_USER_INFO_REQUEST,loadUserInfo);
}

function* watchLoadFollowings(){
    yield takeLatest(type.LOAD_FOLLOWINGS_REQUEST,loadFollowings);
}

function* watchLoadFollowers(){
    yield takeLatest(type.LOAD_FOLLOWERS_REQUEST,loadFollowers);
}

function* watchLoadUserPost(){
    yield takeLatest(type.LOAD_USER_POST_REQUEST,loadUserPost);
}


function* watchLoadLikedPost(){
    yield takeLatest(type.LOAD_LIKED_POST_REQUEST,loadLikedPost);
}





export default function* commonUserSaga(){
    yield all([
        fork(watchLoadUserInfo),
        fork(watchLoadFollowings),
        fork(watchLoadFollowers),
        fork(watchLoadUserPost),
        fork(watchLoadLikedPost),
    ]);
}