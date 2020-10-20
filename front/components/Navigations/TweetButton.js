import React , { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showPostModalAction } from '../../actions/ui';
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { Detail } from  './style';

const Button = styled.button`
    cursor:pointer;
    display:flex;
    border:none;
    background:#0099ff;
    border-radius:10px;
    color:#fff;
    padding:10px;
    font-size:1.3rem;
    font-weight:bold;
    margin-bottom:10px;
    box-shadow: -1px 1px 5px -1px rgba(0,0,0,0.75);

    @media(max-width:1279px){
        border-radius:50%;
        margin-right:0;
    }

    @media(max-width:767px){
        position: fixed;
        bottom:10px;
        right:10px;
        font-size:1.7rem;
    }

`;


const TweetButton=()=>{

    const dispatch = useDispatch();
    const onClickShowPostForm=useCallback(()=>{
        dispatch(showPostModalAction());
    },[]);

    return(
        <Button onClick={onClickShowPostForm}>
            <EditOutlined />
            <Detail>
                Tweet
            </Detail>
        </Button>
    )
};

export default TweetButton;