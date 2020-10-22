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
    padding:${({theme})=>theme.paddings.xxl};
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
    margin-left:${({theme})=>theme.margins.xxl};
    margin-top: ${({theme})=>theme.margins.xxl};
    cursor:pointer;
    font-size:${({theme})=>theme.fontSizes.base};
`;

export const NicknameWrapper= styled.div`
    margin-top:${({theme})=>theme.margins.base};
    font-size:${({theme})=>theme.margins.lg};
    font-weight:bold;
`;

export const FollowWrapper =styled.div`
    margin-right:${({theme})=>theme.margins.xxxl};
`;

export const Description=styled.span`
    color:${({theme})=>theme.colors.gray_2};
    font-weight:bold;
`;