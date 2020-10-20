import React, { useCallback } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { modifyPostAction} from '../../../actions/post';
import { hideModifyModalAction } from '../../../actions/ui';
import useInput from '../../../hooks/useInput';
import ImagePath from '../../Image/ImagePath';
import { Button }from 'antd';
import { PostFormWrapper,TextArea,ButtonWrapper } from '../style';

const ModifyPostPorm =()=>{

    const {modifyFormerContent,modifyPostId}= useSelector(state=>state.ui);
    const modifyPostloading = useSelector(state=>state.post.modifyPostloading);
    const dispatch = useDispatch();
    const [text, onChangeText]=useInput(modifyFormerContent);

    const onSubmit=useCallback(()=>{
        dispatch(modifyPostAction( { postId:modifyPostId, content:text}));
        dispatch(hideModifyModalAction());
    },[text])

    return(
        <PostFormWrapper encType="multipart/form-data" onFinish={onSubmit}>
            <TextArea value={text}
             onChange={onChangeText}
             maxLength={150}
             rows={3}
            />
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={modifyPostloading} disabled={text.length===0 || text===modifyFormerContent}>수정</Button>
            </ButtonWrapper>
            <ImagePath/>
        </PostFormWrapper>
    )
}


export default ModifyPostPorm;