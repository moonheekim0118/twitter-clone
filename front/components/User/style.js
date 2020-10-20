import styled from 'styled-components';
import { Form } from 'antd';

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
    @media screen and (max-width:767px){
        width:100%;
    }
`
