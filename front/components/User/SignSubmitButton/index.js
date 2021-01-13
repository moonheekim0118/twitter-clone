import React from "react";
import Button from "../../../atom/Button";
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

export default SignSubmitButton;
