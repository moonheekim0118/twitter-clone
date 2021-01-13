import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Overaly } from "../../../atom/Modal";
import {
  CloseCircleLeftIcon,
  IndicatorIcon,
  LeftIcon,
  RightIcon,
} from "../../Icons";
import styled from "styled-components";

const ImagesZoom = ({ images, onClose, initial = 0 }) => {
  const [currentSlide, setCurrentSlide] = useState(initial);

  // 왼쪽으로 이동 버튼
  const onClickLeft = useCallback(() => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  // 오른쪽으로 이동 버튼
  const onClickRight = useCallback(() => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  // Indicator bar로 이동 버튼
  const onClickIndicator = useCallback(
    (index) => () => {
      if (index !== currentSlide) {
        setCurrentSlide(index);
      }
    },
    [currentSlide]
  );

  return (
    <>
      <Overaly color="black" onClick={onClose} />
      <Container>
        <CloseCircleLeftIcon onClick={onClose}></CloseCircleLeftIcon>
        <div>
          <LeftIcon onClick={onClickLeft} />
          <RightIcon onClick={onClickRight} />
          <ImageContainer>
            <img
              src={`${images[currentSlide].src}`}
              alt={images[currentSlide].src}
            />
          </ImageContainer>
        </div>
        <Indicators>
          {images.map((v, i) => (
            <IndicatorIcon
              onClick={onClickIndicator(i)}
              id={i}
              key={v.src}
              position={i * 10 + 45}
              color={i === currentSlide ? "true" : "false"}
            />
          ))}
        </Indicators>
      </Container>
    </>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  initial: PropTypes.number.isRequired,
};

const Container = styled.div`
  z-index: 7000;
`;

const Indicators = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0%;
  left: 50%;

  transform: translate(-50%, -30%);
  font-size: ${({ theme }) => theme.fontSizes.buttonSize};
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
  z-index: 7000;
`;

const ImageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:7000;
  
  & img {
      margin:${({ theme }) => theme.margins.base}; auto;
      max-height:70vmax;
      max-width:70vmin;
  }
`;

export default ImagesZoom;
