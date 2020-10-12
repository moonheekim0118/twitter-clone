import React from 'react';
import Link from 'next/link';
import {MenuItemWrapper, Detail, Description, HomeIcon} from  '../Styles';

const Home=()=>{
    return(
        <MenuItemWrapper>
            <Link href="/">
                <a><HomeIcon/></a>
            </Link>
            <Detail>
                <Link  href="/">
                    <Description>Home</Description>
                </Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default Home; 