import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import AuthLayout from "../pages/__Layouts__/auth";
import DefaultLayout from "../pages/__Layouts__/default";

interface IRoute extends RouteProps {
  component: React.ComponentType<any>;
  signed: boolean;
  isPrivate: boolean;
}

const route: React.FC<IRoute> = ({ component, signed, isPrivate, ...rest }) => {
  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  const Layout = isPrivate ? DefaultLayout : AuthLayout;

  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default route;
