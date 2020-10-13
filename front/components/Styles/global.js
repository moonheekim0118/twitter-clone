import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
    *,
    *::after,
    *::before{
        box-sizing:border-box;
    }
`;

export default GlobalStyles;