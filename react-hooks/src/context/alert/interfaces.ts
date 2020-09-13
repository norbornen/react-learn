export type AlertReducerActionType = 'SHOW_ALERT' | 'HIDE_ALERT';

export interface AlertContextValue {
  show(text: AlertReducerState['text'], type?: AlertReducerState['type']): void;
  hide(): void;
  alert: AlertReducerState;
}

export interface AlertReducerState {
  visible: boolean;
  text?: string;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export interface AlertReducerAction {
  type?: AlertReducerActionType;
  payload?: Partial<AlertReducerState>;
}
