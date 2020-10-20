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
    padding:20px 20px;
    margin-bottom:30px;
    border:1px solid #f4f4f4;
    background-color:#fff;
    cursor:pointer;
    &:hover{
        background-color:rgba(214, 214, 194,0.3);
    }
`;

export const RetweetCard=styled.div`
    position:relative;
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: stretch;
    padding:20px 20px;
    padding-top:40px;
    margin-bottom:30px;
    border:1px solid #f4f4f4;
    background-color:#fff;
    cursor:pointer;
    &:hover{
        background-color:rgba(214, 214, 194,0.3);
    }
`;

export const CardMeta = styled.div`
    position:relative;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 90%;
    display:flex;
    flex-direction:column;
    padding:0 20px;
    margin-left:20px;
`;

export const CardButtons= styled.div`
    margin-top:20px;
    font-size:1.2rem;
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
    font-size:1.2rem;
    font-weight:bold;

    &:hover{
        text-decoration:underline;
    }
`;

export const LikedCount=styled.span`   
    margin-left:5px;
    font-size:1rem;
    color:#eb2f96;
`;

export const LikersCount=styled.span`
    margin-left:5px;
    font-size:1rem;
    color:#b8b894;
`;

export const LikeButtonWrapper=styled.div`
    &:hover{
        color:#eb2f96;
    }
`;

export const Retweet=styled.div`
    position:absolute;
    top:5px;
    left:5px;
    color:#0099cc;
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
        color:#0099cc;
    }
`;