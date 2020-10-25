import styled from 'styled-components';

export const Wrapper=styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    font-size:${({theme})=>theme.fontSizes.base};
    margin-bottom:${({theme})=>theme.margins.xl};
    padding: 0 ${({theme})=>theme.paddings.lg} ${({theme})=>theme.paddings.lg} ${({theme})=>theme.paddings.lg};
    transition: 0.2s background-color ease-in-out;

    &:hover{
        background-color:${({theme})=>theme.colors.hover_gray};
    }
`;

// for avatar 
export const FirstWrapper=styled.div` 
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 5%;
`;
 
// for nickanme and contents 
export const SecondWrapper=styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 90%;
    display:flex;
    flex-direction:column;
`;

export const NicknameWrapper=styled.span`
    font-weight:bold;
    color:${({theme})=>theme.colors.gray_2};
`;