import React, {useCallback} from 'react';
import {Form, Input,Button} from 'antd';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const FormWrapper = styled(Form)`
    position:relative;
    margin:0;

`

const ButtonWrapper= styled(Button)`
    position:absolute;
    right:0;
    bottom:-40px;
`

const CommentForm=({post})=>{
    const id = useSelector(state=>state.me?.id);
    const [commentText, setCommentText]=useInput('');
    const onSubmitComment=useCallback(()=>{
        console.log(post.id,commentText);
    },[commentText]);

    return(
        <FormWrapper onFinish={onSubmitComment}>
            <Input.TextArea value={commentText} onChange={setCommentText} row={4}/>
            <ButtonWrapper type="primary" htmlType="submit">삐약</ButtonWrapper>
        </FormWrapper>
    )
}

CommentForm.propTypes={
    post: PropTypes.object.isRequired,
};


export default CommentForm;