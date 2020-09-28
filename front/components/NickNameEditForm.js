import React  from 'react';
import { Form , Input} from 'antd';
import styled from 'styled-components';

const FormWrapper = styled(Form)
`
    margin-bottom:20px;
    border: 1px solid #d9d9d9;
    padding:20px;
`

const NickNameEditForm=()=>{
    return(
        <FormWrapper>
            <Input.Search addonBefore="닉네임" enterButton="수정"/>
        </FormWrapper>
    )
}

export default NickNameEditForm;