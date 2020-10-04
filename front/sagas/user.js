import {all, fork, takeLatest, delay, put} from 'redux-saga/effects';
import axios from 'axios';

function loginAPI(data){
    return axios.post('/api/login',data);
}

function logoutAPI(){
    return axios.post('/api/logout');
}

function* login(action){
    try{
        // const result= yield call(loginAPI,action.data);
        yield delay(1000);
        yield put({
            type:'LOG_IN_SUCCESS',
            // data:result.data
        });
    }catch(err){
        yield put({
            type:'LOG_IN_FAIL',
            data:err.response.data
        })
    }
}

function* logout(){
    try{
        // const result= yield call(logoutAPI);
        yield delay(1000);
        yield put({
            type:'LOG_OUT_SUCCESS',
            // data:result.data
        })
    }catch(err){
        yield put({
            type:'LOG_OUT_FAIL',
            data:err.response.data
        })
    }
}


function* watchLogin(){
    yield takeLatest('LOG_IN_REQUEST',login);
}

function* watchLogout(){
    yield takeLatest('LOG_OUT_REQUEST',logout);
}


export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogout)
    ]);
}