import styled from 'styled-components';
import { LeftOutlined } from '@ant-design/icons';

export const Header=styled.header`
    text-align:center;
    padding:15px 10px;
    height:50px;
    background-color:#fff;
    top: 0;
    position: -webkit-sticky;
    position:sticky;
    z-index:10;
    border-bottom:1px solid #f4f4f4;
    @media screen and (max-width:767px){
        padding-top:10px;
        border:none;
        position:relative;
    }
`;


export const Main=styled.section`
    width:50%; 
    height:100%;
    margin:15px auto;
    @media screen and (max-width:767px){
        width: 70% !important;
        padding: 0 !important;
    }

    @media(max-width:1279px){
        width:65%;
        padding-right:80px;
    }
    
`;

export const Side=styled.section`
     z-index:20;
     position:fixed;
     background:#fff;
     height:100%;
     max-height:1000px;
     top:0px;
     bottom:0px;
     right:0px;
     width:20%;
     margin-left:25px;
     border-left: 2px solid #f4f4f4;
     @media screen and (max-width:767px){
        display:none;
    }

`;

export const Footer =styled.footer`
    padding:10px;
    text-align:center;
`;

export const BackButton=styled(LeftOutlined)`
    font-size:1.5rem;
    position:absolute;
    left:0px;

    &:hover{
        color:#0099cc;
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