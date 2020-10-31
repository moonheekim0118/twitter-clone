import styled from 'styled-components';

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

    @media ${({theme})=>theme.device.tablet}{
        width:70%;
    }
    
`;

export const ModalBoxHeader = styled.div`
    width:100%;
    margin-bottom:${({theme})=>theme.margins.xl};
`;
