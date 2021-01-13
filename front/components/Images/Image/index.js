import React from 'react';
import { ImageWrapper, PostImage } from '../style';
import { CloseCircleRightIcon } from '../../Icons';

const Image = ({ src, onClick, onRemove = null, ratio, height }) => {
    return (
        <ImageWrapper number={ratio}>
            <PostImage
                role="presentation"
                height={height}
                src={`/${src}`}
                onClick={onClick}
            />
            {onRemove && <CloseCircleRightIcon onClick={onRemove} />}
        </ImageWrapper>
    );
};

export default Image;
