import React , {useState,useCallback}from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {UserOutlined} from '@ant-design/icons';

const Wrapper=styled.div`
    box-sizing:border-box;
`;


const Row = styled.div`
    display:flex;
    justify-contents:center;
    @media(max-width:767px){
        flex-direction:column;
        align-items:center
    }
`;

const SearchInput = styled(Input.Search)`
    vertical-align:middle;
    margin:20px;
    width:40%;
    @media(max-width:768px){
        width:70%;
        position:sticky;
    }
`;

const Navigation=styled.nav`
    display:flex;
    flex-direction:row;
    margin-top:0px;
    margin-bottom:10px;
    border-bottom:1px solid #f4f4f;
    @media(min-width:767px){
        width:30%;
        height:100%;
        max-height:1000px;
        display:flex;
        background:#fff;
        position:fixed;
        flex:1;
        flex-basis:20%;
        flex-direction:column;
        justify-content:space-between;
        z-index:10;
        margin-right:25px;
        border-right: 1px solid #f4f4f;
    }
`;

const MenuWrapper=styled.div`
    display:flex;
    flex-direction:column;
    padding:25px;
    @media(max-width:767px){
        flex-direction:row;
        padding:0px;
        margin-bottom:10px;
    }
`;

const MenuItem=styled.div`
    display:inline-block;
    margin-bottom:15px;
    @media(max-width:767px){
       margin-bottom:0px;
       margin-left:10px;
    }
`;

const Header=styled.header`
    text-align:center;
    padding:30px;
    @media(max-width:767px){
        padding:0px;
        margin-top:10px;
    }
`;

    // flex:2;
    // flex-basis:60%;

const Main=styled.section`
    width:40%;
    margin-right:20px;
    flex:2;
    flex-basis:60%;
    @media(max-width:768px){
        width:70%;
        margin:0px;
    }
`;

const Side=styled.section`
    flex-basis:20%;
`;

const Footer =styled.footer`
    padding:10px;
    text-align:center;
`;

const AppLayout = ({children})=>{
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
    return(
        <Wrapper>
            <Header>
                 <SearchInput enterButton/>
            </Header>
            <Row>
                <Navigation>
                        <MenuWrapper mode="horizontal">
                            <MenuItem key="home">
                                <Link href="/"><a>트위터</a></Link>
                            </MenuItem>
                            <MenuItem key="profile">
                                <Link href="/profile"><a>프로필</a></Link>
                            </MenuItem>
                            <MenuItem key="signup">
                                <Link href="/signUp"><a>회원가입</a></Link>
                            </MenuItem>
                            <MenuItem>
                               <UserOutlined />
                            </MenuItem>
                        </MenuWrapper>
                    {/* {isLoggedIn ? <UserProfile/> : <LoginForm />} */}
                </Navigation>
                <Main>{children}</Main>
                <Side>추후구현</Side>
            </Row>
            <Footer><a href="https://mooneedev.netlify.app/" target="_blank" rel="noreferrer noopener">Mady by moonee</a></Footer>
        </Wrapper>
    )
}

AppLayout.propTypes={
    children : PropTypes.node.isRequired,
}

export default AppLayout;