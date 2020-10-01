import React, { useCallback} from 'react';
import Link from 'next/link';
import { Form, Input , Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';



const FormWrapper = styled(Form)`
    width:100%;
    margin-top:50px;
    background-color:rgba(77, 166, 255,0.3);
    padding:40px;
    border-radius:10px;
    -webkit-box-shadow: 2px 2px 18px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 18px -7px rgba(0,0,0,0.75);
    box-shadow: 2px 2px 18px -7px rgba(0,0,0,0.75);
    
`

const InputWrapper=styled.div`
    width:50%;
    margin:10px auto;
    @media(max-width:767px){
        width:100%;
    }
`


const LoginForm =()=>{
    const dispatch = useDispatch();
    const [id, onChangeId]=useInput('');
    const [password, onChangePassword]=useInput('');
    
    const onSubmitForm=useCallback(()=>{
        console.log(id,password);
        dispatch(loginAction({id, password}));
    },[id,password])

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <InputWrapper>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input 
                name ="user-id" 
                value={id} 
                onChange={onChangeId}
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input.Password 
                 name="user-password"
                 value={password} 
                 onChange={onChangePassword}
                />
            </InputWrapper>
            <InputWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signUp"><a><Button>회원가입</Button></a></Link>
            </InputWrapper>
        </FormWrapper>
    );
};


export default LoginForm;