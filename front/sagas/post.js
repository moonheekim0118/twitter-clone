import axios from 'axios';
import * as type from '../actions/post';
import {all, fork, put, throttle,delay} from 'redux-saga/effects';


function addPostAPI(data){
    return axios.post('/api/addPost',data);
}

function* addPost(action){
    try{
        yield delay(1000);
        // const result = yield call(addPostAPI,action.data);
        yield put({
            type:type.ADD_POST_SUCCESS,
            // data:result.data
        })
    }catch(err){
        yield put({
            type:type.ADD_POST_FAIL,
            data:err.response.data
        })
    }
}


function* watchAddPost(){
    yield throttle(type.ADD_POST_REQUEST,addPost,10000);    
}

export default function* postSaga(){
    all([
        fork(watchAddPost)
    ]);
}