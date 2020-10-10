import styled from 'styled-components';
import {Form} from 'antd';
export const MenuItemWrapper = styled.div`
    display:flex;
    cursor:pointer;
    margin-bottom:10px;
    padding:10px;
    border-radius:20px;

    @media(max-width:1279px){
        border-radius:50%;
        margin-right:0;
    }


    &:hover{
        background:rgba(128, 223, 255,0.2);
    }
`;

export const Detail=styled.div`
    width:40%;
    margin-left:10px;
    display:flex;
    justify-content:space-between;

    @media(max-width:1279px){
        display:none;
    }
`; 


export const Description=styled.a`
    font-size:1.3rem;
    font-weight:bold;
    color:black;
`;

export const SignForm=styled(Form)`
    width:100%;
    margin-top:50px;
    background-color:rgba(77, 166, 255,0.3);
    padding:40px;
    border-radius:10px;
    -webkit-box-shadow: 2px 2px 18px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 18px -7px rgba(0,0,0,0.75);
    box-shadow: 2px 2px 18px -7px rgba(0,0,0,0.75);
`;



export const SignInputWrapper=styled.div`
    width:50%;
    margin:10px auto;
    @media(max-width:767px){
        width:100%;
    }
`

export const ErrorMessage=styled.div
`
    color:red;
`