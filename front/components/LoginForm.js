import React, { useCallback} from 'react';
import Link from 'next/link';
import { Form, Input , Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch,useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';



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
    const isLoggingIn = useSelector((state)=>state.user.isLoggingIn);
    const [email, onChangeEmail]=useInput('');
    const [password, onChangePassword]=useInput('');
    
    const onSubmitForm=useCallback(()=>{
        dispatch(loginRequestAction({email, password}));
    },[email,password])

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <InputWrapper>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input 
                name ="user-email" 
                value={email} 
                onChange={onChangeEmail}
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
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                <Link href="/signUp"><a><Button>회원가입</Button></a></Link>
            </InputWrapper>
        </FormWrapper>
    );
};


export default LoginForm;