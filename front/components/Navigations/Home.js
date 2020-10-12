import React from 'react';
import Link from 'next/link';
import {HomeOutlined} from '@ant-design/icons';
import {MenuItemWrapper, Detail, Description} from  '../Styles';

const Home=()=>{
    return(
        <MenuItemWrapper>
            <HomeOutlined style={{ fontSize: '1.5rem'}}/>
            <Detail>
                <Link  href="/">
                    <Description>Home</Description>
                </Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default Home; 