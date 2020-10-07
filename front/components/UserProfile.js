import React from 'react';
import { Card,Avatar } from 'antd';
import { useSelector} from 'react-redux';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';

const CardWrapper = styled(Card)`
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    background:#80dfff;
    margin:0;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
    @media(max-width:767px){
        display:none;
    }
`;



const UserProfile =()=>{
    const me = useSelector((state)=>state.user.me);
  
    return(
        <CardWrapper
            actions={[
            <div key="twit">짹짹 <br/>{me.Posts.length}</div>,
            <div key="followings">팔로잉 <br/>{me.Followings.length}</div>,
            <div key="followers">팔로워<br/>{me.Followers.length}</div>,
            ]}
        >
            <Card.Meta 
            avatar={<Avatar>{me.nickname}</Avatar>}
            title={me.nickname}/>
           <LogoutButton/>
        </CardWrapper>
    );
};

export default UserProfile;