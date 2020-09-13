import React from 'react';
import { AlertReducerState, AlertReducerAction, AlertReducerActionType } from './interfaces';

const handlers: Record<
  AlertReducerActionType | 'DEFAULT',
  (state: AlertReducerState, action: AlertReducerAction) => AlertReducerState
> = {
  DEFAULT: (state) => state,
  SHOW_ALERT: (_, {payload}) => ({...payload, visible: true}),
  HIDE_ALERT: (state) => ({...state, visible: false}),
};

export const alertReduced: React.Reducer<AlertReducerState, AlertReducerAction> = (state, action) => {
  const handle = handlers[action.type!] || handlers.DEFAULT;
  return handle(state, action);
}
