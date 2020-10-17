import React, {useCallback} from 'react';
import { Card,Avatar } from 'antd';
import { useSelector} from 'react-redux';
import styled from 'styled-components';
import LogoutButton from '../LogoutButton';
import {useDispatch} from 'react-redux';
import {TransparentOveraly} from '../Styles/modal';
import {hideProfileModalAction} from '../../actions/ui';

const Overaly = styled.div`
    top:0;
    left:0;
    bottom:0;
    right:0;
    position:fixed;
    z-index:5000;

    @media(max-width:767px){
        display:none;
    }
`;

const CardWrapper = styled(Card)`
    position:fixed;
    bottom:120px;
    left:20px;
    width:250px;
    box-shadow: -1px 1px 7px -2px rgba(0,0,0,0.64);
    z-index:6000;

    @media(max-width:767px){
        display:none;
    }
`;



const UserProfileDetail =()=>{
    const me = useSelector((state)=>state.user.me);
    const dispatch = useDispatch();

    const onClose=useCallback(()=>{
        dispatch(hideProfileModalAction());
    },[]);

    return(
        <>
            <TransparentOveraly onClick={onClose}/>
            <CardWrapper
            actions={[
            <div key="twit">짹짹 <br/>{me.Posts.length}</div>,
            <div key="followings">팔로잉 <br/>{me.Followings.length}</div>,
            <div key="followers">팔로워<br/>{me.Followers.length}</div>,
            ]}
           >
            <Card.Meta 
            avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}/>
           <LogoutButton/>
        </CardWrapper>
     </>
    );
};

export default UserProfileDetail;