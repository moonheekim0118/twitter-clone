import React ,{useState,useCallback} from 'react';
import PropTypes from 'prop-types';
import { CloseCircleOutlined , RightCircleOutlined, LeftCircleOutlined, MinusOutlined} from '@ant-design/icons';
import styled  from 'styled-components';

const IndicatorWrapper= styled.div`
    position: fixed;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-size:2rem;
    color:#fff;
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    z-index:7000;
`;

const Indicator = styled(MinusOutlined)`
    font-size:3rem;
    color:${props=>props.color==='true' ? '#fff' : '#bfbfbf'};
    cursor:pointer;
`;

const LeftBtn = styled(LeftCircleOutlined)`
    position:fixed;
    top: 50%;
    left: 0;
    transform: translate(20%, -50%);
    font-size:2rem;
    color:#fff;
    cursor:pointer;
    z-index:7000;
`

const RightBtn = styled(RightCircleOutlined)`
    position:fixed;
    top: 50%;
    right: 0;
    transform: translate(-20%, -50%);
    font-size:2rem;
    color:#fff;
    cursor:pointer;
    z-index:7000;
`;


const Overaly = styled.div`
    position:fixed;
    z-index:5000;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(0,0,0,0.5);

`;

const Header = styled.header`
    height: 44px;
    position:fixed;
    padding:0;
    text-align:center;
    top:5px;
    z-index:7000;
    & h1 {
        margin:0;
        font-size:17px;
        color:#fff;
        line-height:44px;
    }
`;

const CloseBtn =styled(CloseCircleOutlined)`
    position:fixed;
    font-size:2rem;
    color:#fff;
    left:0;
    top:0;
    padding:10px;
    line-height:14px;
    cursor:pointer;
`

const ImageWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index:7000;
    transform: translate(-50%, -50%);
    & img {
        margin: 10px auto;
        max-height:70vmax;
        max-width:70vmin;
    }
`;

const Wrapper = styled.div`
    z-index:7000;
`;


const ImagesZoom=({images,onClose,initial})=>{
    const [currentSlide, setCurrentSlide]=useState(initial);
    
    const onClickLeft =useCallback(()=>{
        console.log(currentSlide);
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
        <Overaly onClick={onClose}/>
            <Wrapper>
                <Header>
                    <h1>상세 이미지</h1>
                    <CloseBtn onClick={onClose}></CloseBtn>
                </Header>
                <div>
                <LeftBtn onClick={onClickLeft}/>
                <RightBtn onClick={onClickRight}/>
                <ImageWrapper>
                    <img src={images[currentSlide].src} alt={images[currentSlide].src}/>
                    </ImageWrapper>
                </div>
            <IndicatorWrapper>
            {images.map((v,i)=>(<Indicator onClick={onClickIndicator.bind(this,i)} id={i} key={v.src} position ={(i*10)+45} color={ i===currentSlide ? "true": "false" }/>))}
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