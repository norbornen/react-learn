// @ts-check

import { INCREMENT, DECREMENT, CHANGE_THEME } from "./actionTypes";

export function increment() {
    return { type: INCREMENT };
}

export function decrement() {
    return { type: DECREMENT };
}

export function async_increment() {
    return async (dispatch) => {
        await new Promise((r) => setTimeout(r, 1400));
        dispatch(increment());
    };
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    };
}
