import React , {useCallback,useState,useRef } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import ImagesZoom from './ImagesZoom';
const ImagesWrapper=styled.div`
    display:inline-block;
    width:50%;
    text-align:center;
    vertical-align:middle;
`;

const ImageWrapper=styled.img`
    cursor:pointer;
    display:inline-block;
    width:100px;
    height:100px;
    object-fit: cover;
`

const PostImages =({images})=>{

    const selectedIndex= useRef();
    const [showImageZoom, setShowImageZoom]=useState(false);
    
    const onZoom=useCallback((index)=>{
        selectedIndex.current=index;
        setShowImageZoom(true);
    },[]);

    const onClose =useCallback(()=>{
        setShowImageZoom(false);
    },[]);

    if(images.length===1){
        return(
        <>
            <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom.bind(this,0)}/>
            {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={0}/>}
        </>
        );
    }
    else if(images.length ===2){
        return(
            <>
                <ImageWrapper role="presentation"src={images[0].src} alt={images[0].src} onClick={onZoom.bind(this,0)}/>
                <ImageWrapper role="presentation" src={images[1].src} alt={images[1].src} onClick={onZoom.bind(this,1)}/>
                {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={selectedIndex.current}/>}
            </>
            );
    } 
    return(
        <>
            <div>
                <ImageWrapper role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom.bind(this,0)}/>
                <ImagesWrapper
                    role="presentation"
                    onClick={onZoom}
                >
                    <PlusOutlined/>
                    {images.length-1}개의 사진 더 보기
                </ImagesWrapper>
                {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={0}/>}
            </div>
        </>
    )
}

PostImages.propTypes = {
    images:PropTypes.arrayOf(PropTypes).isRequired
}

export default PostImages;