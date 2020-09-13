import { createContext } from 'react';
import { FirebaseContextValue } from './interfaces';

export const FirebaseContext = createContext<FirebaseContextValue>(null!);
