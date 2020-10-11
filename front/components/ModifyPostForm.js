import React, {useCallback,useState,useRef,useEffect} from 'react';
import { Button }from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import {HIDE_MODIFY_MODAL} from '../actions/ui';
import ImagePath from './ImagePath';
import {MODIFY_POST_REQUEST} from '../actions/post';
import {PostFormWrapper,TextArea,ButtonWrapper} from './Styles';
import PropTypes from 'prop-types';


const ModifyPostPorm =({postId, postContent})=>{

    const modifyPostloading = useSelector(state=>state.post.modifyPostloading);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, setText]=useState(postContent);

    const onSubmit=useCallback(()=>{
        dispatch(
            {
                type:MODIFY_POST_REQUEST, 
                data : { postId:postId, content:text}
            });
        dispatch({type:HIDE_MODIFY_MODAL});
    },[text])

    const onChangeText =useCallback((e)=>{
        setText(e.target.value);
    },[])

    const onClickImageUpload=useCallback(()=>{
        imageInput.current.click();
    },imageInput.current)

    return(
        <PostFormWrapper encType="multipart/form-data" onFinish={onSubmit}>
            <TextArea value={text}
             onChange={onChangeText}
             maxLength={150}
             rows={3}
            />
            <ButtonWrapper>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}> 이미지 수정 </Button>
                <Button type="primary" htmlType="submit" loading={modifyPostloading} disabled={text.length===0 || text===postContent}>수정</Button>
            </ButtonWrapper>
            <ImagePath/>
        </PostFormWrapper>
    )
}

ModifyPostPorm.propTypes = {
    postId: PropTypes.string.isRequired,
    postContent: PropTypes.string.isRequired,
}


export default ModifyPostPorm;