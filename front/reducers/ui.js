import * as type from '../actions/ui';
import produce from '../util/produce';

export const initialState={
    showAlert:false,
    alertContent:'',
}

const reducer=(state=initialState, action)=>{
    return produce(state,draft=>{
        switch(action.type){
            case type.SHOW_ALERT:
                draft.showAlert=true;
                draft.alertContent=action.data;
                break;
            case type.HIDE_ALERT:
                draft.showAlert=false;
                break; 
        
        }
    })
}

export default reducer;