import React from "react";
import { Router } from "react-router-dom";

import History from "./services/history";
import GlobalStyle from "./styles/global";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Router history={History}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
};

export default App;
