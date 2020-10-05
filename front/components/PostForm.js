import React, {useCallback,useState,useRef,useEffect} from 'react';
import { Form , Input,Button }from 'antd';
import styled from 'styled-components';
import ImagePath from './ImagePath';
import { useDispatch , useSelector} from 'react-redux';
import { addPostRequest } from '../reducers/post';

const FormWrapper = styled(Form)`
    marign: 10px 0 20px;
`

const ButtonWrapper= styled.div`
    margin-top:5px;
    display:flex;
    justify-content:space-between;
`;


const PostForm =()=>{
    const {id, nickname}= useSelector((state)=>state.user.me);
    const {imagePaths, addPostDone }= useSelector((state)=>state.post);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, setText]=useState('');


    useEffect(()=>{
       if(addPostDone){
        setText('');
       }
    },[addPostDone])

    const onSubmit=useCallback(()=>{
        dispatch(addPostRequest({text,id,nickname}));
    },[text])

    const onChangeText =useCallback((e)=>{
        setText(e.target.value);
    },[])

    const onClickImageUpload=useCallback(()=>{
        imageInput.current.click();
    },imageInput.current)
    return(
        <FormWrapper encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea value={text}
             onChange={onChangeText}
             maxLength={150}
             placeholder="어떤 신기한 일이 있었나요?"
            />
            <ButtonWrapper>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}> 이미지 업로드 </Button>
                <Button type="primary" htmlType="submit">짹짹</Button>
            </ButtonWrapper>
            <ImagePath/>
        </FormWrapper>
    )
}

export default PostForm;