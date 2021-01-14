import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeartIcon, CommentIcon } from "../../Icons";

const TYPE = {
  like: { color: "#eb2f96", Icon: HeartIcon },
  comment: { color: "#0099cc", Icon: CommentIcon },
};

const PostButton = ({ type, checked, onClick, counts }) => {
  const Button = TYPE[type].Icon;

  return (
    <Container checked={checked} color={TYPE[type].color}>
      <Button onClick={onClick} />
      {counts > 0 && <Count>{counts}</Count>}
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => (props.checked ? props.color : "gray")};
  &:hover {
    color: ${(props) => props.color};
  }
`;

const Count = styled.span`
  margin-left: ${({ theme }) => theme.margins.xsmall};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: inherit;
`;

PostButton.propTypes = {
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  counts: PropTypes.number.isRequired,
};

export default PostButton;
