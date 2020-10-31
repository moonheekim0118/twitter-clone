import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Wrapper,Menu,Atag } from './style';

const Header =({ userId, theme , where})=>{
    const First = {};
    const Second ={};
    const href='/user/[id]';
    const as =`/user/${userId}`;
    if(theme === "Tweet"){
        First.name="Tweets";
        First.path='';
        Second.name="Likes";
        Second.path='/likes';
    }
    else{
        First.name="Followings";
        First.path='/followings';
        Second.name="Followers";
        Second.path='/followers';
    }
    
    return(
        <Wrapper>
            <Menu clicked={First.name===where}>
                <Link href={href+First.path} as={as+First.path}>
                    <Atag clicked={First.name===where}>
                        {First.name}
                    </Atag>
                </Link>
            </Menu>
            <Menu clicked={Second.name===where}>
                <Link href={href+Second.path} as={as+Second.path}>
                    <Atag clicked={Second.name===where}>
                        {Second.name}
                    </Atag>
                </Link>
            </Menu>
        </Wrapper>
    )
}

Header.propTypes={
    userId:PropTypes.string.isRequired,
    theme:PropTypes.string.isRequired,
    where:PropTypes.string.isRequired,
};

export default Header;