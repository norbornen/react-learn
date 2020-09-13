export interface AppState {
  loading: boolean;
}

export const SHOW_LOADER = 'APP/SHOW_LOADER';
export interface ShowLoaderAction {
  type: typeof SHOW_LOADER;
}

export const HIDE_LOADER = 'APP/HIDE_LOADER';
export interface HideLoaderAction {
  type: typeof HIDE_LOADER;
}

export type AppActionTypes = ShowLoaderAction | HideLoaderAction;
