import {all, fork, takeLatest, put, call} from 'redux-saga/effects';
import * as type from '../actions/commonUser';
import axios from 'axios';

// 현재 로그인 된 사용자도 user 프로필 페이지 들어가면 이 정보를 로딩해줘야함 
function loadUserInfoAPI(userId){
    return axios.get(`/user/${userId}`);
}

// 
function loadFollowingsListAPI(userId){
    return axios.get(`/user/${userId}/followings`);
}

function loadFollowerListAPI(userId){
    return axios.get(`/user/${userId}/followers`);
}

function loadUserPostAPI(userId){
    return axios.get(`/user/${userId}/posts`);
};

function loadLikedPostAPI(userId){
    return axios.get(`/user/${userId}/likes`);
}

function* loadUserInfo(){
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
    }
}

function* loadFollowings(){
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
    }
}


function* loadFollowers(){
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
    }
}

function* loadUserPost(){
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
    }
}


function* loadLikedPost(){
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
    }
}





function* wathchLoadUserInfo(){
    yield takeLatest(type.LOAD_USER_INFO_REQUEST,loadUserInfo);
}

function* wathchLoadFollowings(){
    yield takeLatest(type.LOAD_FOLLOWINGS_REQUEST,loadFollowings);
}

function* wathchLoadFollowers(){
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
        fork(wathchLoadUserInfo),
        fork(wathchLoadFollowings),
        fork(wathchLoadFollowers),
        fork(watchLoadUserPost),
        fork(watchLoadLikedPost),
    ]);
}