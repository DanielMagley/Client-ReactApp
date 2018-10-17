import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Modal,
  FormControl,
  ControlLabel
} from "react-bootstrap";

class ConditionalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      conditional: ""
    };
  }

  componentWillMount() {
    this.setState({
      id: this.props.conditional.id,
      conditional: this.props.conditional.anytimedata
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.update(e, this.state);
  };

  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Edit Conditional</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>Conditional:</ControlLabel>
                <FormControl
                  type="text"
                  name="conditional"
                  value={this.state.conditional}
                  placeholder="enter result"
                  onChange={this.handleChange}
                />
                <Button bsSize="sm" type="submit" id="button" bsStyle="primary">
                  Submit
                </Button>
              </FormGroup>
            </form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

export default ConditionalEdit;
