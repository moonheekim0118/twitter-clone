import React from 'react';
import Link from 'next/link';
import {MenuItemWrapper, Detail } from  './style';
import { Description } from '../AppLayout/style';
import MenuIcon from './MenuIcon';


const SignUp=()=>{
    return(
        <MenuItemWrapper>
            <MenuIcon where="Signup"/>
            <Detail>
                <Link  href="/signUp"><Description>SignUp</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default SignUp; 