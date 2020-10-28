import React ,{ useCallback } from 'react';
import PropTypes from 'prop-types';
import { removeCommentAction } from '../../../actions/post';
import Avatar from '../../Avatar';
import { useSelector  , useDispatch } from 'react-redux';
import { AvatarWrapper } from '../../globalStyle';
import { Wrapper, FirstWrapper, SecondWrapper,NicknameWrapper,ButtonWrapper } from './style';
import { RedCloseIcon } from '../../Icons';
// Comment
const CommentCard = ({postId,comment}) =>{
    const dispatch = useDispatch();
    const me = useSelector(state=>state.user.me?.id);
    
    const onClickRemove=useCallback(()=>{
        if(!me || comment.User.id!==me){
            return;
        }
        dispatch(removeCommentAction({postId,commentId:comment.id}));
    },[]);

    return(
        <Wrapper>
            <FirstWrapper>
                <AvatarWrapper size={30}>
                    <Avatar imageSrc={comment.User.profilepic || ""}
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
            {me && comment.User.id === me &&
                <ButtonWrapper>
                    <RedCloseIcon onClick={onClickRemove}>삭제</RedCloseIcon>
                </ButtonWrapper> }
        </Wrapper>
    );

};

CommentCard.propTypes = {
    postId:PropTypes.number.isRequired,
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