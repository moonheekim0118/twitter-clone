import React , { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { followRequestAction , unfollowRequestAction} from '../../../actions/user';
import { showModifyModalAction } from '../../../actions/ui';
import { removePostAction } from '../../../actions/post';
import { Wrapper, ItemWrapper , Item, Container } from './style';


const Tooltip=({post, children})=>{

    const dispatch = useDispatch();
    const me  = useSelector(state=>state.user.me);
    const isFollowing = me&&me.Followings.find((v)=>v.id===post.User.id);
        
    const onClickFollow=useCallback(()=>{
        if(isFollowing){ // 언팔로우 
            dispatch(unfollowRequestAction(post.User.id));
        }
        else{ // 팔로우 
            dispatch(followRequestAction(post.User.id));
        }
    },[isFollowing]);

    
    const onClickRemove=useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(removePostAction({id:post.id}));
    },[]);

    const onClickModify=useCallback(()=>{
        if(!me){
            return;
        }
        dispatch(showModifyModalAction({ postId:post.id, postContent:post.content}));
    },[post.content]);


    if(me.id === post.User.id){ // 내 포스트일경우 수정 / 삭제 가능 
        return(
            <Container>
                <Wrapper className="tooltip">
                    <ItemWrapper onClick={onClickModify}>
                        <Item>포스트 수정하기</Item>
                    </ItemWrapper>
                    <ItemWrapper onClick={onClickRemove}>
                        <Item>포스트 삭제하기</Item>
                    </ItemWrapper>
                </Wrapper>
                {children}
            </Container>
        );
    }
    
    return( // 남의 포스트일경우 팔로우 / 언팔로우 만 가능 
        <Container>
            <Wrapper className="tooltip">
                <ItemWrapper onClick={onClickFollow}>
                    <Item>{isFollowing ? `${post.User.nickname}님 언팔로우` : `${post.User.nickname}님 팔로우`}</Item>
                </ItemWrapper>
            </Wrapper>
            {children}
        </Container>
    );
};

Tooltip.propTypes = {
    post:PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.shape({
            id:PropTypes.number,
            nickname:PropTypes.string
        }),
        content:PropTypes.string,
        createdAt:PropTypes.string,
        Comments:PropTypes.arrayOf(PropTypes.object),
        Images:PropTypes.arrayOf(PropTypes.object),
        Likers:PropTypes.arrayOf(PropTypes.object)

    }).isRequired,
}


export default Tooltip;