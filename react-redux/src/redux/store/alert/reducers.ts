import { AlertActionTypes, AlertState, ALERT_INFO, ALERT_WARNING, ALERT_ERROR, ALERT_HIDE } from './types';

const initialState: AlertState = {
  visible: false
};

export function alertReducer(state = initialState, action: AlertActionTypes): AlertState {
  switch (action.type) {
    case ALERT_INFO:
      return { visible: true, css_class: 'info', text: action.payload };
    case ALERT_WARNING:
      return { visible: true, css_class: 'warning', text: action.payload };
    case ALERT_ERROR:
      return { visible: true, css_class: 'danger', text: action.payload };
    case ALERT_HIDE:
      return { visible: false };
    default:
      return state;
  }
}
