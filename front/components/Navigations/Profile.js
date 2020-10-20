import React from 'react';
import Link from 'next/link';
import {MenuItemWrapper, Detail, ProfileIcon} from  './style';
import { Description } from '../AppLayout/style';

const Profile=()=>{
    return(
        <MenuItemWrapper>
            <Link href="/profile">
                <a><ProfileIcon/></a>
            </Link>
            <Detail>
                <Link  href="/profile"><Description>Profile</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default Profile; 