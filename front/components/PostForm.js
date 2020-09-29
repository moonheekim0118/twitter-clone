import React, {useCallback,useState,useRef} from 'react';
import { Form , Input,Button }from 'antd';
import styled from 'styled-components';
import ImagePath from './ImagePath';
import { useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const FormWrapper = styled(Form)`
    marign: 10px 0 20px;
`

const ButtonWrapper = styled(Button)`
    float:right;
`

const PostForm =()=>{
    
    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, setText]=useState('');

    const onSubmit=useCallback(()=>{
        dispatch(addPost);
        setText('');
    })

    const onChangeText =useCallback((e)=>{
        setText(e.target.value);
    })

    const onClickImageUpload=useCallback(()=>{
        imageInput.current.click();
    },imageInput.current)
    return(
        <FormWrapper encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea value={text}
             onChange={onChangeText}
             maxLength={140}
             placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}> 이미지 업로드 </Button>
                <ButtonWrapper type="primary" htmlType="submit">짹짹</ButtonWrapper>
            </div>
            <ImagePath/>
        </FormWrapper>
    )
}

export default PostForm;