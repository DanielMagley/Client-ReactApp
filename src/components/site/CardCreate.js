import React, { Component } from "react";
import { AuthContext } from "../site/auth/AuthContext";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class CardCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditional: "",
      consequence: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleConditionalSubmit = e => {
    e.preventDefault();
    this.fetchConditional();
  };

  fetchConditional = () => {
    fetch("http://localhost:3000/mdb/gameinfo/conditional", {
      method: "POST",
      body: JSON.stringify({ anytimedata: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.auth.sessionToken
      })
    })
      //   .then(response => response.json())
      .then(res => {
        this.props.updateConditionalsArray();
        this.setState({
          conditional: ""
        });
      });
  };

  handleConsequenceSubmit = e => {
    e.preventDefault();
    this.fetchConsequence();
  };

  fetchConsequence = () => {
    fetch("http://localhost:3000/mdb/gameinfo/consequence", {
      method: "POST",
      body: JSON.stringify({ consequencedata: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.auth.sessionToken
      })
    }).then(res => {
      this.props.updateConsequencesArray();
      this.setState({
        consequence: ""
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Enter Card Info</h1>
        <form onSubmit={this.handleConditionalSubmit}>
          <FormGroup>
            <ControlLabel>Enter a Conditional</ControlLabel>
            <FormControl
              type="text"
              name="conditional"
              value={this.state.conditional}
              placeholder="Ex: 'Anytime you cough' "
              onChange={this.handleChange}
            />
            <Button bsSize="sm" type="submit" id="button" bsStyle="primary">
              Submit
            </Button>
          </FormGroup>
        </form>
        <form onSubmit={this.handleConsequenceSubmit}>
          <FormGroup>
            <ControlLabel>Enter a Consequence</ControlLabel>
            <FormControl
              type="text"
              name="consequence"
              value={this.state.consequence}
              placeholder="Ex: 'A cat gets hit by a car'"
              onChange={this.handleChange}
            />
            <Button bsSize="sm" type="submit" id="button" bsStyle="primary">
              Submit
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
export default props => (
  <AuthContext.Consumer>
    {auth => <CardCreate {...props} auth={auth} />}
  </AuthContext.Consumer>
);
