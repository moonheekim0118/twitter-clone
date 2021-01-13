import React from "react";
import { CloseCircleRightIcon } from "../../Icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = ({ src, onClick = null, onRemove = null, ratio, height }) => {
  return (
    <Container $ratio={ratio}>
      <PostImage
        role="presentation"
        alt="image"
        $height={height}
        src={`http://localhost:3065/${src}`}
        onClick={onClick}
      />
      {onRemove && <CloseCircleRightIcon onClick={onRemove} />}
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 1;
  position: relative;
  width: ${(props) => `${100 / props.$ratio}%`};
  margin: 3px;
`;

const PostImage = styled.img`
  display: inline-block;
  flex-grow: 1;
  width: 100%;
  height: ${(props) => (props.$height ? "150px" : "300px")};
  border-radius: 10px;
`;

Image.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  ratio: PropTypes.number,
  height: PropTypes.bool,
};

export default Image;
