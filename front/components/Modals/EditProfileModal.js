import React , { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { hideInfoEditModalAction } from '../../actions/ui';
import EditProfileForm from '../User/EditProfileForm';
import { BlackOveraly } from './style';

const EditProfileModal=()=>{
    const dispatch=useDispatch();

    const onClose=useCallback(()=>{
        dispatch(hideInfoEditModalAction());
    },[]);

    return(
        <>
            <BlackOveraly onClick={onClose}/>
            <EditProfileForm/>
        </>
    );
};

export default EditProfileModal;