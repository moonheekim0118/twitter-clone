import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';


// (이전상태, 액션 ) => 다음상태 리턴 
const rootReducer =combineReducers({
    index : (state = {}, action)=>{ // for hydrate 
        switch(action.type){
            case 'HYDRATE':
                return{...state, ...action.payload}
        
            default:
                return state;
    }},
    user,
    post,
});

export default rootReducer;