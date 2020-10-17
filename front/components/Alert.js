import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Alert=({message, alertState})=>{
    return(
        <>
            <AlertBox show={alertState}>{message}</AlertBox>
        </>
    );
};

Alert.propTypes = {
    message:PropTypes.string.isRequired,
    alertState:PropTypes.bool.isRequired,
}


export default Alert;