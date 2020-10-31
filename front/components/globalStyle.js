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

export default GlobalStyles;