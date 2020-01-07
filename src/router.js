import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import { browserHistory } from "react-router";
import Home from "./pages/home/home";
import Layout from "./components/layout/layout";
import SignUp from "./pages/signUp/signUp";
import Catalog from "./pages/catalog/catalog";
import Login from "./pages/login/login";
import UserDashboard from "./pages/userDashboard/userDashboard";
import Cart from "./pages/cart/cart";
const MyRoute = ({ Component, path, layout, exact, auth }) => {
  return (
    <Route
      exact={exact || true}
      path={path}
      render={props => {
        if (
          layout === true &&
          (auth === false || auth === undefined || auth === null)
        ) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        } else if (layout === true && auth === true) {
          return (
            <Layout auth={true}>
              <Component {...props} />
            </Layout>
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <MyRoute path="/" Component={Home} exact layout={true} />
        <MyRoute path="/signup" Component={SignUp} exact />
        <MyRoute
          path="/catalog"
          Component={Catalog}
          exact
          layout={true}
          auth={true}
        />
        <MyRoute path="/login" Component={Login} exact />
        <MyRoute
          path="/dashboard"
          Component={UserDashboard}
          exact
          layout={true}
          auth={true}
        />
        <MyRoute path="/cart" Component={Cart} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
