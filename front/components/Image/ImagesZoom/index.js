import React ,{useState,useCallback} from 'react';
import PropTypes from 'prop-types';
import { Wrapper,IndicatorWrapper, ImageWrapper } from './style';
import { Overaly } from '../../../atom/Modal';
import { CloseCircleIcon ,  IndicatorIcon , LeftIcon, RightIcon } from '../../Icons';

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

    const onClickIndicator=useCallback((index)=>{
        if(index!==currentSlide){
            setCurrentSlide(index);
        }
    },[currentSlide])

    return(
        <>
            <Overaly color="black" onClick={onClose}/>
            <Wrapper>
                <CloseCircleIcon onClick={onClose}></CloseCircleIcon>
                <div>
                <LeftIcon onClick={onClickLeft}/>
                <RightIcon onClick={onClickRight}/>
                <ImageWrapper>
                    <img src={`${images[currentSlide].src}`} alt={images[currentSlide].src}/>
                </ImageWrapper>
                </div>
            <IndicatorWrapper>
            {images.map((v,i)=>(<IndicatorIcon onClick={onClickIndicator.bind(this,i)} id={i} key={v.src} position ={(i*10)+45} color={ i===currentSlide ? "true": "false" }/>))}
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

export default ImagesZoom;