import React from 'react';
import Home from './Navigations/Home';
import Profile from './Navigations/Profile';
import UserProfile from './Navigations/UserProfile';
import SignUp from './Navigations/SignUp';
import LogIn from './Navigations/Login';
import styled from 'styled-components';
import LogoutButton from './LogoutButton';

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
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-end;
        width:10%;
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
    }

    @media(min-width:1279px){
        width:20%;
    }
`;


const MenuWrapper=styled.div`
    display:flex;
    flex-direction:column;
    padding:25px;
    margin:0;
    @media(max-width:767px){
        flex-direction:row;
        padding:0px;
        margin-bottom:10px;
    }
`;


const MenuItem=styled.div`
    display:none;
    margin-bottom:15px;
    @media(max-width:767px){
       display:inline-block;
       margin-bottom:0px;
       margin-left:10px;
    }
`;

const User =styled.div`
    display:block;
    width:100%;
    margin-top:30px;
    @media(max-width:767px){
        margin:0;
    }
`

const Menu =({isLoggedIn})=>{
    return(
        <Navigation>
            <MenuWrapper>
                <Home/>
                <Profile/>
                {isLoggedIn ?
                <MenuItem key="logout" className="logout">
                    <LogoutButton/>
                </MenuItem> : 
                 <SignUp/>}
                {isLoggedIn ? <UserProfile/> : <LogIn/> }
            </MenuWrapper>
        </Navigation>
    )
};

export default Menu;