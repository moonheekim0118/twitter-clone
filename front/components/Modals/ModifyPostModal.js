import React , {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { hideModifyModalAction } from '../../actions/ui';
import ModifyPostForm from '../Post/ModifyPostForm';
import { BlackOveraly,ModalFormWrapper,ModalBoxHeader,ModalCloseButton } from './style';

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