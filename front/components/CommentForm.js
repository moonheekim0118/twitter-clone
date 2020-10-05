import React, {useCallback,useState,useEffect} from 'react';
import {Form, Input,Button} from 'antd';
import PropTypes from 'prop-types';
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
    const {id, nickname}= useSelector((state)=>state.user.me);
    const {addCommentDone} = useSelector((state)=>state.post);
    const [commentText, setCommentText]=useState('');

    const dispatch = useDispatch();

    useEffect(()=>{
        if(addCommentDone){
            setCommentText('');
        }
    },[addCommentDone]);
    
    const onSubmitComment=useCallback(()=>{
        // comment 추가하기위해 필요한것
        // 해당 포스트 id, 현재 커멘트 text, 현재 커멘트를 쓴 User 정보 (id, nickname)
        dispatch(addCommentRequest({text:commentText,id,nickname,postId:post.id}));
    },[commentText]);

    const onChangeText =useCallback((e)=>{
        setCommentText(e.target.value);
    },[])

    return(
        <FormWrapper onFinish={onSubmitComment}>
            <Input.TextArea value={commentText} onChange={onChangeText} row={4}/>
            <ButtonWrapper type="primary" htmlType="submit">삐약</ButtonWrapper>
        </FormWrapper>
    )
}

CommentForm.propTypes={
    post: PropTypes.object.isRequired,
};


export default CommentForm;