import React from 'react';
import { Card,Avatar } from 'antd';
import { useSelector} from 'react-redux';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';

const CardWrapper = styled(Card)`

`;



const UserProfileDetail =()=>{
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

export default UserProfileDetail;