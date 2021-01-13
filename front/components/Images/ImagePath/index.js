import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeImageAction } from '../../../actions/post';
import { Container, ImageColumn } from '../style';
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
                <Container>
                    {Images[0]}
                    <ImageColumn>
                        {Images[1]}
                        {Images[2]}
                    </ImageColumn>
                </Container>
            );
        } else {
            return (
                <Container>
                    <ImageColumn>
                        {Images[0]}
                        {Images[1]}
                    </ImageColumn>
                    <ImageColumn>
                        {Images[2]}
                        {Images[3]}
                    </ImageColumn>
                </Container>
            );
        }
    }
    return (
        <Container>
            {imagePaths.map((v, i) => (
                <Image
                    key={v + i}
                    src={v}
                    onRemove={onRemoveImage(i)}
                    ratio={size[i].ratio}
                    height={size[i].height}
                />
            ))}
        </Container>
    );
};

export default ImagePath;
