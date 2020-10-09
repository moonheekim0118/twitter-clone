import React from 'react';
import Link from 'next/link';
import {UserOutlined} from '@ant-design/icons';
import {MenuItemWrapper, Detail, Description} from  '../Styles';

const Profile=()=>{
    return(
        <MenuItemWrapper>
            <UserOutlined style={{ fontSize: '1.5rem'}}/>
            <Detail>
                <Link  href="/profile"><Description>Profile</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default Profile; 