import React from "react";
import { AuthContext } from "./auth/AuthContext";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Auth from "./auth/Auth";
import UserPage from "./UserPage";
import Game from "./Game";

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/auth" component={Auth} setToken={props.setToken} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/game" component={Game} />
        <Route
          exact
          path="/signin"
          component={SignIn}
          setToken={props.setToken}
        />
        <Route
          exact
          path="/signup"
          component={SignUp}
          setToken={props.setToken}
        />
        <Route exact path="/userpage" component={UserPage} />
      </Switch>
    </main>
  );
};

export default props => (
  <AuthContext.Consumer>
    {auth => <Main {...props} auth={auth} />}
  </AuthContext.Consumer>
);
