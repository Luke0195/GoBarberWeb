import React, { createContext, useContext, useCallback, useState } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

interface ToastMessage {
  id: string;
  type: 'sucess' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [errorMesssage, setErrorMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(() => {
    console.log('Add Toast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('Remove Toast');
  }, []);
  return (
    <>
      <ToastContext.Provider value={{ addToast, removeToast }}>
        {children}
        <ToastContainer />
      </ToastContext.Provider>
    </>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { useToast, ToastProvider };
