import styled from 'styled-components';

export const ButtonWrapper= styled.div`
    margin-top:${({theme})=>theme.margins.small};
    display:flex;
    justify-content:space-between;
`;

export const HashTag=styled.a`

    &:hover{
        text-decoration:underline;
    }
`;