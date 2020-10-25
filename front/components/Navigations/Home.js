import React from 'react';
import Link from 'next/link';
import {MenuItemWrapper, Detail } from  './style';
import { Description } from '../AppLayout/style';
import MenuIcon from './MenuIcon';

const Home=()=>{
    return(
        <MenuItemWrapper>
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