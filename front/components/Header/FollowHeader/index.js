import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Wrapper,Menu,Atag } from '../style';

const FollowHeader =({userId,pageName})=>{

    return(
        <Wrapper>
             <Menu clicked={pageName==="Followings"}>
                <Link href="/user/[id]/followings" as={`/user/${userId}/followings`}>
                    <Atag clicked={pageName==="Followings"}> Followings </Atag>
                </Link>
            </Menu>
            <Menu  clicked={pageName==="Followers"}>
                <Link href="/user/[id]/followers" as={`/user/${userId}/followers`}>
                    <Atag clicked={pageName==="Followers"}>Followers</Atag>
                </Link>
            </Menu>
        </Wrapper>

    );
};

FollowHeader.propTypes={
    userId:PropTypes.string.isRequired,
    pageName:PropTypes.string.isRequired,
};
export default FollowHeader;
