import React, { useCallback,useRef,useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { addPostAction , uploadImagesAction } from '../../../actions/post';
import { hidePostModalAction, showAlertAction } from '../../../actions/ui';
import useInput from '../../../hooks/useInput';
import ImagePath from '../../Image/ImagePath';
import Avatar from '../../Avatar';
import { FormWrapper,FormMeta,Buttons,TextArea,TweetButton,TextLength } from './style';
import { SideWrapper } from '../PostCard/style';
import { AvatarWrapper } from '../../globalStyle';
import { ImageIcon , LoadingIcon } from '../../Icons';

const PostForm =()=>{
    const { addPostloading,addPostDone,imagePaths }= useSelector((state)=>state.post);
    const me = useSelector((state)=>state.user.me);
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
        <FormWrapper encType="multipart/form-data" onSubmit={onSubmit} noborder={showPostModal}>
            <SideWrapper>
                <AvatarWrapper size={65}>
                    <Avatar imageSrc={me.profilepic || ""} userId={me.id} userNickname={me.nickname} isLink={false} isMyPic={true}/>
                </AvatarWrapper>
            </SideWrapper>
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
                    <ImageIcon onClick={onClickImageUpload} />
                    {text.length>0 && <TextLength limit={text.length>=140}>{140-text.length}</TextLength>}
                    {addPostloading ? <LoadingIcon/> : 
                    <TweetButton type="primary" htmlType="submit"  disabled={text.length===0 || text.length>=140}>Tweet</TweetButton>
                    }
                </Buttons>
                <ImagePath/>
            </FormMeta>
        </FormWrapper>
        </>
    )
}

export default PostForm;