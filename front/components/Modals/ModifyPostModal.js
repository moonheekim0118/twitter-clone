import React , {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { hideModifyModalAction } from '../../actions/ui';
import ModifyPostForm from '../Post/ModifyPostForm';
import { BlackOveraly,ModalFormWrapper,ModalBoxHeader } from './style';
import { CloseIcon } from '../Icons';

const ModifyPostModal=()=>{
    const dispatch = useDispatch();
    
    const onClose=useCallback(()=>{
        dispatch(hideModifyModalAction());    
    },[]);

    return(
        <>
        <BlackOveraly onClick={onClose}/>
        <ModalFormWrapper>
            <ModalBoxHeader><CloseIcon onClick={onClose} /></ModalBoxHeader>
                <ModifyPostForm/>
        </ModalFormWrapper>
        </>
    );
}

export default ModifyPostModal;