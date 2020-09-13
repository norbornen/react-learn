import { createContext } from 'react';
import { AlertContextValue } from './interfaces';

export const AlertContext = createContext<AlertContextValue>(null!);
