import styled from 'styled-components';
import { PlusOutlined , CloseOutlined } from '@ant-design/icons';


export const Wrapper = styled.div`
    position:fixed;
    background:#fff;
    height:270px;
    border-radius:20px;
    margin:0;
    top:50%;
    left:50%;
    width:30%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index:7000;

    -webkit-box-shadow: 1px 2px 6px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 2px 6px -1px rgba(0,0,0,0.75);
    box-shadow: 1px 2px 6px -1px rgba(0,0,0,0.75);

    @media ${({theme})=>theme.device.tablet}{
        width:70%;
    }
`;

export const Header = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:${({theme})=>theme.paddings.base} ${({theme})=>theme.paddings.small};
    position:relative;
`;

export const Title = styled.span`
    font-weight:bold;
    font-size:${({theme})=>theme.fontSizes.xl};
    position:absolute;
    left:60px;

`;

export const ContentWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    
    border-top:1px solid ${({theme})=>theme.colors.gray_4};

    padding:${({theme})=>theme.paddings.xxl} ${({theme})=>theme.paddings.xxl};
`;

export const CloseButton=styled(CloseOutlined)`
    cursor:pointer;
    font-size:${({theme})=>theme.fontSizes.xl};
    border-radius:50%;
    padding:${({theme})=>theme.paddings.lg};
    transition: 0.2s background-color ease-in-out;
    
    &:hover{
        background-color:${({theme})=>theme.colors.hover};
    }
`;


export const ProfilePicWrapper = styled.div`
    display:inline-block;
    position:relative;
    width:80px;
    height:80px;
    border-radius:50%;
    z-index:1000;
    background-color:rgba(0,0,0,0.8);
`;

export const Overaly = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 1000;
    cursor:pointer;

    width:80px;
    height:80px;
    border-radius:50%;
    background-color: rgba(0,0,0,0.3);
`;

export const EditIcon= styled(PlusOutlined)`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    cursor:pointer;

    padding:${({theme})=>theme.paddings.base};
    color:${({theme})=>theme.colors.white};
    font-size:${({theme})=>theme.fontSizes.xxxl};
    z-index:1001;
    border-radius:50%;
    transition: 0.2s background-color ease-in-out;

    &:hover{
        background-color:rgba(255,255,255,0.3);
    }
`;
