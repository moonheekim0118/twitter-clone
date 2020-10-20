import styled from 'styled-components';
import {Form, Input} from 'antd';

export const PostFormWrapper = styled(Form)`
marign: 10px 0 20px;
`


export const TextArea = styled(Input.TextArea)`
    border-radius:5px;
`;


export const ButtonWrapper= styled.div`
    margin-top:5px;
    display:flex;
    justify-content:space-between;
`;

export const HashTag=styled.a`

    &:hover{
        text-decoration:underline;
    }
`;