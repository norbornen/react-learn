import { AppState, AppActionTypes, SHOW_LOADER, HIDE_LOADER } from './types';

const initialState: AppState = {
  loading: false
};

export function appReducer(state = initialState, action: AppActionTypes): AppState {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
