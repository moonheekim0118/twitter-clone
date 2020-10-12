import React , {useCallback} from 'react';
import { Form , Input, Button} from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch} from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import {ErrorMessage} from './Styles';
import useValidation from '../hooks/useValidation';

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
    const [nickname, onChangeNickname, nicknameError]=useValidation('',1,5);

    const onSubmitNickname=useCallback(()=>{
        dispatch({
            type:"CHANGE_NICKNAME_REQUEST",
            data:nickname
        });
    },[nickname]);


    return(
        <FormWrapper onFinish={onSubmitNickname}>
            <Wrapper>
                <InputWrapper size="large" placeholder="새로운 닉네임" prefix={<UserOutlined />} value={nickname} onChange={onChangeNickname}/>
                <Button htmlType="submit" type="primary" disabled={nicknameError} loading={changeNicknameLoading}>수정</Button>
            </Wrapper>
            {nicknameError ?<ErrorMessage>닉네임은 최소 1글자, 최대 5글자 입니다.</ErrorMessage>: <div></div>}
        </FormWrapper>
    )
}

export default NickNameEditForm;