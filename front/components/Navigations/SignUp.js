import React from 'react';
import Link from 'next/link';
import {TeamOutlined} from '@ant-design/icons';
import {MenuItemWrapper, Detail, Description} from  '../Styles';

const SignUp=()=>{
    return(
        <MenuItemWrapper>
            <TeamOutlined style={{ fontSize: '1.5rem'}}/>
            <Detail>
                <Link  href="/signUp"><Description>SignUp</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default SignUp; 