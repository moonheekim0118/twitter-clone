import React , {useCallback,useState} from 'react';
import { Form , Input, Button} from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch} from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import {ErrorMessage} from './Styles';

const FormWrapper = styled(Form)
`
    padding:20px;
    width:50%;
    margin:auto;
    margin-bottom:20px;

    @media(max-width:1000px){
        width:70%;
    }
`
const InputWrapper = styled(Input)`
    border:none;
    width:250px;
    border-bottom:1px solid blue;
`;

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;


const NickNameEditForm=()=>{
    const dispatch = useDispatch();
    const changeNicknameLoading = useSelector(state=>state.user.changeNicknameLoading);
    const [nicknameError, setNicknameError]=useState(false);
    const [text, setText]=useState('');
    

    const onSubmitNickname=useCallback(()=>{
        dispatch({
            type:"CHANGE_NICKNAME_REQUEST",
            data:text
        });
    },[text]);

    const onChangeNickname=useCallback((e)=>{
        setText(e.target.value);
        setNicknameError(e.target.value.length>=5);
    },[]);

    return(
        <FormWrapper onFinish={onSubmitNickname}>
            <Wrapper>
                <InputWrapper size="large" placeholder="새로운 닉네임" prefix={<UserOutlined />} value={text} onChange={onChangeNickname}/>
                <Button htmlType="submit" type="primary" disabled={text.length===0 || nicknameError} loading={changeNicknameLoading}>수정</Button>
            </Wrapper>
            {nicknameError ?<ErrorMessage>닉네임은 최대 4글자입니다.</ErrorMessage>: <div></div>}
        </FormWrapper>
    )
}

export default NickNameEditForm;