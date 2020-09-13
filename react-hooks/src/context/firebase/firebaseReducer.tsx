import React from 'react';
import { FirebaseReducerActionType, FirebaseReducerState, FirebaseReducerAction } from './interfaces';

const handlers: Record<
  FirebaseReducerActionType | 'DEFAULT',
  (state: FirebaseReducerState, action: FirebaseReducerAction) => FirebaseReducerState
> = {
  DEFAULT: (state) => state,
  SHOW_LOADER: (state) => ({ ...state, loading: true }),
  ADD_NOTE: (state, { payload }) => ({
    ...state,
    notes: [ ...state.notes, payload ],
    loading: false
  }),
  FETCH_NOTES: (state, { payload }) => ({
    ...state,
    notes: payload,
    loading: false
  }),
  REMOVE_NOTE: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== payload),
    loading: false
  }),
};

export const firebaseReduced: React.Reducer<FirebaseReducerState, FirebaseReducerAction> = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}
