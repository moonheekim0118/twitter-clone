import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { MenuItemWrapper,Detail } from  './style';
import { Description } from '../AppLayout/style';
import { HomeIcon, LoginIcon, ProfileIcon, SignupIcon } from '../Icons';

const ICONS={
    'Home':HomeIcon,
    'Login':LoginIcon,
    'Profile':ProfileIcon,
    'Signup':SignupIcon,
};

const Navigator=({where, href, as})=>{
    const Router=useRouter();
    const pageName= Router.pathname;
    const SpecificIcon = ICONS[where];

    return(
        <MenuItemWrapper visit={pageName===href &&'true'}>
            <Link href={as}><a><SpecificIcon/></a></Link>
            <Detail>
                <Link href={as}>
                    <Description>{where}</Description>
                </Link>
            </Detail>
        </MenuItemWrapper>
    );

}

Navigator.propTypes = {
    where:PropTypes.string.isRequired,
    href:PropTypes.string.isRequired,
    as:PropTypes.string.isRequired,
}

export default Navigator; 