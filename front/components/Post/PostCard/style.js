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
        background-color:${({theme})=>theme.colors.hover_gray};
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
    flex-shrink: 1;
    flex-basis: 90%;
    display:flex;
    flex-direction:column;
    width:100%;

    padding:0 ${({theme})=>theme.paddings.xl};
    margin-left:${({theme})=>theme.margins.lg};
`;

export const CardButtons= styled.div`
    margin-top:${({theme})=>theme.margins.xxxl};
    font-size:${({theme})=>theme.fontSizes.lg};
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

export const FollowButtonWrapper=styled.div`
    position: absolute;
    right:15px;
    top:5px;
`;

export const NicknameWrapper=styled.span`
    font-size:${({theme})=>theme.fontSizes.lg};
    font-weight:bold;

    &:hover{
        text-decoration:underline;
    }
`;

export const PostInfoWrapper =styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
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
    font-size:${({theme})=>theme.fontSizes.lg};
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
    margin-left:${({theme})=>theme.margins.xsmall};
    color:${({theme})=>theme.colors.gray_2};
    font-size:${({theme})=>theme.fontSizes.small};
`;