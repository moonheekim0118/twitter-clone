import React, { useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostAction, uploadImagesAction } from '../../../actions/post';
import { showAlertAction } from '../../../actions/ui';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import ImagePath from '../../Image/ImagePath';
import Avatar from '../../Avatar';
import Button from '../../../atom/Button';
import { FormWrapper, FormMeta, Buttons, TextArea, TextLength } from './style';
import { SideWrapper } from '../PostCard/style';
import { ImageIcon, LoadingIcon } from '../../Icons';

const PostForm = ({ isModal, onClose }) => {
    const { addPostloading, addPostDone, imagePaths } = useSelector(
        (state) => state.post
    );
    const me = useSelector((state) => state.user.me);
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
        if(imagePaths.length > 0 && imagePaths.length<= 4){
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
        if(onClose){
            onClose();

        }
    }, [addPostDone]);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            let formData;
            if (imagePaths.length > 0) {
                formData = new FormData();
                imagePaths.forEach((i) => {
                    formData.append('image', i);
                });
                formData.append('content', text);
            } else {
                formData = { content: text };
            }
            dispatch(addPostAction(formData));
            if (onClose) {
                onClose();
            }
        },
        [text, imagePaths]
    );

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onChangeImages=useCallback((e)=>{
        if(e.target.files.length>4 || imagePaths.length >4){ // 이미지 개수가 4개를 초과할 경우 alert 띄워준다. 
             return dispatch(showAlertAction("이미지는 최대 4장 업로드 가능합니다."));

        }
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        });
        dispatch(uploadImagesAction(imageFormData));
    }, []);

    return (
        <>
        <FormWrapper encType="multipart/form-data" noborder={isModal}>
            <SideWrapper>
                <Avatar 
                    user={me}
                    size={65}
                    isLink={false}
                    isMyPic={true}
                />    
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
                    <ImageIcon onClick={onClickImageUpload} 
                    disabled={imagePaths.length===4? 'true' : 'false'}/>
                    {text.length>0 && <TextLength limit={text.length>=140}>{140-text.length}</TextLength>}
                    <Button 
                    onClick={onSubmit}
                    disabled={text.length===0 || text.length>=140}
                    style={{back:'full', radius:'24px', weight:'bold'}}
                    >
                        {addPostloading ? <LoadingIcon/> : 'Tweet' }
                    </Button>
                </Buttons>
                <ImagePath/>
            </FormMeta>
        </FormWrapper>
        </>
    );
};

PostForm.defaultProps = {
    isModal: false,
    onClose: () => {},
};

PostForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    isModal: PropTypes.bool.isRequired,
};

export default PostForm;
