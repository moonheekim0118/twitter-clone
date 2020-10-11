import React , {useCallback} from 'react';
import ModifyPostForm from '../ModifyPostForm';
import {useDispatch} from 'react-redux';
import {ModalOveraly,ModalFormWrapper,ModalBoxHeader,ModalCloseButton} from '../Styles';
import {hideModifyModalAction} from '../../actions/ui';

const ModifyPostModal=()=>{
    const dispatch = useDispatch();
    
    const onClose=useCallback(()=>{
        dispatch(hideModifyModalAction());    
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