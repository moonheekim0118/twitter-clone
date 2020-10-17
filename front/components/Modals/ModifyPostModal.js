import React , {useCallback} from 'react';
import ModifyPostForm from '../ModifyPostForm';
import {useDispatch} from 'react-redux';
import {BlackOveraly,ModalFormWrapper,ModalBoxHeader,ModalCloseButton} from '../Styles/modal';
import {hideModifyModalAction} from '../../actions/ui';

const ModifyPostModal=()=>{
    const dispatch = useDispatch();
    
    const onClose=useCallback(()=>{
        dispatch(hideModifyModalAction());    
    },[]);

    return(
        <>
        <BlackOveraly onClick={onClose}/>
        <ModalFormWrapper>
            <ModalBoxHeader><ModalCloseButton onClick={onClose} /></ModalBoxHeader>
                <ModifyPostForm/>
        </ModalFormWrapper>
        </>
    );
}

export default ModifyPostModal;