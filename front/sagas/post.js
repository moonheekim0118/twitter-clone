import axios from 'axios';
import * as type from '../actions/post';
import {ADD_POST_TO_ME, REMOVE_POST_OF_ME} from '../actions/user';
import {all, fork, put, takeLatest,delay} from 'redux-saga/effects';


function addPostAPI(data){
    return axios.post('/api/addPost',data);
}

function addCommentAPI(data){
    return axios.post('/api/addComment',data);
}

function removePostAPI(data){
    return axios.get('/api/loadPost',data);
}

function loadPostAPI(){
    
}


function* addPost(action){
    try{
        yield delay(1000);
        // const result = yield call(addPostAPI,action.data);
        yield put({
            type:type.ADD_POST_SUCCESS,
            data:action.data,
        })

        yield put({
            type:ADD_POST_TO_ME,
            data:action.data.postId
        })


    }catch(err){
        yield put({
            type:type.ADD_POST_FAIL,
            data:err.response.data
        })
    }
}


function* addComment(action){
    try{
        yield delay(1000);
        // const result = yield call(addPostAPI,action.data);
        yield put({
            type:type.ADD_COMMENT_SUCCESS,
            data:action.data,
        })
    }catch(err){
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


function* loadPost(){
    try{
        yield delay(1000);
        yield put({
            type:type.LOAD_POST_SUCCESS,
            data:type.generateDummyPost(10),
        })

    }catch(err){
        console.log('에러!!'+err);
        yield put({
            type:type.LOAD_POST_FAIL,
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

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemoveComment),
        fork(watchLoadPost),
    ]);
}