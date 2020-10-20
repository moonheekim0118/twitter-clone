import React from 'react';
import Link from 'next/link';
import {MenuItemWrapper, Detail,LoginIcon} from  './style';
import { Description } from '../AppLayout/style';

const LogIn=()=>{
    return(
        <MenuItemWrapper>
            <Link href="/login">
                <a><LoginIcon/></a>
            </Link>
            <Detail>
                <Link  href="/login"><Description>LogIn</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default LogIn; 