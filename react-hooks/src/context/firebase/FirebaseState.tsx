import React, { useReducer, useCallback } from 'react';
import axios from 'axios';
import { FirebaseContext } from './firebaseContext';
import { firebaseReduced } from './firebaseReducer';
import { FirebaseReducerState } from './interfaces';
import { INote } from '../../interfaces';

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState: React.FC = ({ children }) => {
  const initialState: FirebaseReducerState = {
    notes: [],
    loading: false
  };
  const [ state, dispatch ] = useReducer(firebaseReduced, initialState);

  const showLoader = useCallback(() => dispatch({ type: 'SHOW_LOADER' }), []);

  const fetchNotes = useCallback(async () => {
    showLoader();
    const { data } = await axios.get<Record<string, INote>>(`${url}/notes.json`);

    const payload = Object.keys(data || {}).reduce((acc, id) => {
      acc.push({ ...data[id], id });
      return acc;
    }, [] as INote[]);
    
    dispatch({ type: 'FETCH_NOTES', payload });
  }, [ showLoader ]);

  const addNote = useCallback(async (title: string) => {
    const note = {
      title, date: new Date().toJSON()
    };
    const { data: { name: id } } = await axios.post<{ name: string }>(`${url}/notes.json`, note);

    const payload: INote = { ...note, id };

    dispatch({ type: 'ADD_NOTE', payload });
  }, []);

  const removeNote = useCallback(async (id: string) => {
    await axios.delete(`${url}/notes/${id}.json`);
    dispatch({ type: 'REMOVE_NOTE', payload: id });
  }, []);

  return (
    <FirebaseContext.Provider value={{
      showLoader, addNote, removeNote, fetchNotes,
      loading: state.loading,
      notes: state.notes
    }}>
      {children}
    </FirebaseContext.Provider>
  );
};
