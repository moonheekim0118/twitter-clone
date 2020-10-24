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
    background:${({theme})=>theme.colors.blue_1};
    border-radius:10px;
    color:${({theme})=>theme.colors.white};
    padding:${({theme})=>theme.paddings.base};
    font-size:${({theme})=>theme.fontSizes.xl};
    font-weight:bold;
    margin-bottom:${({theme})=>theme.margins.base};
    box-shadow: -1px 1px 5px -1px rgba(0,0,0,0.75);
    transition: 0.2s background-color ease-in-out;
    
    @media ${({theme})=>theme.device.pcS}{
        border-radius:50%;
        margin-right:0;
    }

    @media ${({theme})=>theme.device.tablet}{
        position: fixed;
        bottom:10px;
        right:10px;
        font-size:${({theme})=>theme.device.xxxl};
    }

    &:hover{
        background-color:${({theme})=>theme.colors.blue_2};
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