import React , { useCallback } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { showProfileModalAction } from '../../actions/ui';
import Avatar from '../Avatar';
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';
import { Detail } from './style';
import { Description } from '../AppLayout/style';
import { SmallAvatarWrapper } from '../globalStyle';

const Card = styled.div`
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
    const dispatch=useDispatch();
    const onClickProfile=useCallback(()=>{
        dispatch(showProfileModalAction());
    },[]);
    return(
        <Card onClick={onClickProfile}>
            <SmallAvatarWrapper>
                <Avatar imageSrc={me.profilepic} userId={me.id} userNickname={me.nickname} isLink={false} isMyPic={true} />
            </SmallAvatarWrapper>
            <Detail>
                <UserInfo>
                    <Description>{me.nickname}</Description>
                    <Email>{me.email}</Email>
                </UserInfo>
                <DownOutlined />
            </Detail>
        </Card>
    );
};

export default UserProfile;