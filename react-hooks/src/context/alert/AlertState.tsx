import React, { useReducer } from 'react';
import { AlertContext } from './alertContext';
import { alertReduced } from './alertReducer';
import { AlertContextValue } from './interfaces';

export const AlertState: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(alertReduced, { visible: false });

  const show: AlertContextValue['show'] = (text, type = 'warning') => dispatch({
    type: 'SHOW_ALERT',
    payload: { text, type }
  });

  const hide: AlertContextValue['hide'] = () => dispatch({type: 'HIDE_ALERT'});

  return (
    <AlertContext.Provider value={{
      show, hide, alert: state
    }}>
      {children}
    </AlertContext.Provider>
  );
};
