import React , {useCallback , useState} from 'react';
import { Avatar } from 'antd';
import { useSelector} from 'react-redux';
import styled from 'styled-components';
import {DownOutlined,UserOutlined } from '@ant-design/icons';
import {Detail, Description} from './style';
import UserProfileDetail from './UserProfileDetail';

const CardWrapper = styled.div`
    cursor:pointer;
    position:absolute;
    bottom:0;
    right:0;
    width:80%;
    margin-right:10px;
    margin-bottom:10px;
    padding:10px;
    border-radius:20px;
    display:flex;

    @media(max-width:1279px){
        width:60px;
        border-radius:50%;
        margin-right:10px;
    }

    @media(max-width:767px){
        display:none;
    }

    &:hover{
        background:rgba(128, 223, 255,0.2);
    }
`;

const UserInfo=styled.div`
    display:flex;
    flex-direction:column;

`;

const Email= styled.span`
    color:#75a3a3;
`;

const UserProfile =()=>{
    const me = useSelector((state)=>state.user.me);
    const [showDetail, setShowDetail]=useState(false);

    const onClickProfile=useCallback(()=>{
        setShowDetail((prev)=>!prev);
    })
    
    return(
        <>
        {showDetail&&<UserProfileDetail onClose={onClickProfile}/>}
        <CardWrapper onClick={onClickProfile}>
            <Avatar size="large" icon={<UserOutlined/>}/>
            <Detail>
                <UserInfo>
                    <Description>{me.nickname}</Description>
                    <Email>{me.email}</Email>
                </UserInfo>
                <DownOutlined />
            </Detail>
        </CardWrapper>
        </>
    );
};

export default UserProfile;