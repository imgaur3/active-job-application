export const DIALOG_OPEN = 'DIALOG_OPEN';
export const DIALOG_CLOSE = 'DIALOG_CLOSE';
export const DIALOG_OPEN_ASYNC = 'DIALOG_OPEN_ASYNC';
export const DIALOG_CLOSE_ASYNC = 'DIALOG_CLOSE_ASYNC';

export const dialogOpen = (payload: string) => {    
    // eslint-disable-next-line no-undef
    console.log('action file', payload);
    return {
        type: DIALOG_OPEN_ASYNC,
        payload,
    };
}

export const dialogClose = (payload: string) => {
    return {
        type: DIALOG_CLOSE_ASYNC,
        payload,
    };
};