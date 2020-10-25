import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar';
import { AvatarWrapper } from '../../globalStyle';
import { Wrapper, FirstWrapper, SecondWrapper,NicknameWrapper } from './style';
// Comment
const CommentCard = ({comment}) =>{
    return(
        <Wrapper>
            <FirstWrapper>
                <AvatarWrapper size={20}>
                    <Avatar imageSrc={comment.User.profilepic}
                    userId={comment.User.id}
                    userNickname={comment.User.nickname}
                    isLink={true}
                    isMyPic={false}/>
                </AvatarWrapper>
            </FirstWrapper>
            <SecondWrapper>
                <NicknameWrapper>{comment.User.nickname}</NicknameWrapper>
                <span> {comment.content}</span>
            </SecondWrapper>
            
        </Wrapper>
    );

};

CommentCard.propTypes = {
    comment:PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.shape({
            id:PropTypes.number,
            nickname:PropTypes.string,
            profilepic:PropTypes.string,
        }),
        content:PropTypes.string,
    }).isRequired,
}


export default CommentCard;