import { createGlobalStyle } from 'styled-components';

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

export default GlobalStyles;