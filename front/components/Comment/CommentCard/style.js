import styled from 'styled-components';

export const Wrapper=styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    font-size:${({theme})=>theme.fontSizes.base};
    margin-bottom:${({theme})=>theme.margins.xl};
    padding: ${({theme})=>theme.paddings.small} ${({theme})=>theme.paddings.lg} ${({theme})=>theme.paddings.lg} ${({theme})=>theme.paddings.lg};
    transition: 0.2s background-color ease-in-out;
    
    position : relative;
    &:hover{
        background-color:${({theme})=>theme.colors.hover_gray};
    }
`;
export const ButtonWrapper =styled.div`
    position:absolute;
    top:5px;
    right:5px;
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