import React , {useCallback} from 'react';
import ModifyPostForm from '../ModifyPostForm';
import {useDispatch} from 'react-redux';
import { HIDE_MODIFY_MODAL } from '../../actions/ui';
import {ModalOveraly,ModalFormWrapper,ModalBoxHeader,ModalCloseButton} from '../Styles';
import PropTypes from 'prop-types';


const ModifyPostModal=({postId, postContent})=>{
    const dispatch = useDispatch();
    
    const onClose=useCallback(()=>{
        dispatch({ type:HIDE_MODIFY_MODAL });    
    },[]);

    return(
        <>
        <ModalOveraly onClick={onClose}/>
        <ModalFormWrapper>
            <ModalBoxHeader><ModalCloseButton onClick={onClose} /></ModalBoxHeader>
                <ModifyPostForm postId={postId} postContent={postContent}/>
        </ModalFormWrapper>
        </>
    );
}

ModifyPostModal.propTypes = {
    postId: PropTypes.string.isRequired,
    postContent: PropTypes.string.isRequired,
}


export default ModifyPostModal;