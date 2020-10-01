import React  from 'react';
import { Form , Input} from 'antd';
import styled from 'styled-components';
import { useSelector} from 'react-redux';

const FormWrapper = styled(Form)
`
    margin-bottom:20px;
    border: 1px solid #d9d9d9;
    padding:20px;
`

const NickNameEditForm=()=>{
    const formerNickName = useSelector(state => state.me?.nickname);
    return(
        <FormWrapper>
            <Input.Search addonBefore="닉네임" enterButton="수정" placeholder={formerNickName}/>
        </FormWrapper>
    )
}

export default NickNameEditForm;