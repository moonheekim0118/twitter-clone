import { useState, useCallback } from "react";

const useModal = (initialValue = false) => {
  const [show, setter] = useState(initialValue);
  const open = useCallback(() => {
    setter(true);
  }, []);

  const close = useCallback(() => {
    setter(false);
  }, []);
  return [show, open, close];
};

export default useModal;
