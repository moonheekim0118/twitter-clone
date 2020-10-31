import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const Wrapper = styled.div`
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
    font-size:${(props)=>`${props.size}px`};
    width:100%;
    height:100%;
    border-radius:100%;
    oveflow:hidden;

    background-color:${({theme})=>theme.colors.gray_1};
    color:${({theme})=>theme.colors.white};
    font-size:${({theme})=>theme.fontSizes.lg};
    
`;

const Avatar =({user, size, isLink, isMyPic, onClick})=>{
    const profilePicPath =useSelector(state=>state.user.profilePicPath);

    if(isLink && !isMyPic){
        return(
            <Wrapper size={size} onClick={onClick}>
                <Link href="/user/[id]" as={`/user/${user.id}`}>
                    <a>
                        {user.profilepic ? 
                            (<Image src={`http://localhost:3065/${user.profilepic}`}/>) : 
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
                    (<Image src={`http://localhost:3065/${profilePicPath}`}/>) : 
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
            (<Image src={`http://localhost:3065/${user.profilepic}`}/>) : 
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

export default Avatar;