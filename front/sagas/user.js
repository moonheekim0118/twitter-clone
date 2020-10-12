import {all, fork, takeLatest, delay, put, call} from 'redux-saga/effects';
import * as type from '../actions/user';
import axios from 'axios';

function loginAPI(data){
    return axios.post('/user/login',data);
}

function logoutAPI(){
    return axios.post('/user/logout');
}

function signUpAPI(data){
    return axios.post('/user',data);
}

function changeNicknameAPI(data){
    return axios.post('/api/changeNickname',data);
}

function* login(action){
    try{
        const result= yield call(loginAPI,action.data);
        console.log(result);
        yield put({
            type:type.LOG_IN_SUCCESS,
            data:result.data,
        });
    }catch(err){
        yield put({
            type:type.LOG_IN_FAIL,
            error:err.response.data
        })
    }
}

function* logout(){
    try{
        const result= yield call(logoutAPI);
        yield put({
            type:type.LOG_OUT_SUCCESS,
            data:result.data,
        })
    }catch(err){
        yield put({
            type:type.LOG_OUT_FAIL,
            error:err.response.data
        })
    }
}


function* signUp(action){
    try{
        const result= yield call(signUpAPI,action.data);
        console.log(result);
        yield put({
            type:type.SIGN_UP_SUCCESS,
            data:action.data,
        })
    }catch(err){
        yield put({
            type:type.SIGN_UP_FAIL,
            error:err.response.data
        })
    }
}


function* follow(action){
    try{
        // const result= yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type:type.FOLLOW_SUCCESS,
            data:action.data,
        })
    }catch(err){
        yield put({
            type:type.FOLLOW_FAIL,
            error:err.response.data
        })
    }
}



function* unfollow(action){
    try{
        // const result= yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type:type.UNFOLLOW_SUCCESS,
            data:action.data,
        })
    }catch(err){
        yield put({
            type:type.UNFOLLOW_FAIL,
            error:err.response.data
        })
    }
}


function* changeNickname(action){
    try{
        // const result= yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type:type.CHANGE_NICKNAME_SUCCESS,
            data:action.data,
        })
    }catch(err){
        yield put({
            type:type.CHANGE_NICKNAME_FAIL,
            error:err.response.data
        })
    }
}




function* watchLogin(){
    yield takeLatest(type.LOG_IN_REQUEST,login);
}

function* watchLogout(){
    yield takeLatest(type.LOG_OUT_REQUEST,logout);
}

function* watchSignUp(){
    yield takeLatest(type.SIGN_UP_REQUEST,signUp);
}

function* watchFollow(){
    yield takeLatest(type.FOLLOW_REQUEST,follow);
}

function* watchUnfollow(){
    yield takeLatest(type.UNFOLLOW_REQUEST,unfollow);
}

function* watchChangeNickname(){
    yield takeLatest(type.CHANGE_NICKNAME_REQUEST,changeNickname);
}


export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchChangeNickname),
    ]);
}