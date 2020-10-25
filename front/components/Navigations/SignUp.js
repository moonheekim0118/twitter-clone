import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {MenuItemWrapper, Detail } from  './style';
import { Description } from '../AppLayout/style';
import MenuIcon from './MenuIcon';


const SignUp=()=>{
    const Router=useRouter();
    const pageName= Router.pathname;

    return(
        <MenuItemWrapper visit={pageName==='/signup'&&'true'}>
            <MenuIcon where="Signup"/>
            <Detail>
                <Link  href="/signUp">
                    <Description>SignUp</Description>
                </Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default SignUp; 