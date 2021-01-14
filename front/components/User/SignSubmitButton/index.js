import React from "react";
import Button from "../../../atom/Button";
import PropTypes from "prop-types";
import { LoadingIcon } from "../../Icons";

const SignSubmitButton = ({ onClick, loading, title, disabled }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        back: "full",
        radius: "5px",
        size: "0.8rem",
        width: "100%",
      }}
      disabled={disabled}>
      {loading ? <LoadingIcon /> : title}
    </Button>
  );
};

SignSubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default SignSubmitButton;
