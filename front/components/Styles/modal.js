// modal 관련 스타일링 
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const TransparentOveraly=styled.div`
    top:0;
    left:0;
    bottom:0;
    right:0;
    position:fixed;
    z-index:5000;

    @media(max-width:767px){
        display:none;
    }
`;

export const BlackOveraly = styled.div`
    top:0;
    left:0;
    bottom:0;
    right:0;
    position:fixed;
    z-index:5000;
    background-color:rgba(0,0,0,0.5);
`;

export const ModalFormWrapper=styled.div`
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

    @media screen and (max-width:767px){
        width:70%;
    }
    
`;

export const ModalBoxHeader = styled.div`
    width:100%;
    margin-bottom:15px;
`;

export const ModalCloseButton=styled(CloseOutlined)`
    cursor:pointer;
    position:absolute;
    right:7px;
    top:5px;
    font-size:1.2rem;
`;