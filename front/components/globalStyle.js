import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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

export default GlobalStyles;