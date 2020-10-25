import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
const GlobalStyles = createGlobalStyle`  
    *,
    *::after,
    *::before{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family : 'Source Sans Pro' , sans-serif;
        margin:0;
        padding:0;
    }

    *:focus{
        outline:none;
    }

    body{
        overflow-x:hidden;
        overflow-y:scroll;
        background-color:#FFFFFF;
        color:#000000;
    }

`;


export const ErrorMessage=styled.div
`
    color:red;
`

export const AlertMessage=styled.div
`
    color:green;
`;

export const MiddleWrapper=styled.div`
    text-align:center;
`;

export const Button= styled.button`

    border:1px solid ${({theme})=>theme.colors.blue_1} ;
    background-color:${({theme})=>theme.colors.white};
    color:${({theme})=>theme.colors.blue_1};
    font-size:${({theme})=>theme.fontSizes.base};
    font-weight:bold;
    padding:${({theme})=>theme.paddings.small} ${({theme})=>theme.paddings.xxl};
    cursor:pointer;
    border-radius:25px;
    transition: 0.2s background-color ease-in-out;

    &:hover{
        background-color:${({theme})=>theme.colors.hover} ;
    }
`;

export const RectButton = styled.button`
    border:none;
    background-color:${({theme})=>theme.colors.blue_1} ;
    color:${({theme})=>theme.colors.white};
    font-size:${({theme})=>theme.fontSizes.small};
    padding:${({theme})=>theme.paddings.small} ${({theme})=>theme.paddings.xxl};
    cursor:pointer;
    border-radius:5px;
    transition: 0.2s background-color ease-in-out;

    &:hover{
        background-color:${({theme})=>theme.colors.blue_2} ;
    }

    &:disabled{
        background-color:${({theme})=>theme.colors.disabled};
        cursor:default;
    }
`;


export const Loading = styled(LoadingOutlined)`
    font-size:${({theme})=>theme.fontSizes.xl};
`;



export const AvatarWrapper = styled.div`
    width:${(props)=>`${props.size}px`};
    height:${(props)=>`${props.size}px`};
    cursor:pointer;
`;


export const LargeAvatarWrapper = styled.div`
    width:90px;
    height:90px;
    cursor:pointer;
`;

export const MediumAvatarWrapper=styled.div`
    width:65px;
    height:65px;
    cursor:pointer;
`;

export const SmallAvatarWrapper=styled.div`
    width:45px;
    height:45px;
    cursor:pointer;
`;

export const XsmallAvatarWrapper=styled.div`
    width:30px;
    height:30px;
    cursor:pointer;
`;


export default GlobalStyles;