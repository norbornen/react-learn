import { INote } from "../../interfaces";

export type FirebaseReducerActionType = 'SHOW_LOADER' | 'ADD_NOTE' | 'FETCH_NOTES' | 'REMOVE_NOTE';

export interface FirebaseContextValue {
  showLoader(): void;
  addNote(title: string): Promise<void>;
  removeNote(id: string): Promise<void>;
  fetchNotes(): Promise<void>;
  loading: FirebaseReducerState['loading'];
  notes: FirebaseReducerState['notes'];
}

export interface FirebaseReducerState {
  notes: INote[];
  loading: boolean;
}

export interface FirebaseReducerAction {
  type: FirebaseReducerActionType;
  payload?: any;
}
