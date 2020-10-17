import React, {useCallback,useRef,useEffect} from 'react';
import { Button }from 'antd';
import ImagePath from './ImagePath';
import { useDispatch , useSelector} from 'react-redux';
import { addPostRequest , uploadImagesRequest } from '../actions/post';
import {hidePostModalAction} from '../actions/ui';
import {PostFormWrapper,TextArea,ButtonWrapper} from './Styles';
import useInput from '../hooks/useInput';


const ModalPostForm =()=>{
    const { addPostDone,imagePaths }= useSelector((state)=>state.post);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');


    useEffect(()=>{
       if(addPostDone){
        setText('');
       }
    },[addPostDone])

    const onSubmit=useCallback(()=>{
        let formData;
        if(imagePaths.length > 0){
            formData=new FormData();
            imagePaths.forEach((i)=>{
                formData.append('image',i);
            })
            formData.append('content',text);
        }
        else{
            formData={'content':text}
        }
        dispatch(addPostRequest(formData));
        dispatch(hidePostModalAction());
    },[text,imagePaths])

    const onClickImageUpload=useCallback(()=>{
        imageInput.current.click();
    },imageInput.current);

    const onChangeImages=useCallback((e)=>{
        console.log('images ', e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f)=>{
            imageFormData.append('image',f);
        });
        dispatch(uploadImagesRequest(imageFormData));
    });


    return(
        <PostFormWrapper encType="multipart/form-data" onFinish={onSubmit}>
            <TextArea value={text}
             onChange={onChangeText}
             maxLength={150}
             rows={3}
             placeholder="어떤 신기한 일이 있었나요?"
            />
            <ButtonWrapper>
                <input type="file" multiple name="image" hidden ref={imageInput} onChange={onChangeImages}/>
                <Button onClick={onClickImageUpload} disabled={imagePaths.length===4}> 이미지 업로드 </Button>
                <Button type="primary" htmlType="submit" disabled={text.length===0}>짹짹</Button>
            </ButtonWrapper>
            <ImagePath/>
        </PostFormWrapper>
    )
}

export default ModalPostForm;