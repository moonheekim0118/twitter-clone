import React, {useState, useCallback} from 'react';
import Link from 'next/link';
import { Form, Input , Button } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const FormWrapper = styled(Form)`
    padding:10px;
`;

const ButtonWrapper = styled.div`
    margin-top:15px;
`

const LoginForm =({setIsLoggedIn})=>{
    const [id, onChangeId]=useInput('');
    const [password, onChangePassword]=useInput('');
    
    const onSubmitForm=useCallback(()=>{
        console.log(id,password);
        setIsLoggedIn(true);
    },[id,password])

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input 
                name ="user-id" 
                value={id} 
                onChange={onChangeId}
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input.Password 
                 name="user-password"
                 value={password} 
                 onChange={onChangePassword}
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signUp"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
};

LoginForm.propTypes={
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginForm;