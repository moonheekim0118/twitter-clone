import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Avatar =({user, size, isLink, isMyPic, onClick})=>{
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
            <Wrapper size={size} onClick={onClick}>
                <Link href="/user/[id]" as={`/user/${user.id}`}>
                    <a>
                        {user.profilepic ? 
                            (<Image src={`${user.profilepic}`}/>) : 
                            (<NicknameWrapper size={size}>
                                {user.nickname[0]} 
                            </NicknameWrapper>)
                        }
                    </a>
                </Link>
            </Wrapper>
        )
    }

   if(!isLink && isMyPic){
        return(
            <Wrapper size={size} onClick={onClick}>
                {profilePicPath ? 
                    (<Image src={`${profilePicPath}`}/>) : 
                    ( <NicknameWrapper size={size}>
                        {user.nickname[0]} 
                    </NicknameWrapper>)
                }
            </Wrapper>
        )
   }

   return(
    <Wrapper size={size} onClick={onClick}>
        {user.profilepic ? 
            (<Image src={`${user.profilepic}`}/>) : 
            ( <NicknameWrapper size={size}>
                {user.nickname[0]} 
              </NicknameWrapper>)
        }
    </Wrapper>
    )
};


Avatar.defaultProps={
    imageSrc:"",
    size:24,
    onClick:()=>{},
};


Avatar.propTypes = {
    user:PropTypes.shape({
        id:PropTypes.number,
        nickname:PropTypes.string,
        profilepic:PropTypes.string,
    }).isRequired,
    size:PropTypes.number.isRequired,
    isLink:PropTypes.bool.isRequired,
    isMyPic:PropTypes.bool.isRequired,
    onClick:PropTypes.func.isRequired,
}

const Wrapper = styled.div`
    width:${(props)=>`${props.size}px`};
    height:${(props)=>`${props.size}px`};
    cursor:pointer;
`;

const Image = styled.img`
    width:100%;
    height:100%;
    border-radius:100%;
    oveflow:hidden;
    object-fit:fill;
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
    font-size:${(props)=>`${props.size-10}px`};
    color:${({theme})=>theme.colors.white};    
    background-color:${({theme})=>theme.colors.gray_1};
`;


export default Avatar;