import { ALERT_INFO, ALERT_WARNING, ALERT_ERROR, ALERT_HIDE, ShowAlertInfo, ShowAlertWarning, ShowAlertError, HideAlert } from './types';

export function showInfoAlert(msg: string): ShowAlertInfo {
  return {
    type: ALERT_INFO, payload: msg
  };
}

export function showWarningAlert(msg: string): ShowAlertWarning {
  return {
    type: ALERT_WARNING, payload: msg
  };
}

export function showErrorAlert(msg: string): ShowAlertError {
  return {
    type: ALERT_ERROR, payload: msg
  };
}

export function hideAlert(): HideAlert {
  return {
    type: ALERT_HIDE
  };
}
