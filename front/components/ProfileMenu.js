import React ,{ useState, useCallback } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    cursor:pointer;
    font-size:1.2rem;
    font-weight:bold;
`;

const Tweet = styled.div`
    border-bottom:${props=>props.clicked ? "1px solid #0099cc;" : "none"};
    color:${props=>props.clicked ? "#0099cc" : "black"};
    padding:15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    width:50%;
    text-align:center;
    &:hover{
        color:#0099cc;
        background-color:rgba(51, 153, 255,0.2)
    }
`;

const Likes = styled.div`
    border-bottom:${props=>props.clicked ? "1px solid #0099cc;" : "none"};
    color:${props=>props.clicked ? "#0099cc" : "black"};
    width:50%;
    padding:15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    text-align:center;
    &:hover{
        color:#0099cc;
        background-color:rgba(51, 153, 255,0.2)
    }
`;

const ProfileMenu =()=>{
    const [tweetClciked, setTweetClicked] = useState(true);
    const [LikesClicked, setLikesClicked]= useState(false);
    
    const onClickTweet = useCallback(()=>{
        setTweetClicked(true);
        setLikesClicked(false);
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
                Tweets
            </Tweet>
            <Likes onClick={onClickLikePosts} clicked={LikesClicked}>
                Liked Tweets
            </Likes>
        </Wrapper>
    );
};

export default ProfileMenu;
