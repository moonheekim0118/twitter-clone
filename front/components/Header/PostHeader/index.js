import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Wrapper,Menu,Atag } from '../style';

const ProfileMenu =({userId,pageName})=>{
    

    return(
        <Wrapper>
            <Menu  clicked={pageName==="Tweet"}>
                <Link href="/user/[id]" as={`/user/${userId}`}>
                    <Atag clicked={pageName==="Tweet"}> Tweets </Atag>
                </Link>
            </Menu>

            <Menu  clicked={pageName==="Likes"}>
                <Link href="/user/[id]/likes" as={`/user/${userId}/likes`}>
                    <Atag clicked={pageName==="Likes"}>Liked Tweets</Atag>
                </Link>
            </Menu>
        </Wrapper>
    );
};

ProfileMenu.propTypes={
    userId:PropTypes.string.isRequired,
    pageName:PropTypes.string.isRequired,
};
export default ProfileMenu;
