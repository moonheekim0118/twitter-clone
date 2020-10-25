import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {MenuItemWrapper, Detail } from  './style';
import { Description } from '../AppLayout/style';
import MenuIcon from './MenuIcon';


const Profile=()=>{
    const me = useSelector(state=>state.user.me?.id);
    return(
        <MenuItemWrapper>
            <MenuIcon where="Profile" id={me}/>
            <Detail>
                <Link href={`/user/${me}`}><Description>Profile</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default Profile; 