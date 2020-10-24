import styled from 'styled-components';
import { HomeOutlined,KeyOutlined,UserOutlined,TeamOutlined } from '@ant-design/icons';
// Navigation Icons 
export const HomeIcon=styled(HomeOutlined)`
    font-size:${({theme})=>theme.fontSizes.xxl};
    color:${({theme})=>theme.colors.blue_2};
`;

export const LoginIcon=styled(KeyOutlined)`
    font-size:${({theme})=>theme.fontSizes.xxl};
    color:${({theme})=>theme.colors.blue_2};
`;

export const ProfileIcon=styled(UserOutlined)`
    font-size:${({theme})=>theme.fontSizes.xxl};
    color:${({theme})=>theme.colors.blue_2};
`;

export const SignupIcon=styled(TeamOutlined)`
    font-size:${({theme})=>theme.fontSizes.xxl};
    color:${({theme})=>theme.colors.blue_2};
`;


export const MenuItemWrapper = styled.div`
    display:flex;
    cursor:pointer;
    margin-bottom:${({theme})=>theme.margins.base};
    padding:${({theme})=>theme.paddings.base};
    border-radius:20px;
    transition: 0.2s background-color ease-in-out;

    @media ${({theme})=>theme.device.pcS}{
        border-radius:50%;
        margin-right:0;
    }


    &:hover{
        background:${({theme})=>theme.colors.hover};
    }
`;

export const Detail=styled.div`
    flex-grow: 0;
    flex-shrink: 2;
    flex-basis: 90%;
    margin-left:${({theme})=>theme.margins.base};
    display:flex;
    justify-content:space-between;

    @media ${({theme})=>theme.device.pcS}{
        display:none;
    }
`; 
