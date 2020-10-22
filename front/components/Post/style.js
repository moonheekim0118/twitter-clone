import styled from 'styled-components';
import {Form, Input} from 'antd';

export const PostFormWrapper = styled(Form)`
    margin-top:${({theme})=>theme.margins.xxl};
    margin-bottom:${({theme})=>theme.margins.xxxl}
`


export const TextArea = styled(Input.TextArea)`
    border-radius:5px;
`;


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