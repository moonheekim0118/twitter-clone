import styled from 'styled-components';

export const Header=styled.header`
    text-align:center;
    padding:${({theme})=>`${theme.paddings.xl} ${theme.paddings.base}`};
    height:50px;
    background-color:${({theme})=>theme.colors.white};
    top: 0;
    position: -webkit-sticky;
    position:sticky;
    z-index:10;
    border-bottom:1px solid ${({theme})=>theme.colors.gray_3};
    @media ${({theme})=>theme.device.tablet}{
        padding-top:${({theme})=>theme.paddings.base};
        border:none;
        position:relative;
    }
`;


export const Main=styled.section`
    width:50%; 
    height:100%;
    margin:${({theme})=>theme.margins.xl} auto;

    @media ${({theme})=>theme.device.tablet}{
        width: 70% !important;
        padding: 0 !important;
    }

    @media ${({theme})=>theme.device.pcS}{
        width:65%;
        padding-right:80px;
    }
    
`;

export const Side=styled.section`
     z-index:20;
     position:fixed;
     background:${({theme})=>theme.colors.white};
     height:100%;
     max-height:1000px;
     top:0px;
     bottom:0px;
     right:0px;
     width:20%;
     margin-left:25px;
     border-left: 2px solid ${({theme})=>theme.colors.gray_3};

     @media ${({theme})=>theme.device.tablet}{
        display:none;
    }

`;

export const Footer =styled.footer`
    padding:${({theme})=>theme.paddings.base};
    text-align:center;
`;


export const Description=styled.a`
    font-size:${({theme})=>theme.fontSizes.xxl};
    font-weight:bold;
    color:${({theme})=>theme.colors.black};
`;

export const DescriptionWithoutLink=styled.div`
    font-size:${({theme})=>theme.fontSizes.xxl};
    color:${({theme})=>theme.colors.black};
    font-weight:bold;
    position:relative;
    margin:0 auto;
    width:50%;
    text-align:center;
`;