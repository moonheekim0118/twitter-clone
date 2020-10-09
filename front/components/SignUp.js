import React , {useState, useCallback} from 'react';
import {Input , Checkbox, Button} from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import {useDispatch , useSelector} from 'react-redux';
import {signUpRequestAction} from '../reducers/user';
import {SignForm, SignInputWrapper} from './Styles';


const ErrorMessage=styled.div
`
    color:red;
`


const SignUp=()=>{

    const [email, onChangeEmail]=useInput('');
    const [password, onChangePassword]=useInput('');
    const [nickname, onChangeNickName]=useInput('');
    const [passwordCheck, setPasswordCheck]= useState('');
    const [passwordError, setPasswordError]= useState(false);
    const [term, setTerm]=useState('');
    const [termError , setTermError]=useState(false);
    const dispatch=useDispatch();
    const signUploading = useSelector(state=>state.user.signUploading);

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
                <Input name ="user-nickname" value={nickname} required onChange={onChangeNickName}/>
            </SignInputWrapper>
            <SignInputWrapper>
                <label htmlFor="user-password">패스워드</label>
                <br />
                <Input.Password name ="user-password" value={password} required onChange={onChangePassword}/>
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
                <Button type="primary" htmlType="submit" loading={signUploading}>가입하기</Button>
            </SignInputWrapper>
        </SignForm>
    );
}



export default SignUp;