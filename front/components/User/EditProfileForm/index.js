import React, { useRef, useCallback } from 'react';
import Avatar from '../../Avatar';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateMyInfoAction,
    uploadProfilePicAction,
} from '../../../actions/user';
import { updateUserInfoAction } from '../../../actions/commonUser';
import Button from '../../../atom/Button';
import {
    Wrapper,
    Title,
    ContentWrapper,
    ProfilePicWrapper,
    Overaly,
    Header,
} from './style';
import { InputWrapper, TextLength, Label, TextInput } from '../style';
import { CloseLeftIcon, EditIcon } from '../../Icons';

const EditProfileForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const imageInput = useRef();
    const { me, profilePicPath } = useSelector((state) => state.user);
    const [nickname, onChangeNickname] = useInput(me.nickname);

    // 프로필 이미지 수정 폼 , 닉네임 수정

    const onSubmitUpdate = useCallback(() => {
        // submit
        dispatch(
            updateMyInfoAction({ nickname: nickname, image: profilePicPath })
        );
        dispatch(
            updateUserInfoAction({ nickname: nickname, image: profilePicPath })
        );
        onClose();
    }, [nickname, profilePicPath]);

    // 이미지 업로드
    const onChangeImages = useCallback((e) => {
        const imageFormData = new FormData();
        imageFormData.append('image', e.target.files[0]);
        dispatch(uploadProfilePicAction(imageFormData));
    }, []);

    // 이미지 업로드 버튼 클릭
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <Wrapper>
            <Header>
                <CloseLeftIcon onClick={onClose} />
                <Title>Edit Profile</Title>
                <Button
                    onClick={onSubmitUpdate}
                    disabled={nickname.length > 5}
                    style={{ back: 'full', radius: '10px' }}>
                    저장
                </Button>
            </Header>
            <ContentWrapper>
                <ProfilePicWrapper>
                    <Overaly />
                    <input
                        type="file"
                        multiple
                        name="image"
                        hidden
                        ref={imageInput}
                        onChange={onChangeImages}
                    />
                    <EditIcon onClick={onClickImageUpload} />
                    <Avatar user={me} size={80} isLink={false} isMyPic={true} />
                </ProfilePicWrapper>
                <InputWrapper>
                    <TextInput
                        name="user-nickname"
                        value={nickname}
                        onChange={onChangeNickname}
                        placeholder=" "
                    />
                    <Label htmlFor="user-nickname">닉네임</Label>
                    <TextLength limit={nickname.length > 5}>
                        {nickname.length}/5
                    </TextLength>
                </InputWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};

EditProfileForm.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default EditProfileForm;
