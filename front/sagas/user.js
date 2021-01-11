import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import * as type from '../actions/user';
import axios from 'axios';
import { showAlertAction } from '../actions/ui';

function loadMyInfoAPI() {
    return axios.get('/user');
}

function loginAPI(data) {
    return axios.post('/user/login', data);
}

function logoutAPI() {
    return axios.post('/user/logout');
}

function signUpAPI(data) {
    return axios.post('/user/signUp', data);
}

function followUserAPI(userId) {
    return axios.patch(`/user/${userId}/follow`);
}

function unfollowUserAPI(userId) {
    return axios.delete(`/user/${userId}/follow`);
}

function uploadProfilePicAPI(data) {
    return axios.post('/user/profilepic', data);
}

function updateMyInfoAPI(data) {
    return axios.patch('/user/updateMyInfo', data);
}

function* loadMyInfo() {
    try {
        const result = yield call(loadMyInfoAPI);
        yield put({
            type: type.LOAD_MY_INFO_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: type.LOAD_MY_INFO_FAIL,
            error: err.response.data,
        });
    }
}

function* login(action) {
    try {
        const result = yield call(loginAPI, action.data);
        console.log(result);
        yield put({
            type: type.LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.LOG_IN_FAIL,
            error: err.response.data,
        });
    }
}

function* logout() {
    try {
        const result = yield call(logoutAPI);
        yield put({
            type: type.LOG_OUT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.LOG_OUT_FAIL,
            error: err.response.data,
        });
    }
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        yield put({
            type: type.SIGN_UP_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: type.SIGN_UP_FAIL,
            error: err.response.data,
        });
    }
}

function* follow(action) {
    try {
        const result = yield call(followUserAPI, action.data);
        yield put({
            type: type.FOLLOW_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.FOLLOW_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* unfollow(action) {
    try {
        const result = yield call(unfollowUserAPI, action.data);
        yield put({
            type: type.UNFOLLOW_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: type.UNFOLLOW_FAIL,
            error: err.response.data,
        });

        yield put(showAlertAction(err.response.data));
    }
}

function* uploadProfilePic(action) {
    try {
        const result = yield call(uploadProfilePicAPI, action.data);
        yield put({
            type: type.UPLOAD_PROFILE_PIC_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: type.UPLOAD_PROFILE_PIC_FAIL,
            error: err.response.data,
        });
    }
}

function* updateMyInfo(action) {
    try {
        const result = yield call(updateMyInfoAPI, action.data);
        yield put({
            type: type.UPDATE_MY_INFO_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: type.UPDATE_MY_INFO_FAIL,
            error: err.response.data,
        });
        yield put(showAlertAction(err.response.data));
    }
}

function* watchLogin() {
    yield takeLatest(type.LOG_IN_REQUEST, login);
}

function* watchLogout() {
    yield takeLatest(type.LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
    yield takeLatest(type.SIGN_UP_REQUEST, signUp);
}

function* watchFollow() {
    yield takeLatest(type.FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
    yield takeLatest(type.UNFOLLOW_REQUEST, unfollow);
}

function* wathchLoadMyInfo() {
    yield takeLatest(type.LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* wathchUploadProfilePic() {
    yield takeLatest(type.UPLOAD_PROFILE_PIC_REQUEST, uploadProfilePic);
}

function* wathchUpdateMyInfo() {
    yield takeLatest(type.UPDATE_MY_INFO_REQUEST, updateMyInfo);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(wathchLoadMyInfo),
        fork(wathchUploadProfilePic),
        fork(wathchUpdateMyInfo),
    ]);
}
