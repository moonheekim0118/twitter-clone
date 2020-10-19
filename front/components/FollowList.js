import React , {useCallback} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import FollowButton from './FollowButton';
import { useSelector } from 'react-redux';

const Wrapper=styled.div`
    width:100%;
    height:100px;
    padding:15px;
    display:flex;
    flex-direction:row;
    align-items:center;
    position:relative;
    font-size:1.2rem;
    font-weight:bold;
    cursor:pointer;
    color:black;

    &:hover{
        background-color:rgba(214, 214, 194,0.3);
    }
`;

const AvatarWrapper=styled.div`
    margin-right:10px;
`;

const FollowButtonWrapper=styled.div`
    position:absolute;
    right:5px;
`;

const FollowList=({user})=>{
    const me = useSelector(state=>state.user.me?.id);

    const onClickUser=useCallback(()=>{
        window.open(`/user/${user.id}`,'_self'); // 유저에게로 라우팅 
    },[]);

    return(
        <Wrapper onClick={onClickUser}>
            <AvatarWrapper>
                <Avatar>{user.nickname[0]}</Avatar>
            </AvatarWrapper>
            <span>{user.nickname}</span>
            <FollowButtonWrapper>
                 {me && user.id!==me&& <FollowButton userId={user.id}/>}
            </FollowButtonWrapper>
        </Wrapper>
    )
}


FollowList.propTypes = {
    user:PropTypes.shape({
        id:PropTypes.number,
        nickname:PropTypes.string,
        email:PropTypes.string,
        Followings:PropTypes.number,
        Followers:PropTypes.number,
        Posts:PropTypes.number,
        Likes:PropTypes.number,
    }).isRequired,
}

export default FollowList;