import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeImageAction } from '../../../actions/post';
import { Wrapper, ImageWrapperColumn } from '../style';
import { imageSizing } from '../../../util/imageSizing';
import Image from '../Image';

const ImagePath = () => {
    const imagePaths = useSelector((state) => state.post.imagePaths);
    const dispatch = useDispatch();

    const onRemoveImage = useCallback(
        (index) => () => {
            dispatch(removeImageAction(index));
        },
        []
    );

    const size = imageSizing(imagePaths.length);

    if (imagePaths.length >= 3) {
        const Images = [];
        imagePaths.map((v, i) => {
            Images.push(
                <Image
                    key={v + i}
                    src={v}
                    onRemove={onRemoveImage(i)}
                    ratio={size[i].ratio}
                    height={size[i].height}
                />
            );
        });

        if (imagePaths.length === 3) {
            return (
                <Wrapper>
                    {Images[0]}
                    <ImageWrapperColumn>
                        {Images[1]}
                        {Images[2]}
                    </ImageWrapperColumn>
                </Wrapper>
            );
        } else {
            return (
                <Wrapper>
                    <ImageWrapperColumn>
                        {Images[0]}
                        {Images[1]}
                    </ImageWrapperColumn>
                    <ImageWrapperColumn>
                        {Images[2]}
                        {Images[3]}
                    </ImageWrapperColumn>
                </Wrapper>
            );
        }
    }
    return (
        <Wrapper>
            {imagePaths.map((v, i) => (
                <Image
                    key={v + i}
                    src={v}
                    onRemove={onRemoveImage(i)}
                    ratio={size[i].ratio}
                    height={size[i].height}
                />
            ))}
        </Wrapper>
    );
};

export default ImagePath;
