import React ,{ useCallback } from 'react';
import PropTypes from 'prop-types';
import { Wrapper,First,Second } from './ProfileMenu/style';

const FollowMenu =({userId,pageName})=>{
    
    const onClickFirst = useCallback(()=>{
        // 라우팅 
        window.open(`/user/${userId}/followings`,'_self');
    },[]);

    const onClickSecond = useCallback(()=>{
        window.open(`/user/${userId}/followers`,'_self');
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

FollowMenu.propTypes={
    userId:PropTypes.string.isRequired,
    pageName:PropTypes.string.isRequired,
};
export default FollowMenu;
