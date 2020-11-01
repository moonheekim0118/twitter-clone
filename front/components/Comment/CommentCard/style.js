import styled from 'styled-components';

export const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;    
    position : relative;
    width:100%;
    
    margin-bottom:${({theme})=>theme.margins.xl};
    padding: 0 ${({theme})=>theme.paddings.lg} ${({theme})=>theme.paddings.lg} ${({theme})=>theme.paddings.lg};
    font-size:${({theme})=>theme.fontSizes.base};
    transition: 0.2s background-color ease-in-out;
    
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
    display:flex;
    flex-direction:column;    
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 90%;
`;

export const NicknameWrapper=styled.span`
    font-weight:bold;
    color:${({theme})=>theme.colors.gray_2};
`;