import React , {useCallback,useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ImagesWrapper=styled.div`
    display:inline-block;
    width:50%;
    text-align:center;
    vertical-align:middle;
`;

const ImageWrapper=styled.img`
    display:inline-block;
    width:50%;
`

const PostImages =({images})=>{

    const [showImages, setShowImages]=useState(false);
    const onZoom=useCallback(()=>{
        setShowImages(true);
    })

    if(images.length===1){
        return(
        <>
            <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
        </>
        );
    }
    else if(images.length ===2){
        return(
            <>
                <ImageWrapper role="presentation"src={images[0].src} alt={images[0].src} onClick={onZoom}/>
                <ImageWrapper role="presentation" src={images[1].src} alt={images[1].src} onClick={onZoom}/>
            </>
            );
    } 
    return(
        <>
            <div>
                <ImageWrapper role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
                <ImagesWrapper
                    role="presentation"
                    onClick={onZoom}
                >
                    <PlusOutlined/>
                    {images.length-1}개의 사진 더 보기
                </ImagesWrapper>
            </div>
        </>
    )
}

PostImages.propTypes = {
    images:PropTypes.arrayOf(PropTypes)
}

export default PostImages;