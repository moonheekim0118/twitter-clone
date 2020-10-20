import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const AlertBox=styled.div`
    width:330px;
    padding:20px;
    border-top-left-radius:15px;
    border-top-right-radius:15px;
    font-size:1rem;
    background-color:#0099cc;
    color:#fff;
    position:fixed;
    bottom:0;
    text-align:center;
    z-index:5000;
    left:50%;
    transform:${props=>props.show ?'translate(-50%,0%)' : 'translate(-50%,100%)'};
    -webkit-transition: 1s ease-in-out;
    transition: 1s ease-in-out;
`;

const Alert=()=>{
    const {showAlert,alertContent }= useSelector((state)=>state.ui);
    

    return(
        <AlertBox show={showAlert}>{alertContent}</AlertBox>
    );
};


export default Alert;