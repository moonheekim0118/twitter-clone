import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input } from 'antd';
import Menu from './Menu';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TwitterOutlined } from '@ant-design/icons';
import {Description } from './Navigations/style';
import UserProfileModal from './Modals/UserProfileModal';

const Wrapper=styled.div`
    box-sizing:border-box;
`;

const SearchBar = styled.div`
    height:50px;
    width:100%;
    padding:15px 5px;
    top: 0;
    left:0;
    background-color:#fff;
`;

const SearchInput = styled(Input.Search)`
    vertical-align:middle;
    width:100%;
    z-index:20;
`;


const Header=styled.header`
    text-align:center;
    padding:15px 10px;
    height:50px;
    background-color:#fff;
    top: 0;
    position: -webkit-sticky;
    position:sticky;
    z-index:10;
    border-bottom:1px solid #f4f4f4;
    @media(max-width:767px){
        padding-top:10px;
        border:none;
        position:relative;
    }
`;


const Main=styled.section`
    
    width:50%;
    height:100%;
    margin:15px auto;
    @media(max-width:767px){
        width: 70% !important;
        padding: 0 !important;
    }

    @media(max-width:1279px){
        width:65%;
        padding-right:80px;
    }
    
`;

const Side=styled.section`
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
     @media(max-width:767px){
        display:none;
    }

`;

const Footer =styled.footer`
    padding:10px;
    text-align:center;
`;


const AppLayout = ({children})=>{
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
    const showProfileModal =useSelector(state=>state.ui.showProfileModal);

    return(
        <Wrapper>
            {isLoggedIn && showProfileModal&& <UserProfileModal/>}
            <Header>
             <TwitterOutlined style={{color:'#33ccff', fontSize:'1.2rem'}} /> <Link href="/"><Description>JACKJACK</Description></Link>
            </Header>
            <div>
                <Menu isLoggedIn={isLoggedIn}/>
                <Main>{children}</Main>
                <Side>
                    <SearchBar>
                        <SearchInput enterButton/> 
                    </SearchBar>
                </Side>
            </div>
            <Footer><a href="https://mooneedev.netlify.app/" target="_blank" rel="noreferrer noopener">Mady by moonee</a></Footer>
        </Wrapper>
    )
}

AppLayout.propTypes={
    children : PropTypes.node.isRequired,
}

export default AppLayout;