import React , {useState,useCallback}from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {MenuUnfoldOutlined} from '@ant-design/icons';

const MenuToggle=styled(MenuUnfoldOutlined)`    
    display:block;
    position:absolute;
    left:10px;
    top:15px;
    @media(min-width:767px){
        display:none;
    }
`

const LayoutWrapper = styled.div`
    display:flex;
    justify-contents:center;
    @media(max-width:767px){
        flex-direction:column;
        justify-contents:center;
        align-items:center
    }
`;

const SearchInput = styled(Input.Search)`
    vertical-align:middle;
    text-align:center;
    margin:20px;
    width:40%;

    @media(max-width:768px){
        width:70%;
    }
`

const Navigation=styled.nav`
    display:none;


    @media(min-width:767px){
        width:30%;
        height:100%;
        max-height:1000px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        z-index:2
    }
`

const MenuWrapper=styled.div`
    display:flex;
    flex-direction:column;
    padding:25px;
`

const MenuItem=styled.div`
    display:inline;
`

const HeaderWrapper=styled.header`
    text-align:center;
    height:50px;
`

const MainWrapper=styled.header`
    width:40%;
    @media(max-width:768px){
        width:70%;
    }

`

const AppLayout = ({children})=>{
    const [showNav, setShowNav]=useState(false);
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
    const onClickToggleBtn=useCallback(()=>{
        setShowNav((prev)=>!prev);
    })
    return(
        <div>
            <HeaderWrapper>
                 <SearchInput enterButton/>
            </HeaderWrapper>
            <MenuToggle onClick={onClickToggleBtn}/>
            <LayoutWrapper>
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
                        </MenuWrapper>
                    {isLoggedIn ? <UserProfile/> : <LoginForm />}
                </Navigation>
                <MainWrapper>{children}</MainWrapper>
                <a href="https://mooneedev.netlify.app/" target="_blank" rel="noreferrer noopener">Mady by moonee</a>
            </LayoutWrapper>
        </div>
    )
}

AppLayout.propTypes={
    children : PropTypes.node.isRequired,
}

export default AppLayout;