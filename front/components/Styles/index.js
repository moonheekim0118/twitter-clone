import styled from 'styled-components';
import {Form, Input} from 'antd';
import {HomeOutlined , KeyOutlined, UserOutlined, TeamOutlined} from '@ant-design/icons';

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

export const DescriptionWithoutLink=styled.div`
    font-size:1.3rem;
    font-weight:bold;
    color:inherit;
    position:relative;
    margin:0 auto;
    width:50%;
    text-align:center;
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
    @media screen and (max-width:767px){
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
