import {all, fork} from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';
import uiSaga from './ui';

export default function* rootSaga(){
    yield all([
        fork(postSaga),
        fork(userSaga),
        fork(uiSaga),
    ]);
};

