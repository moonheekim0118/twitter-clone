import React , {useState, useCallback, useEffect,useRef} from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { Checkbox } from 'antd';
import useInput from '../../../hooks/useInput';
import useValidation from '../../../hooks/useValidation';
import {useDispatch , useSelector} from 'react-redux';
import {signUpRequestAction,signUpResetAction} from '../../../actions/user';
import { showAlertAction } from '../../../actions/ui';
import { Form, Label, InputWrapper,TextInput,PasswordInput,SubmitButton,ButtonWrapper,Text,TextLength } from '../style';
import { ErrorMessage } from '../../globalStyle';
import { LoadingIcon } from '../../Icons';

const SignUp=()=>{

    const [email, onChangeEmail]=useInput('');
    const [password, onChangePassword,passwordLengthError ]=useValidation('',6,15);
    const [nickname, onChangeNickname, nicknameLengthError]=useValidation('',1,5);
    const [passwordCheck, setPasswordCheck]= useState('');
    const [passwordError, setPasswordError]= useState(false);
    const [term, setTerm]=useState('');
    const [termError , setTermError]=useState(false);
    const dispatch=useDispatch();
    const {signUploading, signUpDone, signUpError} = useSelector(state=>state.user);
    const firstUpdate= useRef(true);

    useEffect(()=>{
        if(signUpDone){
            dispatch(signUpResetAction()); // signup하고 다시 signUp페이지로 갈 수 있도록
            Router.push('/');
        }
    },[signUpDone]);

    useEffect(()=>{
        if(firstUpdate.current){
            firstUpdate.current=false;
            return;
        }
        if(signUpError){
            dispatch(showAlertAction(signUpError));
        }
    },[signUpError]);

    const onSubmit=useCallback((e) => {
        e.preventDefault();
        if(password!==passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        dispatch(signUpRequestAction({email,password,passwordCheck,nickname}));
    },[email,password,passwordCheck, nickname, term])

    const onChangeTerm=useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[])

    const onChangePasswordCheck=useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password])

    return(
        <Form onSubmit={onSubmit}>
    
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
                <TextInput 
                name ="user-nickname" 
                value={nickname} 
                onChange={onChangeNickname}
                placeholder=" "
                />
                <Label htmlFor="user-nickname">닉네임</Label>
                <TextLength limit={nickname.length>5}>{nickname.length}/5</TextLength>
                {nicknameLengthError && <ErrorMessage>닉네임은 1자리 이상 5자리 이하여야 합니다.</ErrorMessage>}
            </InputWrapper>
            <InputWrapper>
                <PasswordInput 
                name ="user-password" 
                value={password} 
                required 
                onChange={onChangePassword}
                placeholder=" "
                />
                <Label htmlFor="user-password">비밀번호</Label>
                 {passwordLengthError && <ErrorMessage>비밀번호는 6자리 이상,14자리 이하여야 합니다.</ErrorMessage>}
            </InputWrapper>

            <InputWrapper>
                <PasswordInput 
                name ="user-password-check" 
                value={passwordCheck} 
                onChange={onChangePasswordCheck}
                placeholder=" "
                />
                <Label htmlFor="user-password-check">비밀번호 확인</Label>
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </InputWrapper>
            <InputWrapper>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>가입하시겠습니까..정말입니까..</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </InputWrapper>
    
            <ButtonWrapper>
                {signUploading ? <LoadingIcon/> : <SubmitButton>회원가입</SubmitButton>}
                <Link href="/login"><Text>로그인</Text></Link>
            </ButtonWrapper>
        </Form>
    );
}



export default SignUp;