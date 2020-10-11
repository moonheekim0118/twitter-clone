import React , {useCallback} from 'react';
import ModifyPostForm from '../ModifyPostForm';
import {useDispatch} from 'react-redux';
import { HIDE_MODIFY_MODAL } from '../../actions/ui';
import {ModalOveraly,ModalFormWrapper,ModalBoxHeader,ModalCloseButton} from '../Styles';

const ModifyPostModal=()=>{
    const dispatch = useDispatch();
    
    const onClose=useCallback(()=>{
        dispatch({ type:HIDE_MODIFY_MODAL });    
    },[]);

    return(
        <>
        <ModalOveraly onClick={onClose}/>
        <ModalFormWrapper>
            <ModalBoxHeader><ModalCloseButton onClick={onClose} /></ModalBoxHeader>
                <ModifyPostForm/>
        </ModalFormWrapper>
        </>
    );
}

export default ModifyPostModal;