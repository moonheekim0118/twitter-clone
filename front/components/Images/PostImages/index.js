import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ImagesZoom from '../ImagesZoom';
import { Wrapper, ImageWrapperColumn } from '../style';
import Image from '../Image';
import { imageSizing } from '../../../util/imageSizing';

const PostImages = ({ images }) => {
    const selectedIndex = useRef();
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
                <Wrapper>
                    {Images[0]}
                    <ImageWrapperColumn>
                        {Images[1]}
                        {Images[2]}
                    </ImageWrapperColumn>
                    {showImageZoom && <>{zoom}</>}
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
                    {showImageZoom && <>{zoom}</>}
                </Wrapper>
            );
        }
    }
    return (
        <Wrapper>
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
        </Wrapper>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostImages;
