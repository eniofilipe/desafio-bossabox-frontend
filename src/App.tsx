import React from "react";
import { Router } from "react-router-dom";

import { AuthProvider } from "./context/auth";

import History from "./services/history";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Router history={History}>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </Router>
  );
};

export default App;
