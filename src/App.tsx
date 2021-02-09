import React from 'react';
import { AuthProvider } from './context/AuthContext';
import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
