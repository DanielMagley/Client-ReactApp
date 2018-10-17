import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Nav from "./Navbar";
import { AuthContext } from "./auth/AuthContext";
import CardCreate from "./CardCreate";
import ConsUserTable from "./ConsUserTable";
import ConditionTable from "./ConditionUserTable";
import ConditionalEdit from "./ConditionalEdit";
import ConsEdit from "./ConsEdit";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditionals: [],
      consequences: [],
      updatePressed: false,
      updateConsPressed: false,
      conditionalToUpdate: {},
      consequenceToUpdate: {}
    };
  }

  componentDidMount() {
    this.fetchConditionals();
    this.fetchConsequences();
  }

  //---------------------------CONDITIONALS-----------------------------------------------------------
  fetchConditionals = () => {
    const accessToken = localStorage.getItem("token");

    fetch("http://localhost:3000/mdb/gameinfo/conditional", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        return this.setState({ conditionals: data });
      });
  };

  conditionalDelete = e => {
    const accessToken = localStorage.getItem("token");

    fetch(`http://localhost:3000/mdb/gameinfo/conditional/${e.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ conditional: { id: e.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: accessToken
      })
    }).then(this.fetchConditionals());
  };

  conditionalUpdate = (e, conditional) => {
    const accessToken = localStorage.getItem("token");

    fetch(`http://localhost:3000/mdb/gameinfo/conditional/${conditional.id}`, {
      method: "PUT",
      body: JSON.stringify({ anytimedata: conditional }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: accessToken
      })
    }).then(res => {
      this.setState({ updatePressed: false });
      this.fetchConditionals();
    });
  };

  setUpdatedCondition = (e, conditional) => {
    this.setState({
      conditionalToUpdate: conditional,
      updatePressed: true
    });
    console.log("Conditional Clicked");
  };

  //---------------------------CONSEQUENCES-----------------------------------------------------------
  fetchConsequences = () => {
    const accessToken = localStorage.getItem("token");

    fetch("http://localhost:3000/mdb/gameinfo/consequence", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        return this.setState({ consequences: data });
      });
  };

  consDelete = e => {
    const accessToken = localStorage.getItem("token");

    fetch(`http://localhost:3000/mdb/gameinfo/consequence/${e.target.id}`, {
      method: "DELETE",
      // body: JSON.stringify({ consequence: { id: e.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: accessToken
      })
    }).then(this.fetchConsequences());
  };

  consUpdate = (e, cons) => {
    const accessToken = localStorage.getItem("token");

    fetch(`http://localhost:3000/mdb/gameinfo/consequence/${cons.id}`, {
      method: "PUT",
      body: JSON.stringify({ consequencedata: cons }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: accessToken
      })
    }).then(res => {
      this.setState({ updateConsPressed: false });
      this.fetchConsequences();
    });
  };

  setUpdatedCons = (e, cons) => {
    this.setState({
      consequenceToUpdate: cons,
      updateConsPressed: true
    });
    console.log("Consequence Clicked");
  };

  render() {
    // const consResults = this.state.consequences.length;
    // const conditionResults = this.state.conditionals.length;
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            <Col md="12">
              <CardCreate
                inline
                token={this.props.token}
                updateConditionalsArray={this.fetchConditionals}
                updateConsequencesArray={this.fetchConsequences}
              />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ConditionTable
                conditionals={this.state.conditionals}
                delete={this.conditionalDelete}
                updateConditional={this.setUpdatedCondition}
              />
              {/* {conditionResults} */}
            </Col>

            {/* <Col md={{ offset: 4 }} /> */}
            <Col md="6">
              <ConsUserTable
                consequences={this.state.consequences}
                delete={this.consDelete}
                updateCons={this.setUpdatedCons}
              />
              {/* {consResults} */}
            </Col>
          </Row>
          <Col md="12">
            {this.state.updatePressed ? (
              <ConditionalEdit
                t={this.state.updatePressed}
                update={this.conditionalUpdate}
                conditional={this.state.conditionalToUpdate}
              />
            ) : (
              <div />
            )}
          </Col>
          <Col md="12">
            {this.state.updateConsPressed ? (
              <ConsEdit
                t={this.state.updatePressed}
                update={this.consUpdate}
                cons={this.state.consequenceToUpdate}
              />
            ) : (
              <div />
            )}
          </Col>
        </Container>
      </div>
    );
  }
}
export default UserInfo;

// props => (
//   <AuthContext.Consumer>
//     {auth => <UserInfo {...props} auth={auth} />}
//   </AuthContext.Consumer>
// );
