import styled from 'styled-components';
import { RetweetOutlined , MessageOutlined} from '@ant-design/icons';

export const AvatarWrapper=styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 5%;
`;

export const Card = styled.div`
    position:relative;
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: stretch;
    padding:${({theme})=>theme.paddings.xxxl};
    margin-bottom:30px;
    border:1px solid ${({theme})=>theme.colors.gray_3};
    cursor:pointer;
    &:hover{
        background-color:${({theme})=>theme.colors.hover};
    }
`;

export const RetweetCard=styled.div`
    position:relative;
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: stretch;
    padding:${({theme})=>theme.paddings.xxxl};
    padding-top:40px;
    margin-bottom:30px;
    border:1px solid ${({theme})=>theme.colors.gray_3};
    cursor:pointer;
    &:hover{
        background-color:${({theme})=>theme.colors.hover};
    }
`;

export const CardMeta = styled.div`
    position:relative;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 90%;
    display:flex;
    flex-direction:column;
    padding:0 ${({theme})=>theme.paddings.xxxl};
    margin-left:${({theme})=>theme.margins.xxxl};
`;

export const CardButtons= styled.div`
    margin-top:${({theme})=>theme.margins.xxxl};
    font-size:${({theme})=>theme.fontSizes.lg};
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

export const FollowButtonWrapper=styled.div`
    position: absolute;
    right:15px;
    top:5px;
`;

export const NicknameWrapper=styled.div`
    font-size:${({theme})=>theme.fontSizes.lg};
    font-weight:bold;

    &:hover{
        text-decoration:underline;
    }
`;

export const LikedCount=styled.span`   
    margin-left:${({theme})=>theme.margins.xsmall};
    font-size:${({theme})=>theme.fontSizes.base};
    color:${({theme})=>theme.colors.pink};
`;

export const LikersCount=styled.span`
    margin-left:${({theme})=>theme.margins.xsmall};
    font-size:${({theme})=>theme.fontSizes.base};
    color:${({theme})=>theme.colors.gray_2};
`;

export const LikeButtonWrapper=styled.div`
    &:hover{
        color:${({theme})=>theme.colors.pink};
    }
`;

export const Retweet=styled.div`
    position:absolute;
    top:5px;
    left:5px;
    color:${({theme})=>theme.colors.blue_2};
    font-weight:bold;

    &:hover{
        text-decoration:underline;
    }
`;

export const ContentWrapper=styled.div`
    display:flex;
    align-items:center;
`;

export const RetweetIcon=styled(RetweetOutlined)`
    &:hover{
        color:lime;
    }
`;

export const RetweetedIcon=styled(RetweetOutlined)`
    color:lime;
`;

export const CommentIcon = styled(MessageOutlined)`
    &:hover{
        color:${({theme})=>theme.colors.blue_2};
    }
`;

export const Date = styled.span`
    position:absolute;
    top:5px;
    right:10px;
    color:${({theme})=>theme.colors.gray_2};
`;