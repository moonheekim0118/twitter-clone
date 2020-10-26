import React, { useCallback, useEffect,useState, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginRequestAction } from '../../../actions/user';
import Link from 'next/link';
import useInput from '../../../hooks/useInput';;
import {  Form, Label, InputWrapper,TextInput,PasswordInput,SubmitButton,ButtonWrapper,Text  } from '../style';
import { ErrorMessage } from '../../globalStyle';
import { LoadingIcon } from '../../Icons';

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
    

    const onSubmit=useCallback((e)=>{
        e.preventDefault();
        dispatch(loginRequestAction({email, password}));
    },[email,password])

    
    return(
        <Form onSubmit={onSubmit}>
              {hasLoginError &&<ErrorMessage>{loginError}</ErrorMessage> }
            <InputWrapper>
                <TextInput 
                name ="user-email" 
                value={email} 
                onChange={onChangeEmail}
                placeholder=" "
                />
                 <Label htmlFor="user-email">이메일</Label>
            </InputWrapper>
            <InputWrapper>
                <PasswordInput
                 name="user-password"
                 value={password} 
                 onChange={onChangePassword}
                 placeholder=" "
                />
                 <Label htmlFor="user-password">비밀번호</Label>
            </InputWrapper>
            <ButtonWrapper>
                {isLoggingIn ? <LoadingIcon/> : <SubmitButton>로그인</SubmitButton> }
                <Link href="/signUp"><Text>회원가입</Text></Link>
            </ButtonWrapper>
        </Form>
    );
};


export default LoginForm;