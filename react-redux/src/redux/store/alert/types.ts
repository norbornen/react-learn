export interface AlertState {
  visible: boolean;
  css_class?: string;
  text?: string;
}

export const ALERT_INFO = 'ALERT/INFO';
export interface ShowAlertInfo {
  type: typeof ALERT_INFO;
  payload: string;
}

export const ALERT_WARNING = 'ALERT/WARNING';
export interface ShowAlertWarning {
  type: typeof ALERT_WARNING;
  payload: string;
}

export const ALERT_ERROR = 'ALERT/ERROR';
export interface ShowAlertError {
  type: typeof ALERT_ERROR;
  payload: string;
}

export const ALERT_HIDE = 'ALERT/HIDE';
export interface HideAlert {
  type: typeof ALERT_HIDE;
}

export type AlertActionTypes = ShowAlertInfo|ShowAlertWarning|ShowAlertError|HideAlert;
