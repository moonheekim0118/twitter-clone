import styled from 'styled-components';
import {Form, Input} from 'antd';
import {CloseOutlined, HomeOutlined , KeyOutlined, UserOutlined, TeamOutlined} from '@ant-design/icons';

// Navigation Icons 
export const HomeIcon=styled(HomeOutlined)`
    font-size:1.5rem;
    color:#0099cc;
`;

export const LoginIcon=styled(KeyOutlined)`
    font-size:1.5rem;
    color:#0099cc;
`;

export const ProfileIcon=styled(UserOutlined)`
    font-size:1.5rem;
    color:#0099cc;
`;

export const SignupIcon=styled(TeamOutlined)`
    font-size:1.5rem;
    color:#0099cc;
`;


export const MenuItemWrapper = styled.div`
    display:flex;
    cursor:pointer;
    margin-bottom:10px;
    padding:10px;
    border-radius:20px;

    @media(max-width:1279px){
        border-radius:50%;
        margin-right:0;
    }


    &:hover{
        background:rgba(128, 223, 255,0.2);
    }
`;

export const Detail=styled.div`
    width:40%;
    margin-left:10px;
    display:flex;
    justify-content:space-between;

    @media(max-width:1279px){
        display:none;
    }
`; 


export const Description=styled.a`
    font-size:1.3rem;
    font-weight:bold;
    color:inherit;
`;

export const SignForm=styled(Form)`
    width:100%;
    margin-top:50px;
    background-color:rgba(77, 166, 255,0.3);
    padding:40px;
    border-radius:10px;
    -webkit-box-shadow: 2px 2px 18px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 18px -7px rgba(0,0,0,0.75);
    box-shadow: 2px 2px 18px -7px rgba(0,0,0,0.75);
`;



export const SignInputWrapper=styled.div`
    width:50%;
    margin:10px auto;
    @media(max-width:767px){
        width:100%;
    }
`

export const ErrorMessage=styled.div
`
    color:red;
`

export const AlertMessage=styled.div
`
    color:green;
`;

export const PostFormWrapper = styled(Form)`
marign: 10px 0 20px;
`


export const TextArea = styled(Input.TextArea)`
    border-radius:5px;
`;


export const ButtonWrapper= styled.div`
    margin-top:5px;
    display:flex;
    justify-content:space-between;
`;

// Post Form Modal 


export const ModalOveraly = styled.div`
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

    @media(max-width:767px){
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