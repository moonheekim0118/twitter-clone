import React, { useCallback} from 'react';
import Link from 'next/link';
import { Input , Button } from 'antd';
import useInput from '../hooks/useInput';
import { useDispatch,useSelector } from 'react-redux';
import { loginRequestAction } from '../actions/user';
import {SignForm, SignInputWrapper} from './Styles';

const LoginForm =()=>{
    const dispatch = useDispatch();
    const isLoggingIn = useSelector((state)=>state.user.isLoggingIn);
    const [email, onChangeEmail]=useInput('');
    const [password, onChangePassword]=useInput('');
    
    const onSubmitForm=useCallback(()=>{
        dispatch(loginRequestAction({email, password}));
    },[email,password])

    return(
        <SignForm onFinish={onSubmitForm}>
            <SignInputWrapper>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input 
                name ="user-email" 
                value={email} 
                onChange={onChangeEmail}
                />
            </SignInputWrapper>
            <SignInputWrapper>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input.Password 
                 name="user-password"
                 value={password} 
                 onChange={onChangePassword}
                />
            </SignInputWrapper>
            <SignInputWrapper>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                <Link href="/signUp"><a><Button>회원가입</Button></a></Link>
            </SignInputWrapper>
        </SignForm>
    );
};


export default LoginForm;