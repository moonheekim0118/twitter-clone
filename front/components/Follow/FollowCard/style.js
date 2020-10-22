import styled from 'styled-components';

export const Wrapper=styled.div`
    width:100%;
    height:100px;
    padding:${({theme})=>theme.paddings.xl};
    display:flex;
    flex-direction:row;
    align-items:center;
    position:relative;
    font-size:${({theme})=>theme.fontSizes.xl};
    font-weight:bold;
    cursor:pointer;
    color:black;

    &:hover{
        background-color:rgba(214, 214, 194,0.3);
    }
`;

export const AvatarWrapper=styled.div`
margin-right:${({theme})=>theme.margins.base};
`;

export const FollowButtonWrapper=styled.div`
position:absolute;
right:5px;
`;