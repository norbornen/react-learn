import { SHOW_LOADER, HIDE_LOADER, ShowLoaderAction, HideLoaderAction } from './types'

export function showLoader(): ShowLoaderAction {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoader(): HideLoaderAction {
  return {
    type: HIDE_LOADER
  };
}
