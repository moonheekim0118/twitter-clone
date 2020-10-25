import React from 'react';
import Link from 'next/link';
import {MenuItemWrapper, Detail } from  './style';
import { Description } from '../AppLayout/style';
import MenuIcon from './MenuIcon';

const LogIn=()=>{
    return(
        <MenuItemWrapper>
            <MenuIcon where="Login"/>
            <Detail>
                <Link  href="/login"><Description>LogIn</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default LogIn; 