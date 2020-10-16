import React , {useCallback} from 'react';
import ModalPostForm from '../ModalPostForm';
import {useDispatch} from 'react-redux';
import { hidePostModalAction } from '../../actions/ui';
import {ModalOveraly,ModalFormWrapper,ModalBoxHeader,ModalCloseButton} from '../Styles';


const PostformModal=()=>{
    const dispatch = useDispatch();
    
    const onClose=useCallback(()=>{
        dispatch(hidePostModalAction());    
    },[]);

    return(
        <>
        <ModalOveraly onClick={onClose}/>
        <ModalFormWrapper>
            <ModalBoxHeader><ModalCloseButton onClick={onClose} /></ModalBoxHeader>
                <ModalPostForm/>
        </ModalFormWrapper>
        </>
    );
}


export default PostformModal;