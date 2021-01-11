export const scrollHandler = (dispatch, condition1, condition2) => {
    return function (e) {
        if (
            window.pageYOffset + document.documentElement.clientHeight + 10 >=
            document.documentElement.scrollHeight
        ) {
            if (condition1 && !condition2) {
                dispatch();
            }
        }
    };
};
