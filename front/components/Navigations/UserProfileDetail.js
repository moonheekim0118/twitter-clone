import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card } from 'antd';
import  Avatar from '../Avatar';
import LogoutButton from '../User/LogoutButton';

const UserProfileDetail =()=>{
    const me = useSelector((state)=>state.user.me);

    return(
        <>
        <CardWrapper
            actions={[
            <Link href="/user[id]" as={`/user/${me.id}`}><a>
                <div key="twit">트윗 <br/>{me.Posts.length}</div></a></Link>,
            <Link href="/user[id]/followings" as={`/user/${me.id}/followings`}><a>
                <div key="followings">팔로잉 <br/>{me.Followings.length}</div></a></Link>,
            <Link href="/user[id]/followers" as={`/user/${me.id}/followers`}><a>
                <div key="followings">팔로워 <br/>{me.Followers.length}</div></a></Link>,
            ]}
           >
            <Card.Meta
            avatar={
                <Avatar user={me} size={45} isLink={true} isMyPic={false}/>
            }
            title={me.nickname}/>
           <LogoutButton/>
        </CardWrapper>
     </>
    );
};

const CardWrapper = styled(Card)`
    position:fixed;
    bottom:120px;
    left:20px;
    width:250px;
    box-shadow: -1px 1px 7px -2px rgba(0,0,0,0.64);
    z-index:6000;

    @media ${({theme})=>theme.device.tablet}{
        display:none;
    }
`;

export default UserProfileDetail;