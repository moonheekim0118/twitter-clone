// Alert
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const showAlertAction = (data) => {
    return {
        type: SHOW_ALERT,
        data,
    };
};

export const hideAlertAction = (data) => {
    return {
        type: HIDE_ALERT,
    };
};
