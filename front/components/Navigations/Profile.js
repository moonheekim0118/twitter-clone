import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {MenuItemWrapper, Detail } from  './style';
import { Description } from '../AppLayout/style';
import MenuIcon from './MenuIcon';


const Profile=()=>{
    const Router=useRouter();
    const pageName= Router.pathname;
    const id = Router.query.id;

    const me = useSelector(state=>state.user.me?.id);
    return(
        <MenuItemWrapper visit={pageName==='/user/[id]'&& +id===me && 'true'}>
            <MenuIcon where="Profile" id={me}/>
            <Detail>
                <Link href={`/user/${me}`}>
                    <Description>Profile</Description>
                </Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default Profile; 