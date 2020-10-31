import React, { useCallback,useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAction } from '../../../actions/post';
import useInput from '../../../hooks/useInput';
import Button from '../../../atom/Button';
import { LoadingIcon } from '../../Icons';
import { FormWrapper, TextArea } from '../../Post/PostForm/style';
import { Wrapper, ButtonWrapper } from './style';

const CommentForm=({postId})=>{
    const {isLoggedIn}= useSelector((state)=>state.user);
    const id = useSelector((state)=>state.user.me?.id);
    const nickname = useSelector((state)=>state.user.me?.nickname);
    const {addCommentDone , addCommentloading} = useSelector((state)=>state.post);
    const [commentText, onChangeText, setCommentText]=useInput('');

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
            dispatch(addCommentAction({text:commentText,id,nickname,postId:postId})); // 여기서 id는 userId 
       }
    },[commentText]);

    
    return(
        <Wrapper>
            <FormWrapper small="true">
                <TextArea
                value={commentText} 
                onChange={onChangeText}
                row={1}
                placeholder={"따뜻한 댓글을 남겨주세요"}
                />
            </FormWrapper>
            <ButtonWrapper>
                <Button 
                onClick={onSubmitComment} 
                disabled={commentText.length===0 || commentText.length>50}
                style={{radius:'5px', back:'full'}}
                >
                    {addCommentloading ? <LoadingIcon/> : 'Comment'}
                </Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

CommentForm.propTypes={
    postId:PropTypes.number.isRequired
};


export default CommentForm;