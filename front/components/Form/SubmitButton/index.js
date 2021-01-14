import React from "react";
import PropTypes from "prop-types";
import Button from "../../../atom/Button";
import { LoadingIcon } from "../../Icons";

const SubmitButton = ({ onClick, disabled, loading, title }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      style={{
        back: "full",
        radius: "24px",
        weight: "bold",
      }}>
      {loading ? <LoadingIcon /> : title}
    </Button>
  );
};

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default SubmitButton;
