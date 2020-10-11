import React, {useCallback,useState,useRef} from 'react';
import { Button }from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import ImagePath from './ImagePath';
import { modifyPostRequest} from '../actions/post';
import {hideModifyModalAction} from '../actions/ui';
import {PostFormWrapper,TextArea,ButtonWrapper} from './Styles';

const ModifyPostPorm =()=>{

    const {modifyFormerContent,modifyPostId}= useSelector(state=>state.ui);
    const modifyPostloading = useSelector(state=>state.post.modifyPostloading);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, setText]=useState(modifyFormerContent);

    const onSubmit=useCallback(()=>{
        dispatch(modifyPostRequest( { postId:modifyPostId, content:text}));
        dispatch(hideModifyModalAction());
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
                <Button type="primary" htmlType="submit" loading={modifyPostloading} disabled={text.length===0 || text===modifyFormerContent}>수정</Button>
            </ButtonWrapper>
            <ImagePath/>
        </PostFormWrapper>
    )
}


export default ModifyPostPorm;