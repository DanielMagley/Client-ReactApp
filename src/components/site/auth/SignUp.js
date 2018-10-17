import React, { Component } from "react";
import { AuthContext } from "./AuthContext";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../../style/Signin-up.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  passwordConfrimation = () => {
    if (this.state.password === this.state.passwordConfirm) {
      console.log("Passwords match");
    } else {
      alert("Passwords must match!");
    }
  };
  validateForm = () => {
    return this.state.email > 0 && this.state.password.length > 0;
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    fetch("http://localhost:3000/mdb/user/createuser", {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(data => this.props.auth.setToken(data.sessionToken));
    this.passwordConfrimation();
    e.preventDefault();
  };

  validateSignUp = event => {
    this.setState({
      errorMessage: "Fields must not be empty"
    });
    event.preventDefault();
  };

  render() {
    const submitHandler = !this.state.username
      ? this.validateSignUp
      : this.handleSubmit;
    return (
      <div className="signup">
        <h1>SIGN UP</h1>
        <form onSubmit={submitHandler}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>
              <span>Username</span>
            </ControlLabel>
            <FormControl
              placeholder="Create a Username"
              value={this.state.username}
              onChange={this.handleChange}
              type="username"
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>
              <span>Email</span>
            </ControlLabel>
            <FormControl
              placeholder="Provide an Email"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>
              <span>Password</span>
            </ControlLabel>
            <FormControl
              placeholder="Provide a password (6+ characters)"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="passwordConfirm" bsSize="large">
            <ControlLabel>
              <span>Confrim Password</span>
            </ControlLabel>
            <FormControl
              placeholder="Re-enter Password"
              value={this.state.passwordConfirm}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <h6>
            Already have an Account?{" "}
            <button onClick={this.props.onClick}>Sign In</button>
          </h6>
          <Button bsSize="sm" type="submit" id="button">
            <span> Sign Up</span>
          </Button>
        </form>
      </div>
    );
  }
}
export default props => (
  <AuthContext.Consumer>
    {auth => <SignUp {...props} auth={auth} />}
  </AuthContext.Consumer>
);
