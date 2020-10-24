import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {MenuItemWrapper, Detail, ProfileIcon} from  './style';
import { Description } from '../AppLayout/style';

const Profile=()=>{
    const me = useSelector(state=>state.user.me?.id);
    return(
        <MenuItemWrapper>
            <Link href={`/user/${me}`}>
                <a><ProfileIcon/></a>
            </Link>
            <Detail>
                <Link href={`/user/${me}`}><Description>Profile</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default Profile; 