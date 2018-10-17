import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/App.css";
// import Navbar from "./components/site/Navbar";
// import UserPage from "./components/site/UserPage";
// import SignUp from "./components/site/auth/SignUp";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthContext } from "./components/site/auth/AuthContext";
import Main from "./components/site/Main";
import "./style/Navbar.css";
import Auth from "./components/site/auth/Auth";

class App extends Component {
  constructor() {
    super();
    this.setToken = token => {
      localStorage.setItem("token", token);
      this.setState({ sessionToken: token });
    };
    this.state = {
      sessionToken: "",
      setToken: this.setToken
    };
  }

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  // setSessionState = token => {
  //   localStorage.setItem("token", token);
  //   this.setState({ sessionToken: token });
  //   console.log(this.setSessionState);
  // };

  logout = () => {
    this.setState({
      sessionToken: ""
    });
    localStorage.clear();
  };

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem("token")) {
      return (
        <Route>
          <Main clickLogout={this.logout} />
        </Route>
      );
    } else {
      return (
        <Route>
          <Auth />
        </Route>
      );
    }
  };

  render() {
    return (
      <Router>
        <AuthContext.Provider value={this.state}>
          {this.protectedViews()}
          {/* <Main /> */}
        </AuthContext.Provider>
      </Router>
    );
  }
}
export default App;
