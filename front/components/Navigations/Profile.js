import React from 'react';
import Link from 'next/link';
import {MenuItemWrapper, Detail, Description, ProfileIcon} from  '../Styles';

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