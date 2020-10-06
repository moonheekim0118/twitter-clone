import React, {useCallback,useState,useEffect} from 'react';
import {Form, Input,Button} from 'antd';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {addCommentRequest} from '../reducers/post';

const FormWrapper = styled(Form)`
    position:relative;
    margin:0;

`


const ButtonWrapper= styled(Button)`
    margin-top:8px;
    right:-100%;
    transform:translateX(-100%);

`

const CommentForm=({post})=>{
    const {isLoggedIn}= useSelector((state)=>state.user);
    const id = useSelector((state)=>state.user.me?.id);
    const nickname = useSelector((state)=>state.user.me?.nickname);
    const {addCommentDone , addCommentloading} = useSelector((state)=>state.post);
    const [commentText, setCommentText]=useState('');

    const dispatch = useDispatch();

    useEffect(()=>{
        if(addCommentDone){
            setCommentText('');
        }
    },[addCommentDone]);
    
    const onSubmitComment=useCallback(()=>{
       if(!isLoggedIn){ // 로그인 되지 않은 상태라면 로그인 페이지로 리다이렉트 
            Router.push('/login');
       }
       else if(commentText.length >0){ 
            dispatch(addCommentRequest({text:commentText,id,nickname,postId:post.id})); // 여기서 id는 userId 
       }
    },[commentText]);

    const onChangeText =useCallback((e)=>{
        setCommentText(e.target.value);
    },[])

    return(
        <FormWrapper onFinish={onSubmitComment}>
            <Input.TextArea value={commentText} onChange={onChangeText} row={4}/>
            <ButtonWrapper type="primary" htmlType="submit" loading={addCommentloading}>삐약</ButtonWrapper>
        </FormWrapper>
    )
}

CommentForm.propTypes={
    post: PropTypes.object.isRequired,
};


export default CommentForm;