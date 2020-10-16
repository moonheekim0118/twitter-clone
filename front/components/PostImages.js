import React , {useCallback,useState,useRef } from 'react';
import PropTypes from 'prop-types';
import ImagesZoom from './ImagesZoom';
import {Wrapper, ImageWrapper, ImageWrapperColumn,Image  } from './Styles/image';


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
            <ImageWrapper key={0} number={1}>
                <Image role="presentation" height="false" src={images[0].src} alt={images[0].src} onClick={onZoom.bind(this,0)}/>
            </ImageWrapper>
            {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={0}/>}
        </Wrapper>
        );
    }
    if(images.length ===2){
        return(
            <Wrapper>
                <ImageWrapper key={0} number={2}>
                    <Image role="presentation" height="false" src={images[0].src} alt={images[0].src}  onClick={onZoom.bind(this,0)}/>
                </ImageWrapper>
                <ImageWrapper key={1} number={2}>
                  <Image role="presentation" height="false" src={images[1].src} alt={images[1].src}  onClick={onZoom.bind(this,1)}/>
                </ImageWrapper>
                {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={selectedIndex.current}/>}
            </Wrapper>
        );
    } 
    if(images.length===3){
        <Wrapper>
             <ImageWrapper key={0} number={2} >
                   <Image role="presentation"  height="false" src={images[0].src} alt={images[0].src} onClick={onZoom.bind(this,0)}/>
            </ImageWrapper>
            <ImageWrapperColumn>
                <ImageWrapper key={1} number={1} >
                    <Image role="presentation"  height="true" src={images[1].src} alt={images[1].src} onClick={onZoom.bind(this,1)}/>
                </ImageWrapper>
                <ImageWrapper key={2} number={1}>
                    <Image  role="presentation"  height="true" src={images[2].src} alt={images[2].src} onClick={onZoom.bind(this,2)}/>
                </ImageWrapper>
            </ImageWrapperColumn>
            {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={selectedIndex.current}/>}
        </Wrapper>
    }

    return(
         <Wrapper>
                <ImageWrapperColumn>
                    <ImageWrapper key={0} number={1} height="true">
                        <Image role="presentation"  height="true" src={images[0].src} alt={images[0].src} onClick={onZoom.bind(this,0)}/>
                    </ImageWrapper>
                    <ImageWrapper key={1} number={1} height="true">
                        <Image role="presentation"  height="true"src={images[1].src} alt={images[1].src} onClick={onZoom.bind(this,1)}/>
                    </ImageWrapper>
               </ImageWrapperColumn>
               <ImageWrapperColumn>
                    <ImageWrapper key={2} number={1} height="true">
                        <Image role="presentation"  height="true" src={images[2].src} alt={images[2].src} onClick={onZoom.bind(this,2)}/>
                    </ImageWrapper>
                    <ImageWrapper key={3} number={1} height="true">
                        <Image role="presentation"  height="true" src={images[3].src} alt={images[3].src} onClick={onZoom.bind(this,3)}/>
                    </ImageWrapper>
               </ImageWrapperColumn>
            {showImageZoom && <ImagesZoom images={images} onClose={onClose} initial={selectedIndex.current}/>}
            </Wrapper>
    )
}

PostImages.propTypes = {
    images:PropTypes.arrayOf(PropTypes).isRequired
}

export default PostImages;