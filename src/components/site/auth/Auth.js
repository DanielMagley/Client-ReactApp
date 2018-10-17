import React, { Component } from "react";
import Navbar from "../Navbar";
import { Button, Container, Row, Col } from "reactstrap";
import Login from "../auth/SignIn";
import Signup from "../auth/SignUp";
import { AuthContext } from "./AuthContext";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginVisible: true
    };
  }

  toggleLogin = () => this.setState({ loginVisible: !this.state.loginVisible });

  render() {
    const loginOrSignup =
      this.state.loginVisible === true ? (
        <div>
          <Container>
            <Row>
              <Col sm="12">
                <Login onClick={this.toggleLogin} />
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <Signup onClick={this.toggleLogin} />
          </Container>
        </div>
      );

    return (
      <section>
        <div className="formDisplay">
          <div className="authDisplay">{loginOrSignup}</div>
        </div>
      </section>
    );
  }
}
