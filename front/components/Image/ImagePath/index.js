import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeImageAction } from '../../../actions/post';
import { Wrapper, ImageWrapper, ImageWrapperColumn, Image } from '../style';
import { CloseCircleRightIcon } from '../../Icons';

const ImagePath = () => {
    const imagePaths = useSelector((state) => state.post.imagePaths);
    const dispatch = useDispatch();

    const onRemoveImage = useCallback(
        (index) => () => {
            dispatch(removeImageAction(index));
        },
        []
    );

    if (imagePaths.length === 1) {
        return (
            <Wrapper>
                <ImageWrapper key={0} number={1}>
                    <Image
                        role="presentation"
                        height="false"
                        src={`${imagePaths[0]}`}
                        alt={imagePaths[0]}
                    />
                    <CloseCircleRightIcon onClick={onRemoveImage(0)} />
                </ImageWrapper>
            </Wrapper>
        );
    }
    if (imagePaths.length === 2) {
        return (
            <Wrapper>
                <ImageWrapper key={0} number={2}>
                    <Image
                        role="presentation"
                        height="false"
                        src={`${imagePaths[0]}`}
                        alt={imagePaths[0]}
                    />
                    <CloseCircleRightIcon onClick={onRemoveImage(0)} />
                </ImageWrapper>
                <ImageWrapper key={1} number={2}>
                    <Image
                        role="presentation"
                        height="false"
                        src={`${imagePaths[1]}`}
                        alt={imagePaths[1]}
                    />
                    <CloseCircleRightIcon onClick={onRemoveImage(1)} />
                </ImageWrapper>
            </Wrapper>
        );
    }

    if (imagePaths.length === 3) {
        return (
            <Wrapper>
                <ImageWrapper key={0} number={2}>
                    <Image
                        role="presentation"
                        height="false"
                        src={`${imagePaths[0]}`}
                    />
                    <CloseCircleRightIcon onClick={onRemoveImage(0)} />
                </ImageWrapper>
                <ImageWrapperColumn>
                    <ImageWrapper key={1} number={1}>
                        <Image
                            role="presentation"
                            height="true"
                            src={`${imagePaths[1]}`}
                        />
                        <CloseCircleRightIcon onClick={onRemoveImage(1)} />
                    </ImageWrapper>
                    <ImageWrapper key={2} number={1}>
                        <Image
                            role="presentation"
                            height="true"
                            src={`${imagePaths[2]}`}
                        />
                        <CloseCircleRightIcon onClick={onRemoveImage(2)} />
                    </ImageWrapper>
                </ImageWrapperColumn>
            </Wrapper>
        );
    }

    if (imagePaths.length === 4) {
        return (
            <Wrapper>
                <ImageWrapperColumn>
                    <ImageWrapper key={0} number={1} height="true">
                        <Image
                            role="presentation"
                            height="true"
                            src={`${imagePaths[0]}`}
                        />
                        <CloseCircleRightIcon onClick={onRemoveImage(0)} />
                    </ImageWrapper>
                    <ImageWrapper key={1} number={1} height="true">
                        <Image
                            role="presentation"
                            height="true"
                            src={`${imagePaths[1]}`}
                        />
                        <CloseCircleRightIcon onClick={onRemoveImage(1)} />
                    </ImageWrapper>
                </ImageWrapperColumn>
                <ImageWrapperColumn>
                    <ImageWrapper key={2} number={1} height="true">
                        <Image
                            role="presentation"
                            height="true"
                            src={`${imagePaths[2]}`}
                        />
                        <CloseCircleRightIcon onClick={onRemoveImage(2)} />
                    </ImageWrapper>
                    <ImageWrapper key={3} number={1} height="true">
                        <Image
                            role="presentation"
                            height="true"
                            src={`${imagePaths[3]}`}
                        />
                        <CloseCircleRightIcon onClick={onRemoveImage(3)} />
                    </ImageWrapper>
                </ImageWrapperColumn>
            </Wrapper>
        );
    } else {
        return <></>;
    }
};

export default ImagePath;
