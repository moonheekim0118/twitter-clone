import React , {useCallback} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FollowButton from '../FollowButton';
import { Avatar } from 'antd';
import { Wrapper, AvatarWrapper, FollowButtonWrapper} from './style';

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