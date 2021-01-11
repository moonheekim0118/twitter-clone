import React ,{useState,useCallback} from 'react';
import PropTypes from 'prop-types';
import { Overaly } from '../../../atom/Modal';
import { CloseCircleLeftIcon ,  IndicatorIcon , LeftIcon, RightIcon } from '../../Icons';
import styled  from 'styled-components';

const ImagesZoom=({images,onClose,initial})=>{
    const [currentSlide, setCurrentSlide]=useState(initial);
    
    const onClickLeft =useCallback(()=>{
        if(currentSlide===0){
            setCurrentSlide(images.length-1);
        }
        else{
            setCurrentSlide((prev)=>prev-1);
        }
    },[currentSlide]);

    const onClickRight =useCallback(()=>{
        console.log(currentSlide);
        if(currentSlide===images.length-1){
            setCurrentSlide(0);
        }
        else{
            setCurrentSlide((prev)=>prev+1);
        }
    },[currentSlide]);

    const onClickIndicator=useCallback((index)=>()=>{
        if(index!==currentSlide){
            setCurrentSlide(index);
        }
    },[currentSlide])

    return(
        <>
            <Overaly color="black" onClick={onClose}/>
            <Wrapper>
                <CloseCircleLeftIcon onClick={onClose}></CloseCircleLeftIcon>
                <div>
                <LeftIcon onClick={onClickLeft}/>
                <RightIcon onClick={onClickRight}/>
                <ImageWrapper>
                    <img src={`http://localhost:3065/${images[currentSlide].src}`} alt={images[currentSlide].src}/>
                </ImageWrapper>
                </div>
            <IndicatorWrapper>
            {images.map((v,i)=>(<IndicatorIcon onClick={onClickIndicator(i)} id={i} key={v.src} position ={(i*10)+45} color={ i===currentSlide ? "true": "false" }/>))}
            </IndicatorWrapper>
            </Wrapper>
        </>
    );
    
};

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
      })).isRequired,
    onClose:PropTypes.func.isRequired,
    initial:PropTypes.number.isRequired
}

const Wrapper = styled.div`
    z-index:7000;
`;

const IndicatorWrapper= styled.div`
    display:flex;
    justify-content:space-between;    
    position: fixed;
    bottom: 0%;
    left: 50%;

    transform: translate(-50%, -30%);
    font-size:${({theme})=>theme.fontSizes.buttonSize};
    color:${({theme})=>theme.colors.white};

    cursor:pointer;
    z-index:7000;
`;

const ImageWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:7000;
    
    & img {
        margin:${({theme})=>theme.margins.base}; auto;
        max-height:70vmax;
        max-width:70vmin;
    }
`;

export default ImagesZoom;