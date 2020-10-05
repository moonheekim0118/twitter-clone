import React , {useState, useCallback} from 'react';
import {Form , Input , Checkbox, Button} from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import {useDispatch , useSelector} from 'react-redux';
import {signUpRequestAction} from '../reducers/user';

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
        <FormWrapper onFinish={onSubmit}>
            <InputWrapper>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name ="user-email" value={email} required onChange={onChangeEmail}/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="user-nickname">닉네임</label>
                <br />
                <Input name ="user-nickname" value={nickname} required onChange={onChangeNickName}/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="user-password">패스워드</label>
                <br />
                <Input.Password name ="user-password" value={password} required onChange={onChangePassword}/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="user-password-check">패스워드 체크</label>
                <br />
                <Input.Password name ="user-password-check" value={passwordCheck} required onChange={onChangePasswordCheck}/>
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </InputWrapper>
            <InputWrapper>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>가입하시겠습니까..정말입니까..</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </InputWrapper>
            <InputWrapper>
                <Button type="primary" htmlType="submit" loading={signUploading}>가입하기</Button>
            </InputWrapper>
        </FormWrapper>
    );
}



export default SignUp;