import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Image = styled.img`
    width:100%;
    height:100%;
    border-radius:100%;
    oveflow:hidden;
`;


const NicknameWrapper=styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align:center;

    width:100%;
    height:100%;
    border-radius:100%;
    oveflow:hidden;

    background-color:${({theme})=>theme.colors.gray_1};
    color:${({theme})=>theme.colors.white};
    font-size:${({theme})=>theme.fontSizes.lg};
    
`;

const Avatar =({imageSrc, userId, userNickname, isLink, isMyPic})=>{
    const profilePicPath =useSelector(state=>state.user.profilePicPath);

    if(isLink && isMyPic){
        return(
            <Link href="/user/[id]" as={`/user/${userId}`}>
                <a>
                    {imageSrc ? 
                        (<Image src={`${profilePicPath}`}/>) : 
                        (<NicknameWrapper>
                            {userNickname[0]} 
                         </NicknameWrapper>)
                    }
                </a>
            </Link>
        )
    }
    if(isLink && !isMyPic){
        return(
            <Link href="/user/[id]" as={`/user/${userId}`}>
                <a>
                    {imageSrc ? 
                        (<Image src={`${imageSrc}`}/>) : 
                        (<NicknameWrapper>
                            {userNickname[0]} 
                         </NicknameWrapper>)
                    }
                </a>
            </Link>
        )
    }

   if(!isLink && isMyPic){
        return(
            <>
                {profilePicPath ? 
                    (<Image src={`${profilePicPath}`}/>) : 
                    ( <NicknameWrapper>
                        {userNickname[0]} 
                    </NicknameWrapper>)
                }
            </>
        )
   }

   return(
    <>
        {imageSrc ? 
            (<Image src={`${imageSrc}`}/>) : 
            ( <NicknameWrapper>
                {userNickname[0]} 
              </NicknameWrapper>)
        }
    </>
)
};


Avatar.defaultProps={
    imageSrc:"",
};


Avatar.propTypes = {
    imageSrc:PropTypes.string.isRequired,
    userId:PropTypes.number.isRequired,
    userNickname:PropTypes.string.isRequired,
    isLink:PropTypes.bool.isRequired,
    isMyPic:PropTypes.bool.isRequired,
    
}

export default Avatar;