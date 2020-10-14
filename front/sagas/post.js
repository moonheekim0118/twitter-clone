import axios from 'axios';
import * as type from '../actions/post';
import {ADD_POST_TO_ME, REMOVE_POST_OF_ME} from '../actions/user';
import {all, fork, put, takeLatest,delay,call} from 'redux-saga/effects';


function addPostAPI(data){
    return axios.post('/post/addPost',data);
}

function addCommentAPI(data){
    return axios.post(`/post/${data.postId}/addComment`,data);
}

function removePostAPI(data){
    return axios.get('/api/loadPost',data);
}

function loadPostAPI(lastId){
    return axios.get(`/posts?lastId=${lastId || 0}`);
}

function modifyPostApi(data){
    return axios.put('/api/modifyPost',data);
}

function likePostAPI(data){
    return axios.patch(`/post/${data}/like`);
}

function unLikePostAPI(data){
    return axios.delete(`/post/${data}/like`);
}


function* addPost(action){
    try{
        const result = yield call(addPostAPI,action.data);
        yield put({
            type:type.ADD_POST_SUCCESS,
            data:result.data,
        })

        yield put({
            type:ADD_POST_TO_ME,
            data:result.data.id,
        })


    }catch(err){
        console.log(err);
        yield put({
            type:type.ADD_POST_FAIL,
            data:err.response.data
        })
    }
}


function* addComment(action){
    try{
        const result = yield call(addCommentAPI,action.data);
        yield put({
            type:type.ADD_COMMENT_SUCCESS,
            data:result.data,
        })
    }catch(err){
        console.log(err);
        yield put({
            type:type.ADD_COMMENT_FAIL,
            data:err.response.data
        })
    }
}

function* removePost(action){
    try{
        yield delay(1000);
        yield put({
            type:type.REMOVE_POST_SUCCESS,
            data:action.data,
        })

        yield put({
            type:REMOVE_POST_OF_ME,
            data:action.data
        })

    }catch(err){
        yield put({
            type:type.REMOVE_POST_FAIL,
            data:err.response.data
        })
    }
}


function* loadPost(action){
    try{
        const result = yield call(loadPostAPI,action.data);
        yield put({
            type:type.LOAD_POST_SUCCESS,
            data:result.data,
        })

    }catch(err){
        console.log('에러!!'+err);
        yield put({
            type:type.LOAD_POST_FAIL,
            data:err.response.data
        })
    }
}

function* modifyPost(action){
    try{
        yield delay(1000);
        yield put({
            type:type.MODIFY_POST_SUCCESS,
            data:action.data,
        })

    }catch(err){
        console.log('에러!!'+err);
        yield put({
            type:type.MODIFY_POST_FAIL,
            error:err.response.data
        })
    }
}

function* likePost(action){
    try{
        const result= yield call(likePostAPI,action.data);
        yield put({
            type:type.LIKE_POST_SUCCESS,
            data:result.data
        })

    }catch(err){
        console.log('에러!!'+err);
        yield put({
            type:type.LIKE_POST_FAIL,
            data:err.response.data
        })
    }
}

function* unLikePost(action){
    try{
        const result= yield call(unLikePostAPI,action.data);
        yield put({
            type:type.UNLIKE_POST_SUCCESS,
            data:result.data
        })

    }catch(err){
        console.log('에러!!'+err);
        yield put({
            type:type.UNLIKE_POST_FAIL,
            data:err.response.data
        })
    }
}




function* watchAddPost(){
    yield takeLatest(type.ADD_POST_REQUEST,addPost);    
}


function* watchAddComment(){
    yield takeLatest(type.ADD_COMMENT_REQUEST,addComment);    
}

function* watchRemoveComment(){
    yield takeLatest(type.REMOVE_POST_REQUEST,removePost);
}

function* watchLoadPost(){
    yield takeLatest(type.LOAD_POST_REQUEST,loadPost);
}

function* watchModifyPost(){
    yield takeLatest(type.MODIFY_POST_REQUEST,modifyPost);
}

function* watchLikePost(){
    yield takeLatest(type.LIKE_POST_REQUEST,likePost);
}

function* watchUnLikePost(){
    yield takeLatest(type.UNLIKE_POST_REQUEST,unLikePost);
}


export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemoveComment),
        fork(watchLoadPost),
        fork(watchModifyPost),
        fork(watchLikePost),
        fork(watchUnLikePost)
    ]);
}