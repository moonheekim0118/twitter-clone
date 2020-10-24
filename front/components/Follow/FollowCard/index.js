import React , {useCallback} from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import FollowButton from '../FollowButton';
import Avatar from '../../Avatar';
import { Wrapper, AvatarWrapper, FollowButtonWrapper} from './style';
import { MediumAvatarWrapper } from '../../globalStyle';

const FollowList=({user})=>{
    const me = useSelector(state=>state.user.me?.id);

    const onClickUser=useCallback(()=>{
        Router.push(`/user/${user.id}`);
    },[]);

    return(
        <Wrapper onClick={onClickUser}>
            <AvatarWrapper>
                <MediumAvatarWrapper>
                     <Avatar imageSrc={user.profilepic} userId={user.id} userNickname={user.nickname} isLink={true} isMyPic={false}/>
                </MediumAvatarWrapper>
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