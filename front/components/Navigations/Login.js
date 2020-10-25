import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {MenuItemWrapper, Detail } from  './style';
import { Description } from '../AppLayout/style';
import MenuIcon from './MenuIcon';

const LogIn=()=>{
    const Router=useRouter();
    const pageName= Router.pathname;

    return(
        <MenuItemWrapper visit={pageName==='/login'&&'true'}>
            <MenuIcon where="Login"/>
            <Detail>
                <Link  href="/login">
                    <Description>LogIn</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default LogIn; 