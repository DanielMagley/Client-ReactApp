import React, { Component } from "react";
import { AuthContext } from "./AuthContext";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../../style/Signin-up.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    // const accessToken = localStorage.getItem("token");
    let userData = {
      user: { email: this.state.email, password: this.state.password }
    };
    fetch("http://localhost:3000/mdb/user/signin", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(data => {
        this.props.auth.setToken(data.sessionToken);
      })
      .then(console.log(this.props));
    e.preventDefault();
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="form">
          <h1>SIGN IN</h1>

          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>
              <span>Email</span>
            </ControlLabel>
            <FormControl
              placeholder="Enter Email"
              onChange={this.handleEmail}
              type="email"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>
              <span>Password</span>
            </ControlLabel>
            <FormControl
              placeholder="Enter Password"
              onChange={this.handlePassword}
              type="password"
            />
          </FormGroup>
          <h6>
            Dont have an Account?{" "}
            <button onClick={this.props.onClick}>Sign Up</button>
          </h6>
          {/* <a href="/userpage"> */}
          <Button bsSize="sm" type="submit" id="button">
            <span>Sign In</span>
          </Button>
          {/* </a> */}
        </form>
      </div>
    );
  }
}
export default props => (
  <AuthContext.Consumer>
    {auth => <SignIn {...props} auth={auth} />}
  </AuthContext.Consumer>
);
