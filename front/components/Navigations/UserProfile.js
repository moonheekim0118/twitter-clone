import React , { useCallback } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { showProfileModalAction } from '../../actions/ui';
import Avatar from '../Avatar';
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';
import { Detail } from './style';
import { Description } from '../AppLayout/style';
import { AvatarWrapper } from '../globalStyle';

const Card = styled.div`
    cursor:pointer;
    position:absolute;
    bottom:0;
    right:0;
    width:80%;
    margin-right:${({theme})=>theme.margins.base};
    margin-bottom:${({theme})=>theme.margins.base};
    padding:${({theme})=>theme.paddings.small};
    border-radius:20px;
    display:flex;

    transition: 0.2s background-color ease-in-out;
    
    @media ${({theme})=>theme.device.pcS}{
        width:60px;
        border-radius:50%;
        margin-right:${({theme})=>theme.margins.base};
    }

    @media ${({theme})=>theme.device.tablet}{
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
    color:${({theme})=>theme.colors.gray_2};
    width:120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const UserProfile =()=>{
    const me = useSelector((state)=>state.user.me);
    const dispatch=useDispatch();
    const onClickProfile=useCallback(()=>{
        dispatch(showProfileModalAction());
    },[]);
    return(
        <Card onClick={onClickProfile}>
            <AvatarWrapper size={45}>
                <Avatar imageSrc={me.profilepic} userId={me.id} userNickname={me.nickname} isLink={false} isMyPic={false} />
            </AvatarWrapper>
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