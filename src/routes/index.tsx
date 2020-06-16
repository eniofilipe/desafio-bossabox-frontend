import React, { useContext } from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

import AuthContext from "../context/auth";

import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Login}
        isPrivate={false}
        signed={signed}
      />
      <Route
        path="/register"
        component={Register}
        isPrivate={false}
        signed={signed}
      />
    </Switch>
  );
};

export default Routes;
