// @ts-check

import './styles.css';
// import { createStore } from './createStore';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, async_increment, changeTheme } from './redux/actions';

const counterNode = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

/** @type { import('redux').Middleware } */
const logger2 = (state) => (next) => (action) => {
    console.log('Prev State', state.getState());
    console.log('Action', action);
    const newState = next(action);
    console.log('New State', state.getState());
    return newState;
};

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);


addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(async_increment());
});

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    store.dispatch(changeTheme(newTheme));
});


store.subscribe(() => {
    const state = store.getState();
    // @ts-ignore
    counterNode.textContent = state.counter;

    document.body.className = state.theme.value;
});
store.dispatch({ type: 'INIT_APPLICATION' });
