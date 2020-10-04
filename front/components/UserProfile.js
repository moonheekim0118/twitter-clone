import React, { useCallback } from 'react';
import { Card,Avatar,Button } from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import {logoutRequestAction} from '../reducers/user';

const UserProfile =()=>{
    const dispatch=useDispatch();
    const isLoggingOut=useSelector((state)=>state.user.isLoggingOut);
    const me = useSelector((state)=>state.user.me);
    const onLogout=useCallback(()=>{
        dispatch(logoutRequestAction());
    },[])
    
    return(
        <Card
            actions={[
                <div key="twit">짹짹 <br/> 0</div>,
                <div key="followings">팔로잉 <br/> 0</div>,
                <div key="followers">팔로워<br/> 0</div>,
            ]}
        >
            <Card.Meta 
            avatar={<Avatar>{me.nickname}</Avatar>}
            title={me.nickname}/>
            <Button onClick={onLogout} loading={isLoggingOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;