import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import LogoutButton from '../User/LogoutButton';
import Home from '../Navigations/Home';
import Profile from '../Navigations/Profile';
import UserProfile from '../Navigations/UserProfile';
import SignUp from '../Navigations/SignUp';
import LogIn from '../Navigations/Login';
import TweetButton from '../Navigations/TweetButton';

const Navigation=styled.nav`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-end;
    width:20%;
    height:100%;
    max-height:100%;
    background:${({theme})=>theme.colors.white};
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:20;
    margin-right:${({theme})=>theme.margins.base};
    border-right: 2px solid ${({theme})=>theme.colors.gray_3};
    
    @media ${({theme})=>theme.device.tablet}{
        width:100% !important;
        flex-direction:row;
        margin-bottom:10px;
        padding-top:${({theme})=>theme.paddings.base};
        border-bottom:2px solid ${({theme})=>theme.colors.gray_3};
        justify-content:center;
        align-items:center;
        position: -webkit-sticky;
        position:sticky;
        z-index:20;
        top: 0;
        background:${({theme})=>theme.colors.white};
    }

    @media  ${({theme})=>theme.device.pcS}{
        width:10%;
    }
`;


const MenuWrapper=styled.div`
    display:flex;
    flex-direction:column;
    padding:25px;
    margin:0;
    @media ${({theme})=>theme.device.tablet}{
        width:70%;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;
        padding:0px;
    }
`;

const MenuItem=styled.div`
    display:none;
    margin-bottom:${({theme})=>theme.margins.xl};

    @media ${({theme})=>theme.device.tablet}{
       display:inline-block;
       margin-bottom:0px;
       margin-left:${({theme})=>theme.margins.base};
    }
`;

const Menu =({isLoggedIn})=>{
    const router = useRouter();
    return(
        <Navigation>
            <MenuWrapper>
                <div>
                     <Home/>
                </div>
                <div>
                     <Profile/>
                </div>
                {!isLoggedIn && <div><SignUp/></div>}
                {isLoggedIn && <TweetButton/>}
                {isLoggedIn ? <UserProfile/> : <div><LogIn/></div> }
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