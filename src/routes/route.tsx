import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import AuthLayout from "../pages/__Layouts__/auth";
import DefaultLayout from "../pages/__Layouts__/default";

interface IRoute extends RouteProps {
  component: React.ComponentType<any>;
  signed: boolean;
  isPrivate: boolean;
}

let Layout = AuthLayout;

const route: React.FC<IRoute> = ({ component, signed, isPrivate, ...rest }) => {
  //const [Layout, setLayout] = useState<React.FC>(AuthLayout);

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  /* useEffect(() => {
    const Layout = signed ? DefaultLayout : AuthLayout;
  }, [signed]);
 */
  return (
    <Route
      {...rest}
      render={(props) => {
        Layout = signed ? DefaultLayout : AuthLayout;
        const Component = component;
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default route;
