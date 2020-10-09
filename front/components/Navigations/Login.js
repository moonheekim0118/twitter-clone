import React from 'react';
import Link from 'next/link';
import {KeyOutlined} from '@ant-design/icons';
import {MenuItemWrapper, Detail, Description} from  '../Styles';

const LogIn=()=>{
    return(
        <MenuItemWrapper>
            <KeyOutlined style={{ fontSize: '1.5rem'}}/>
            <Detail>
                <Link  href="/login"><Description>LogIn</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default LogIn; 