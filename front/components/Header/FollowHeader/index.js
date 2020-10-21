import React ,{ useCallback } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Wrapper,First,Second } from '../style';

const FollowHeader =({userId,pageName})=>{
    
    const onClickFirst = useCallback(()=>{
        // 라우팅 
        Router.push(`/user/${userId}/followings`);
    },[]);

    const onClickSecond = useCallback(()=>{
        Router.push(`/user/${userId}/followers`);
    },[]);

    return(
        <Wrapper>
            <First onClick={onClickFirst} clicked={pageName==="Followings"}>  
                Followings
            </First>
            <Second onClick={onClickSecond} clicked={pageName==="Followers"}>
                Followers
            </Second>
        </Wrapper>
    );
};

FollowHeader.propTypes={
    userId:PropTypes.string.isRequired,
    pageName:PropTypes.string.isRequired,
};
export default FollowHeader;
