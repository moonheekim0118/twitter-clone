import React , {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { hidePostModalAction } from '../../actions/ui';
import { resetImageAction } from '../../actions/post';
import PostForm from '../Post/PostForm';
import { BlackOveraly,ModalFormWrapper,ModalBoxHeader } from './style';
import { CloseIcon } from '../Icons';

const PostformModal=()=>{
    const dispatch = useDispatch();
    
    const onClose=useCallback(()=>{
        dispatch(resetImageAction()); // 업로드된 이미지 리셋
        dispatch(hidePostModalAction());    
    },[]);

    return(
        <>
        <BlackOveraly onClick={onClose}/>
        <ModalFormWrapper>
            <ModalBoxHeader><CloseIcon onClick={onClose} /></ModalBoxHeader>
            <PostForm/>
        </ModalFormWrapper>
        </>
    );
}


export default PostformModal;