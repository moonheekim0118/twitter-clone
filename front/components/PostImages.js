import React , {useCallback,useState,useRef } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import ImagesZoom from './ImagesZoom';

const Wrapper = styled.div`
    margin-top:30px;
`;

const ImagesWrapper=styled.div`
    cursor:pointer;
    margin-top:5px;
    display:inline-block;
    @media screen and (max-width:768px){
        width:100%;
    }
`;

const ImageWrapper=styled.img`
    cursor:pointer;
    display:inline-block;
    width:40%;
    height:200px;
    margin:2px;
    border-radius:5px;
    object-fit: cover;
    
    &:hover{
        -webkit-box-shadow: 0px -1px 11px -1px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px -1px 11px -1px rgba(0,0,0,0.3);
        box-shadow: 0px -1px 11px -1px rgba(0,0,0,0.3);
    }

    @media screen and (max-width:767px){
        height:100px;
    }
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
        <Wrapper>
            <ImageWrapper role="presentation" style={{width:"100%"}} src={images[0].src} alt={images[0].src} onClick={onZoom.bind(this,0)}/>
            {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={0}/>}
        </Wrapper>
        );
    }
    else if(images.length ===2){
        return(
            <Wrapper>
                <ImageWrapper role="presentation"src={images[0].src} alt={images[0].src} onClick={onZoom.bind(this,0)}/>
                <ImageWrapper role="presentation" src={images[1].src} alt={images[1].src} onClick={onZoom.bind(this,1)}/>
                {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={selectedIndex.current}/>}
            </Wrapper>
            );
    } 
    return(
        <Wrapper>
                <ImageWrapper role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom.bind(this,0)}/>
                <ImagesWrapper
                    role="presentation"
                    onClick={onZoom.bind(this,1)}
                >
                    <PlusOutlined/>
                    {images.length-1}개의 사진 더 보기
                </ImagesWrapper>
                {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={selectedIndex.current}/>}
        </Wrapper>
    )
}

PostImages.propTypes = {
    images:PropTypes.arrayOf(PropTypes).isRequired
}

export default PostImages;