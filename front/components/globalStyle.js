import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`  
    *,
    *::after,
    *::before{
        box-sizing:border-box;
    }

    *:focus{
        outline:none;
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