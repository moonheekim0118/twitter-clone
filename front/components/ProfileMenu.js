import React ,{ useState, useCallback } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
`;

const Tweet = styled.div`
    border-bottom:${props=>props.clicked ? "1px solid #0099cc;" : "none"};
`;

const Likes = styled.div`
    border-bottom:${props=>props.clicked ? "1px solid #0099cc;" : "none"};
`;

const ProfileMenu =()=>{
    const [tweetClciked, setTweetClicked] = useState(true);
    const [LikesClicked, setLikesClicked]= useState(false);
    
    const onClickTweet = useCallback(()=>{
        setTweetClicked(true);
        // 라우팅 
    },[]);

    const onClickLikePosts = useCallback(()=>{
        setTweetClicked(false);
        setLikesClicked(true);
        // routing 
    },[]);

    return(
        <Wrapper>
            <Tweet onClick={onClickTweet} clicked={tweetClciked}>  
                
            </Tweet>
            <Likes onClick={onClickLikePosts} clciked={LikesClicked}>

            </Likes>
        </Wrapper>
    );
};

export default ProfileMenu;
