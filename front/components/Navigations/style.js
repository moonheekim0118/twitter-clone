import styled from 'styled-components';
import { HomeOutlined,KeyOutlined,UserOutlined,TeamOutlined } from '@ant-design/icons';
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
