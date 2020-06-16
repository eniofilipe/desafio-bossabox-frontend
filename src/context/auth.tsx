import React, { createContext, useState } from "react";

// import { Container } from './styles';

interface IAuthContext {
  signed: boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{ signed: false }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
