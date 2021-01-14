export const scrollHandler = (dispatch, predicate) => {
  return function (e) {
    if (
      window.pageYOffset + document.documentElement.clientHeight + 10 >=
      document.documentElement.scrollHeight
    ) {
      if (predicate()) {
        dispatch();
      }
    }
  };
};
