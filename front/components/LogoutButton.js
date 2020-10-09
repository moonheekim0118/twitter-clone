import React, {useCallback} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {Button} from 'antd';
import {logoutRequestAction} from '../reducers/user';
import styled from 'styled-components';

const ButtonWrapper = styled(Button)`
    border-radius:20px;
`;

const LogoutButton=()=>{
    const dispatch = useDispatch();
    const {isLoggingOut} = useSelector(state=>state.user);
    
    const onClickLogOut=useCallback(()=>{
        dispatch(logoutRequestAction());
    });
    
    return(
        <ButtonWrapper loading={isLoggingOut} onClick={onClickLogOut}>로그아웃</ButtonWrapper>
    );
    
};

export default LogoutButton;