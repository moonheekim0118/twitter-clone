import React , { useRef, useCallback } from 'react';
import Avatar from '../../Avatar';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import { useSelector , useDispatch } from 'react-redux';
import { updateMyInfoAction,uploadProfilePicAction } from '../../../actions/user';
import { updateUserInfoAction } from '../../../actions/commonUser';
import { Wrapper,Title,ContentWrapper,ProfilePicWrapper, Overaly, Header } from './style';
import { InputWrapper,  TextLength, Label , TextInput } from '../style';
import { RectButton } from '../../globalStyle';
import { CloseLeftIcon , EditIcon } from '../../Icons';

const EditProfileForm=({onClose})=>{
    const dispatch = useDispatch();
    const imageInput = useRef();
    const { me , profilePicPath } = useSelector(state=>state.user);
    const [nickname, onChangeNickname]=useInput(me.nickname);

    // 프로필 이미지 수정 폼 , 닉네임 수정 

    const onSubmitUpdate = useCallback(()=>{ // submit 
        dispatch(updateMyInfoAction({nickname:nickname, image:profilePicPath}));
        dispatch(updateUserInfoAction({nickname:nickname, image:profilePicPath}));
        onClose();
    },[nickname,profilePicPath]);

    // 이미지 업로드 
    const onChangeImages=useCallback((e)=>{
        if(e.target.files.length>1){ // 이미지 개수가 1개 이상일 경우 
        }
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f)=>{
            imageFormData.append('image',f);
        });
        dispatch(uploadProfilePicAction(imageFormData));
     },[]);
 
     // 이미지 업로드 버튼 클릭
     const onClickImageUpload=useCallback(()=>{
         imageInput.current.click();
     },[imageInput.current]);
     
     return(
         <Wrapper>  
            <Header>
                <CloseLeftIcon onClick={onClose}/>
                <Title>Edit Profile</Title>
                <RectButton onClick={onSubmitUpdate} disabled={nickname.length > 5}>저장</RectButton>
            </Header>
            <ContentWrapper>
                <ProfilePicWrapper>
                    <Overaly/>
                    <input type="file" multiple name="image" hidden ref={imageInput} onChange={onChangeImages}/>
                    <EditIcon  onClick={onClickImageUpload}/>
                    <Avatar user={me} size={80} isLink={false} isMyPic={true}/>
                </ProfilePicWrapper>
                <InputWrapper>
                    <TextInput
                    name="user-nickname"
                    value={nickname}
                    onChange={onChangeNickname}
                    placeholder=" "
                    />
                    <Label htmlFor="user-nickname">닉네임</Label>
                    <TextLength limit={nickname.length >5}>{nickname.length}/5</TextLength>
                </InputWrapper>
            </ContentWrapper>
         </Wrapper>
     )
     
};

EditProfileForm.propTypes={
    onClose: PropTypes.func.isRequired,
}


export default EditProfileForm;