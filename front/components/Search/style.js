import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons'; 


export const Container = styled.form`
    height:50px;
    width:100%;
    padding:15px 5px;
    top: 0;
    left:0;
    background-color:#fff;
    

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
    padding:6px;
    margin-top:8px;
    font-size:1rem;
    width:100%;
    height:35px;
    z-index:20;
    border:none;
    background-color:#f4f4f4;
    border-radius:5px;

    &:focus{
        background-color:#fff;
        border:1px solid #33ccff;
    }

    &:focus ~ ${HistoryWrapper}{
        display:flex;
    }

`;

export const SearchButton = styled.button.attrs({ type: 'submit' })`
    height:35px;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 5px;
    background:#33ccff;
    color:#fff;
    font-size:1rem;
    cursor:pointer;
    border:none;
    position:absolute;
    top:15px;
    right:0px;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
`;




export const HistoryTab=styled.div.attrs({ tabindex: "0" })`
    width:100%;
    padding:5px;
    border-bottom:1px solid #e0e0d1;
    border-left:1px solid #e0e0d1;
    border-right:1px solid #e0e0d1;
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    
    &:last-child {
        border-bottom-right-radius:5px;
        border-bottom-left-radius:5px;
    }

    &:hover{
        background-color:rgba(153, 204, 255,0.2);
    }
`;

export const RemoveButton=styled(CloseOutlined)`
    &:hover{
        color:red;
    }
`;