import React, { useCallback } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { modifyPostAction} from '../../../actions/post';
import useInput from '../../../hooks/useInput';
import PropTypes from 'prop-types';
import Button from '../../../atom/Button';
import { FormWrapper,FormMeta,TextArea,Buttons,TextLength } from '../PostForm/style';
import { SideWrapper } from '../PostCard/style';
import { LoadingIcon } from '../../Icons';
import { ButtonWrapper } from '../style';

const ModifyPostPorm =({postId, postContent, onClose})=>{

    const modifyPostloading = useSelector(state=>state.post.modifyPostloading);
    const dispatch = useDispatch();
    const [text, onChangeText]=useInput(postContent);

    const onSubmit=useCallback((e)=>{
        e.preventDefault();
        dispatch(modifyPostAction( { postId:postId, content:text}));
        onClose();
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
                        <Button 
                        onClick={onSubmit}
                        disabled={text.length===0 || text.length>=140 || text === postContent }
                        style={{back:'full', radius:'24px', weight:'bold'}}
                        >
                            {modifyPostloading ? <LoadingIcon/> : '수정' }
                        </Button>
                    </ButtonWrapper>
                </Buttons>
            </FormMeta>
        </FormWrapper>
    )
}

ModifyPostPorm.propTypes={
    postId: PropTypes.number.isRequired,
    postContent : PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default ModifyPostPorm;