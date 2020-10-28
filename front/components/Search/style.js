import styled from 'styled-components';


export const Container = styled.form`
    height:50px;
    width:100%;
    padding:${({theme})=>`${theme.paddings.xl} ${theme.paddings.base}`};
    top: 0;
    left:0;
    background-color: ${({theme})=>theme.colors.white};
    

`;

export const HistoryWrapper = styled.div.attrs({ tabindex: "0" })`
    width:100%;
    display:none;
    flex-direction:column;
    -webkit-box-shadow: 1px 6px 18px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 6px 18px -9px rgba(0,0,0,0.75);
    box-shadow: 1px 6px 18px -9px rgba(0,0,0,0.75);
    z-index:20;

    &:hover{
        display:flex;
    }

    &:focus-within{
        display:flex;
    }

`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
    padding:${({theme})=>theme.paddings.small};
    margin-top:${({theme})=>theme.margins.small};
    font-size:${({theme})=>theme.fontSizes.base};
    width:100%;
    height:35px;
    z-index:20;
    border:none;
    background-color:${({theme})=>theme.colors.gray_3};
    border-radius:5px;

    &:focus{
        background-color:${({theme})=>theme.colors.white};
        border:1px solid ${({theme})=>theme.colors.blue_1};
    }

    &:focus ~ ${HistoryWrapper}{
        display:flex;
    }

`;

export const SearchButton = styled.button.attrs({ type: 'submit' })`
    height:34px;
    padding:${({theme})=>`${theme.paddings.xsmall} ${theme.paddings.small}`};
    margin-top:${({theme})=>theme.margins.small};
    margin-right:${({theme})=>theme.margins.xsmall};
    background:${({theme})=>theme.colors.blue_1};
    color:${({theme})=>theme.colors.white};
    font-size:${({theme})=>theme.fontSizes.lg};
    cursor:pointer;
    border:none;
    position:absolute;
    top:15px;
    right:0px;
    z-index:100;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
`;




export const HistoryTab=styled.div.attrs({ tabindex: "0" })`
    width:100%;
    padding: ${({theme})=>theme.paddings.lg};
    border-bottom:1px solid ${({theme})=>theme.colors.gray_4};
    border-left:1px solid ${({theme})=>theme.colors.gray_4};
    border-right:1px solid ${({theme})=>theme.colors.gray_4};
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    
    &:last-child {
        border-bottom-right-radius:5px;
        border-bottom-left-radius:5px;
    }

    &:hover{
        background-color:${({theme})=>theme.colors.hover};
    }
`;
