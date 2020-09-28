import React , {useState, useCallback} from 'react';
import {Form , Input , Checkbox, Button} from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const ErrorMessage=styled.div
`
    color:red;
`

const SubmitWrapper =styled.div`
    margin-top:10px;
`


const SignUp=()=>{

    const [id, onChangeId]=useInput('');
    const [password, onChangePassword]=useInput('');
    const [nickname, onChangeNickName]=useInput('');
    const [passwordCheck, setPasswordCheck]= useState('');
    const [passwordError, setPasswordError]= useState(false);
    const [term, setTerm]=useState('');
    const [termError , setTermError]=useState(false);

    const onSubmit=useCallback(() => {
        if(password!==passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id,nickname, password);
    },[password,passwordCheck, term])

    const onChangeTerm=useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    })

    const onChangePasswordCheck=useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password])

    return(
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name ="user-id" value={id} required onChange={onChangeId}/>
            </div>
            <div>
                <label htmlFor="user-nickname">닉네임</label>
                <br />
                <Input name ="user-nickname" value={nickname} required onChange={onChangeNickName}/>
            </div>
            <div>
                <label htmlFor="user-password">패스워드</label>
                <br />
                <Input.Password name ="user-password" value={password} required onChange={onChangePassword}/>
            </div>
            <div>
                <label htmlFor="user-password-check">패스워드 체크</label>
                <br />
                <Input.Password name ="user-password-check" value={passwordCheck} required onChange={onChangePasswordCheck}/>
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
            <div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>가입하시겠습니까..정말입니까..</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </div>
            <SubmitWrapper>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </SubmitWrapper>
        </Form>
    );
}



export default SignUp;