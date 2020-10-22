import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Image = styled.img`
    width:36px;
    height:36px;
    border-radius:100%;
    oveflow:hidden;
`;


const NicknameWrapper=styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align:center;

    width:52px;
    height:52px;
    border-radius:100%;
    oveflow:hidden;
    background-color:${({theme})=>theme.colors.gray_1};
    color:${({theme})=>theme.colors.white};
    font-size:${({theme})=>theme.fontSizes.lg};
    
`;

const Avatar =({imageSrc, userId, userNickname})=>{
    return(
        <Link href={`/user/${userId}`}>
            <a>
                {imageSrc ? (
                            <Image src={imageSrc}/>
                        ) : (
                            <NicknameWrapper>
                                {userNickname[0]} 
                            </NicknameWrapper>
                )}
            </a>
        </Link>
    )
};


Avatar.propTypes = {
    imageSrc:PropTypes.string.isRequired,
    userId:PropTypes.string.isRequired,
}

export default Avatar;