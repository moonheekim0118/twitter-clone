import React , {useCallback} from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import FollowButton from '../FollowButton';
import Avatar from '../../Avatar';
import { Wrapper, SideWrapper, FollowButtonWrapper} from './style';

const FollowList=({user})=>{
    const me = useSelector(state=>state.user.me?.id);

    const onClickUser=useCallback(()=>{
        Router.push(`/user/${user.id}`);
    },[]);

    return(
        <Wrapper onClick={onClickUser}>
            <SideWrapper>
            <Avatar 
                user={me}
                isLink={true} 
                isMyPic={false}
                size={65}
            />  
            </SideWrapper>
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