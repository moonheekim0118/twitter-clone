import React , {useCallback} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { followRequestAction , unfollowRequestAction} from '../actions/user';

const FollowButton=({post})=>{

    const dispatch = useDispatch();
    const {me , followLoading, unfollowLoading} = useSelector(state=>state.user);
    const isFollowing = me&&me.Followings.find((v)=>v.id===post.User.id);
    
    const onClickFollow=useCallback(()=>{
        if(isFollowing){ // 언팔로우 
            dispatch(unfollowRequestAction({id:post.User.id, nickname:post.User.nickname}));
        }
        else{ // 팔로우 
            dispatch(followRequestAction({id:post.User.id, nickname:post.User.nickname}));
        }
    },[isFollowing]);

    return (
        <Button loading={ followLoading || unfollowLoading } onClick={onClickFollow}>
            {isFollowing ? "언팔로우" : "팔로우"}
        </Button>);
};

FollowButton.propTypes = {
    post:PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.shape({
            id:PropTypes.number,
            nickname:PropTypes.string
        }),
        content:PropTypes.string,
        createdAt:PropTypes.object,
        Comments:PropTypes.arrayOf(PropTypes.object),
        Images:PropTypes.arrayOf(PropTypes.object)

    }).isRequired,
}


export default FollowButton;
