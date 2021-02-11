import React, { createContext, useContext, useCallback } from 'react';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
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
