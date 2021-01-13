import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../../actions/user";
import { LoadingIcon } from "../../Icons";
import Button from "../../../atom/Button";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const { isLoggingOut } = useSelector((state) => state.user);

  const onClickLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  });

  return (
    <Button onClick={onClickLogOut} type="button" style={{ back: "trans" }}>
      {isLoggingOut ? <LoadingIcon /> : "로그아웃"}
    </Button>
  );
};

export default LogoutButton;
