import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ImagesZoom from '../ImagesZoom';
import Image from '../Image';
import { Container, ImageColumn } from '../style';
import { imageSizing } from '../../../util/imageSizing';

const PostImages = ({ images }) => {
    const selectedIndex = useRef(0);
    const [showImageZoom, setShowImageZoom] = useState(false);

    const onZoom = useCallback(
        (index) => () => {
            selectedIndex.current = index;
            setShowImageZoom(true);
        },
        []
    );

    const onClose = useCallback(() => {
        setShowImageZoom(false);
    }, []);

    const size = imageSizing(images.length);
    const zoom = (
        <ImagesZoom
            images={images}
            onClose={onClose}
            initial={selectedIndex.current}
        />
    );

    if (images.length >= 3) {
        const Images = [];
        images.map((v, i) => {
            Images.push(
                <Image
                    key={v.src + i}
                    src={v.src}
                    onClick={onZoom(i)}
                    ratio={size[i].ratio}
                    height={size[i].height}
                />
            );
        });

        if (images.length === 3) {
            return (
                <Container>
                    {Images[0]}
                    <ImageColumn>
                        {Images[1]}
                        {Images[2]}
                    </ImageColumn>
                    {showImageZoom && <>{zoom}</>}
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
                    {showImageZoom && <>{zoom}</>}
                </Container>
            );
        }
    }
    return (
        <Container>
            {images.map((v, i) => (
                <Image
                    key={v.src + i}
                    src={v.src}
                    onClick={onZoom(i)}
                    ratio={size[i].ratio}
                    height={size[i].height}
                />
            ))}
            {showImageZoom && <>{zoom}</>}
        </Container>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostImages;
