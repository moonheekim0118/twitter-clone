import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:250px;
    position:relative;
    display:flex;
    flex-direction:column;
`;

// 유저정보  / 팔로우버튼 
export const UpperWrapper= styled.div`
    width:100%;
    padding:20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
// 아바타 / 이메일 / 닉네임 
export const UserInfoWrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

// 팔로잉 몇명 / 팔로우 몇명 
export const DownWrapper = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:20px;
    margin-top: 20px;
    cursor:pointer;
    font-size:1rem;
`;

export const NicknameWrapper= styled.div`
    margin-top:10px;
    font-size:1.3rem;
    font-weight:bold;
`;

export const FollowWrapper =styled.div`
    margin-right:20px;
`;

export const Description=styled.span`
    color:#75a3a3;
    font-weight:bold;
`;