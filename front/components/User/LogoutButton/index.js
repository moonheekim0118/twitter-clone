import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../../../actions/user';
import { Button, Loading } from '../../globalStyle';


const LogoutButton=()=>{
    const dispatch = useDispatch();
    const {isLoggingOut} = useSelector(state=>state.user);
    
    const onClickLogOut=useCallback(()=>{
        dispatch(logoutRequestAction());
    });
    
    return(
        <>
            {isLoggingOut ? <Loading/> : <Button onClick={onClickLogOut}> 로그아웃 </Button>}
        </>
    );
    
};

export default LogoutButton;