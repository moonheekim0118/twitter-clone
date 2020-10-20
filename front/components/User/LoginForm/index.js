import React, { useCallback, useEffect,useState, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginRequestAction } from '../../../actions/user';
import Link from 'next/link';
import useInput from '../../../hooks/useInput';
import { Input , Button } from 'antd';
import { SignForm, SignInputWrapper } from '../style';
import { ErrorMessage } from '../../globalStyle';

const LoginForm =()=>{
    const dispatch = useDispatch();
    const {isLoggingIn, loginError} = useSelector((state)=>state.user);
    const [hasLoginError, setHasLoginError]=useState(false);
    const [email, onChangeEmail]=useInput('');
    const [password, onChangePassword]=useInput('');
    const firstUpdate = useRef(true); // 첫번째 렌더링에는 에러 검사가 실행되지 않도록  

    useEffect(()=>{
        if(firstUpdate.current){
            firstUpdate.current=false;
            return;
        }
        if(loginError){
            setHasLoginError(true);
        }
        else{
            setHasLoginError(false);
        }
    },[loginError]);
    

    const onSubmitForm=useCallback(()=>{
        dispatch(loginRequestAction({email, password}));
    },[email,password])

    
    return(
        <SignForm onFinish={onSubmitForm}>
            <SignInputWrapper>
                {hasLoginError &&<ErrorMessage>{loginError}</ErrorMessage> }
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