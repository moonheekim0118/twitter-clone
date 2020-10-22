import React, { useCallback,useRef,useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { addPostAction , uploadImagesAction } from '../../../actions/post';
import { hidePostModalAction, showAlertAction } from '../../../actions/ui';
import useInput from '../../../hooks/useInput';
import ImagePath from '../../Image/ImagePath';
import { Avatar } from 'antd';
import { FormWrapper,FormMeta,Buttons,ImageButtonIcon,TextArea,TweetButton } from './style';
import { AvatarWrapper } from '../PostCard/style';

const PostForm =()=>{
    const { addPostDone,imagePaths }= useSelector((state)=>state.post);
    const showPostModal = useSelector((state)=>state.ui.showPostModal);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');

    useEffect(()=>{
       if(addPostDone){
        setText('');
       }
    },[addPostDone])


    const onSubmit=useCallback((e)=>{
        e.preventDefault();
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
        dispatch(addPostAction(formData));

        if(showPostModal){ // 모달창 이라면, 
            dispatch(hidePostModalAction());
        }
    },[text,imagePaths])

    const onClickImageUpload=useCallback(()=>{
        imageInput.current.click();
    },[imageInput.current]);

    const onChangeImages=useCallback((e)=>{
        if(e.target.files.length>4){ // 이미지 개수가 4개를 초과할 경우 alert 띄워준다. 
             return dispatch(showAlertAction("이미지는 최대 4장 업로드 가능합니다."));
        }
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f)=>{
            imageFormData.append('image',f);
        });
        dispatch(uploadImagesAction(imageFormData));
    },[]);


    return(
        <>
        <FormWrapper onSubmit={onSubmit} noborder={showPostModal}>
            <AvatarWrapper>
                <Avatar/>
            </AvatarWrapper>
            <FormMeta>
                <TextArea
                 name="content"
                 onChange={onChangeText}
                 value={text}
                 minRows={1}
                 type="text"
                 placeholder="What is happening?"
                 />
                <Buttons>
                    <input type="file" multiple name="image" hidden ref={imageInput} onChange={onChangeImages}/>
                    <ImageButtonIcon onClick={onClickImageUpload} />
                    <TweetButton disabled={text.length===0}>Tweet</TweetButton>
                </Buttons>
                <ImagePath/>
            </FormMeta>
        </FormWrapper>
        </>
    )
}

export default PostForm;