import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {MenuItemWrapper, Detail } from  './style';
import { Description } from '../AppLayout/style';
import MenuIcon from './MenuIcon';

const Home=()=>{
    const Router=useRouter();
    const pageName= Router.pathname;
    
    return(
        <MenuItemWrapper visit={pageName==='/'&&'true'}>
            <MenuIcon where="home"/>
            <Detail>
                <Link  href="/">
                    <Description>Home</Description>
                </Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default Home; 