import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input } from 'antd';
import UserProfile from './UserProfile';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TwitterOutlined } from '@ant-design/icons';
import LogoutButton from './LogoutButton';

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

const Navigation=styled.nav`
    display:flex;
    flex-direction:row;
    margin-bottom:10px;
    padding-top:10px;
    border-bottom:2px solid #f4f4f4;
    justify-content:center;
    align-items:center;
    position: -webkit-sticky;
    position:sticky;
    align-self: flex-start;
    z-index:20;
    top: 0;
    background:#fff;
    @media(min-width:767px){
        display:block;
        width:20%;
        height:100%;
        max-height:1000px;
        background:#fff;
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:20;
        margin-right:25px;
        border-right: 2px solid #f4f4f4;
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
    display: ${props=>props.className==='logout'?'none':'inline-block'};
    margin-bottom:15px;
    @media(max-width:767px){
       display:inline-block;
       margin-bottom:0px;
       margin-left:10px;
    }
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
        width:80%;
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

const User =styled.div`
    display:block;
    width:100%;
    margin-top:30px;
    @media(max-width:767px){
        margin:0;
    }
`

const AppLayout = ({children})=>{
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
    
    return(
        <Wrapper>
            <Header>
             <TwitterOutlined /> <Link href="/"><a>HOME</a></Link>
            </Header>
            <div>
                <Navigation>
                        <MenuWrapper mode="horizontal">
                            <MenuItem key="home">
                                <Link href="/"><a>트위터</a></Link>
                            </MenuItem>
                            <MenuItem key="profile">
                                <Link href="/profile"><a>프로필</a></Link>
                            </MenuItem>
                            {isLoggedIn ?
                            <MenuItem key="logout" className="logout">
                                <LogoutButton/>
                            </MenuItem> : 
                            <MenuItem key="signup">
                                <Link href="/signUp"><a>회원가입</a></Link>
                            </MenuItem>}
                            <MenuItem>
                                <User>
                                 {isLoggedIn ? <UserProfile/> : 
                                <Link href="/login"><a>로그인</a></Link>
                                }
                                </User>
                            </MenuItem>
                        </MenuWrapper>
                </Navigation>
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