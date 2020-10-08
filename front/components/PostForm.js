import React, {useCallback,useState,useRef,useEffect} from 'react';
import { Form , Input,Button }from 'antd';
import styled from 'styled-components';
import ImagePath from './ImagePath';
import { useDispatch , useSelector} from 'react-redux';
import { addPostRequest } from '../reducers/post';
import {HIDE_POST_MODAL} from '../actions/ui';
import shortid from 'shortid';

const FormWrapper = styled(Form)`
    marign: 10px 0 20px;
`
const TextArea = styled(Input.TextArea)`
    border-radius:5px;
`;

const ButtonWrapper= styled.div`
    margin-top:5px;
    display:flex;
    justify-content:space-between;
`;


const PostForm =()=>{
    const {id, nickname}= useSelector((state)=>state.user.me);
    const {imagePaths, addPostDone }= useSelector((state)=>state.post);
    const showPostModal = useSelector((state)=>state.ui.showPostModal);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, setText]=useState('');


    useEffect(()=>{
       if(addPostDone){
        setText('');
       }
    },[addPostDone])

    const onSubmit=useCallback(()=>{
        const postId=shortid.generate();
        dispatch(addPostRequest({text,id,nickname,postId}));
        if(showPostModal){
            dispatch({type:HIDE_POST_MODAL});
        }
    },[text])

    const onChangeText =useCallback((e)=>{
        setText(e.target.value);
    },[])

    const onClickImageUpload=useCallback(()=>{
        imageInput.current.click();
    },imageInput.current)
    return(
        <FormWrapper encType="multipart/form-data" onFinish={onSubmit}>
            <TextArea value={text}
             onChange={onChangeText}
             maxLength={150}
             rows={3}
             placeholder="어떤 신기한 일이 있었나요?"
            />
            <ButtonWrapper>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}> 이미지 업로드 </Button>
                <Button type="primary" htmlType="submit" disabled={text.length===0}>짹짹</Button>
            </ButtonWrapper>
            <ImagePath/>
        </FormWrapper>
    )
}

export default PostForm;