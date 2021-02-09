import React from 'react';
import AuthContext from './context/AuthContext';
import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Lucas' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyles />
    </>
  );
};

export default App;
