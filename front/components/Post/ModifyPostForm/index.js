import React, { useCallback } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { modifyPostAction} from '../../../actions/post';
import { hideModifyModalAction } from '../../../actions/ui';
import useInput from '../../../hooks/useInput';
import { FormWrapper,FormMeta,TextArea,TweetButton,Buttons,TextLength } from '../PostForm/style';
import { SideWrapper } from '../PostCard/style';
import { LoadingIcon } from '../../Icons';
import { ButtonWrapper } from '../style';

const ModifyPostPorm =()=>{

    const {modifyFormerContent,modifyPostId}= useSelector(state=>state.ui);
    const modifyPostloading = useSelector(state=>state.post.modifyPostloading);
    const dispatch = useDispatch();
    const [text, onChangeText]=useInput(modifyFormerContent);

    const onSubmit=useCallback((e)=>{
        e.preventDefault();
        dispatch(modifyPostAction( { postId:modifyPostId, content:text}));
        dispatch(hideModifyModalAction());
    },[text])

    return(
        <FormWrapper noborder="true" encType="multipart/form-data" onSubmit={onSubmit}>
            <SideWrapper>

            </SideWrapper>
            <FormMeta>
                <TextArea
                name="content"
                onChange={onChangeText}
                value={text}
                minRows={1}
                type="text"
                placeholder="What is happening?"
                />
                <Buttons>
                    {text.length>0 && <TextLength limit={text.length>=140}>{140-text.length}</TextLength>}
                    <ButtonWrapper>
                         {modifyPostloading ? <LoadingIcon/> : <TweetButton type="primary" htmlType="submit" disabled={text.length===0 || text===modifyFormerContent}>수정</TweetButton>}
                    </ButtonWrapper>
                </Buttons>
            </FormMeta>
        </FormWrapper>
    )
}


export default ModifyPostPorm;