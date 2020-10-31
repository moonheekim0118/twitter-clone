import { useState, useCallback} from 'react';

const useToggle= (initialValue = false)=>{
    const [show, setter]=useState(initialValue);
    const open=useCallback(()=>{
        setter(true);
    },[]);

    const close=useCallback(()=>{
        setter(false);
    },[]);
    return [show,open,close];
}

export default useToggle;