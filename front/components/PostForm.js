import React, {useCallback,useState,useRef,useEffect} from 'react';
import { Button }from 'antd';
import ImagePath from './ImagePath';
import { useDispatch , useSelector} from 'react-redux';
import { addPostRequest } from '../actions/post';
import {hidePostModalAction} from '../actions/ui';
import shortid from 'shortid';
import {PostFormWrapper,TextArea,ButtonWrapper} from './Styles';
import useInput from '../hooks/useInput';


const PostForm =()=>{
    const {id, nickname}= useSelector((state)=>state.user.me);
    const {imagePaths, addPostDone }= useSelector((state)=>state.post);
    const showPostModal = useSelector((state)=>state.ui.showPostModal);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');


    useEffect(()=>{
       if(addPostDone){
        setText('');
       }
    },[addPostDone])

    const onSubmit=useCallback(()=>{
        const postId=shortid.generate();
        dispatch(addPostRequest({text,id,nickname,postId}));
        if(showPostModal){
            dispatch(hidePostModalAction());
        }
    },[text])

    const onClickImageUpload=useCallback(()=>{
        imageInput.current.click();
    },imageInput.current)
    return(
        <PostFormWrapper encType="multipart/form-data" onFinish={onSubmit}>
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
        </PostFormWrapper>
    )
}

export default PostForm;