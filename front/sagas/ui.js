import {all, fork, takeLatest} from 'redux-saga/effects';
import * as type from '../actions/ui';

function* request(){
    yield ;
}

function* watchShowProfileModal(){
    yield takeLatest(type.SHOW_PROFILE_MODAL,request);
}

function* watchShowPostModal(){
    yield takeLatest(type.SHOW_POST_MODAL,request);
}

function* watchHideProfileModal(){
    yield takeLatest(type.HIDE_PROFILE_MODAL,request);
}

function* watchHidePostModal(){
    yield takeLatest(type.HIDE_POST_MODAL,request);
}

function* watchShowModifyModal(){
    yield takeLatest(type.SHOW_MODIFY_MODAL,request);
}

function* watchHideModifyModal(){
    yield takeLatest(type.HIDE_MODIFY_MODAL,request);
}

export default function* uiSaga(){
    yield all([
        fork(watchShowProfileModal),
        fork(watchShowPostModal),
        fork(watchHideProfileModal),
        fork(watchHidePostModal),
        fork(watchShowModifyModal),
        fork(watchHideModifyModal),
    ]);
}