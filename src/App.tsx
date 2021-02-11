import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          <SignIn />
        </ToastProvider>
      </AuthProvider>

      <ToastContainer />
      <GlobalStyles />
    </>
  );
};

export default App;
