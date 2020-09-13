// @ts-check

export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, { type: '__INIT__' });
    const subscribers = [];

    return {
        /**
         * @param { {type: string} } action
         */
        dispatch(action) {
            state = rootReducer(state, action);
            subscribers.forEach((cb) => {
                setTimeout(() => {
                    try {
                        cb();
                    } catch (err) {
                        console.error(err);
                    }
                }, 0);
            });
        },
        subscribe(callback) {
            subscribers.push(callback);
        },
        getState() {
            return state;
        }
    };
};
