import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Overaly = styled.div`
    top:0;
    left:0;
    bottom:0;
    right:0;
    position:fixed;
    z-index:5000;
    background-color:${(props)=>props.color==='black'?'rgba(0,0,0,0.5)':'none'}; 
`;


const Modal = ({onClose, color, children}) => {
    const root = document.getElementById('root');

    return(
        ReactDOM.createPortal((
            <>
                <Overaly color={color} onClick={onClose}/>
                {children}
            </>)
        ,root)
    )
};


Modal.propTypes={
    onClose: PropTypes.func.isRequired,
    children : PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
}


export default Modal;