import React from "react";
import { Switch } from "react-router-dom";

import Login from "../pages/Login";
import Route from "./route";

const routes: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Login}
        isPrivate={false}
        signed={false}
      />
    </Switch>
  );
};

export default routes;
