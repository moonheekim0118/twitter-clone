import React , {useCallback} from 'react';
import styled from 'styled-components';
import PostForm from '../PostForm';
import {useDispatch} from 'react-redux';
import { HIDE_POST_MODAL } from '../../actions/ui';
import {CloseOutlined} from '@ant-design/icons';

const Overaly = styled.div`
    top:0;
    left:0;
    bottom:0;
    right:0;
    position:fixed;
    z-index:5000;
    background-color:rgba(0,0,0,0.5);
`;

const FormWrapper=styled.div`
    position:fixed;
    background:#fff;
    padding:20px 10px;
    border-radius:5px;
    margin:0;
    top:50%;
    left:50%;
    width:50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index:7000;

    @media(max-width:767px){
        width:70%;
    }
    
`;

const BoxHeader = styled.div`
    width:100%;
    margin-bottom:15px;
`;

const CloseButton=styled(CloseOutlined)`
    cursor:pointer;
    position:absolute;
    right:7px;
    top:5px;
    font-size:1.2rem;
`;

const PostformModal=()=>{
    const dispatch = useDispatch();
    
    const onClose=useCallback(()=>{
        dispatch({ type:HIDE_POST_MODAL });    
    },[]);

    return(
        <>
        <Overaly onClick={onClose}/>
        <FormWrapper>
            <BoxHeader><CloseButton onClick={onClose} /></BoxHeader>
                <PostForm/>
        </FormWrapper>
        </>
    );
}


export default PostformModal;