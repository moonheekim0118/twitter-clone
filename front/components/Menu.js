import React from 'react';
import Home from './Navigations/Home';
import Profile from './Navigations/Profile';
import UserProfile from './Navigations/UserProfile';
import SignUp from './Navigations/SignUp';
import LogIn from './Navigations/Login';
import TweetButton from './Navigations/TweetButton';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const Navigation=styled.nav`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-end;
    width:20%;
    height:100%;
    max-height:100%;
    background:#fff;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:20;
    margin-right:10px;
    border-right: 2px solid #f4f4f4;
    
    @media screen and (max-width:767px){
        width:100% !important;
        flex-direction:row;
        margin-bottom:10px;
        padding-top:10px;
        border-bottom:2px solid #f4f4f4;
        justify-content:center;
        align-items:center;
        position: -webkit-sticky;
        position:sticky;
        z-index:20;
        top: 0;
        background:#fff;
    }

    @media(max-width:1279px){
        width:10%;
    }
`;


const MenuWrapper=styled.div`
    display:flex;
    flex-direction:column;
    padding:25px;
    margin:0;
    @media screen and (max-width:767px){
        width:70%;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;
        padding:0px;
    }
`;

const LinkList = styled.div`
    color: ${(props)=>props.color};
`;

const MenuItem=styled.div`
    display:none;
    margin-bottom:15px;
    @media screen and (max-width:767px){
       display:inline-block;
       margin-bottom:0px;
       margin-left:10px;
    }
`;

const Menu =({isLoggedIn})=>{
    const router = useRouter();
    return(
        <Navigation>
            <MenuWrapper>
                <LinkList color={router.pathname==='/' ? '#0099cc' : 'black'}>
                     <Home/>
                </LinkList>
                <LinkList color={router.pathname==='/profile' ? '#0099cc' : 'black'}>
                     <Profile/>
                </LinkList>
                {!isLoggedIn && <LinkList color={router.pathname==='/signUp' ? '#0099cc' : 'black'}><SignUp/></LinkList>}
                {isLoggedIn && <TweetButton/>}
                {isLoggedIn ? <UserProfile/> : <LinkList color={router.pathname==='/login' ? '#0099cc' : 'black'}><LogIn/></LinkList> }
                {isLoggedIn&&
                <MenuItem>
                    <LogoutButton/>
                </MenuItem> }
            </MenuWrapper>
        </Navigation>
    )
};

Menu.propTypes = {
    isLoggedIn:PropTypes.bool.isRequired,
}


export default Menu;