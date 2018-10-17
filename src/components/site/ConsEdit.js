import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Modal,
  FormControl,
  ControlLabel
} from "react-bootstrap";

class ConsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      consequence: ""
    };
  }

  componentWillMount() {
    this.setState({
      id: this.props.cons.id,
      consequence: this.props.cons.consequencedata
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
            <Modal.Title>Edit Consequence</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>Consequence:</ControlLabel>
                <FormControl
                  type="text"
                  name="consequence"
                  value={this.state.consequence}
                  placeholder="enter result"
                  onChange={this.handleChange}
                />
                <Button bsSize="sm" type="submit" id="button" bsStyle="primary">
                  Submit
                </Button>
                {/* <Button
                  type="button"
                  id="close"
                  className="btn green btn-default"
                  data-dismiss="modal"
                >
                  Close
                </Button> */}
              </FormGroup>
            </form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

export default ConsEdit;
