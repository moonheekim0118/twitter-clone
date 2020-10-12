import React , {useState, useCallback, useEffect,useRef} from 'react';
import Router from 'next/router';
import {Input , Checkbox, Button} from 'antd';
import useInput from '../hooks/useInput';
import useValidation from '../hooks/useValidation';
import {useDispatch , useSelector} from 'react-redux';
import {signUpRequestAction} from '../actions/user';
import {SignForm, SignInputWrapper,ErrorMessage} from './Styles';


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
            Router.push('/');
        }
    },[signUpDone]);

    useEffect(()=>{
        if(firstUpdate.current){
            firstUpdate.current=false;
            return;
        }
        if(signUpError){
            alert(signUpError);
        }
    },[signUpError]);

    const onSubmit=useCallback(() => {
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
        <SignForm onFinish={onSubmit}>
            <SignInputWrapper>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name ="user-email" value={email} required onChange={onChangeEmail}/>
            </SignInputWrapper>
            <SignInputWrapper>
                <label htmlFor="user-nickname">닉네임</label>
                <br />
                <Input name ="user-nickname" value={nickname} required onChange={onChangeNickname}/>
                {nicknameLengthError && <ErrorMessage>닉네임은 1자리 이상 5자리 이하여야 합니다.</ErrorMessage>}
            </SignInputWrapper>
            <SignInputWrapper>
                <label htmlFor="user-password">패스워드</label>
                <br />
                <Input.Password name ="user-password" value={password} required onChange={onChangePassword}/>
                {passwordLengthError && <ErrorMessage>비밀번호는 6자리 이상,14자리 이하여야 합니다.</ErrorMessage>}
            </SignInputWrapper>
            <SignInputWrapper>
                <label htmlFor="user-password-check">패스워드 체크</label>
                <br />
                <Input.Password name ="user-password-check" value={passwordCheck} required onChange={onChangePasswordCheck}/>
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </SignInputWrapper>
            <SignInputWrapper>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>가입하시겠습니까..정말입니까..</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </SignInputWrapper>
            <SignInputWrapper>
                <Button type="primary" htmlType="submit" loading={signUploading} disabled={passwordError || termError || passwordLengthError || nicknameLengthError}>가입하기</Button>
            </SignInputWrapper>
        </SignForm>
    );
}



export default SignUp;