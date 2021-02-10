import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface SignInCrendecials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credencials: SignInCrendecials): void;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    // Logica de refresh
    const token = localStorage.getItem('@GoBarber:tokens');
    const user = localStorage.getItem('@GoBarber:users');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }: SignInCrendecials) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    localStorage.setItem('@GoBarber:tokens', token);
    localStorage.setItem('@GoBarber:users', JSON.stringify(user));
    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
