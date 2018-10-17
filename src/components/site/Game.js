import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../../style/Game2.css";
import Navbar from "../site/Navbar";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      conditionalCard: "",
      consequnceCard: ""
    };
  }
  componentDidMount = () => {
    this.fetchConditional();
    this.fetchConsequence();
  };

  fetchConditional = () => {
    fetch("http://localhost:3000/mdb/gameinfo/conditional-card", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
        return json;
      })
      .then(json => {
        let cardItem = json.anytimedata;
        console.log(cardItem);
        return this.setState({ conditionalCard: cardItem });
      });
  };

  fetchConsequence = () => {
    fetch("http://localhost:3000/mdb/gameinfo/consequence-card", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
        return json;
      })
      .then(json => {
        let cardItem = json.consequencedata;
        console.log(cardItem);
        return this.setState({ consequnceCard: cardItem });
      });
  };

  refreshPage = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="bod">
        <Navbar />
        <Container className="mainDiv">
          <Row className="justify-content-center">
            <h1 className="header text-center">
              A Million Dollars <span>But...</span>
            </h1>
          </Row>
          <Row>
            <Col>
              <div md={{ size: "4", offset: 3 }} className="cardL">
                <label>
                  <input type="checkbox" />
                  <div className="cardL">
                    <div className="front" />
                    <div className="back">{this.state.conditionalCard}</div>
                  </div>
                </label>
              </div>
            </Col>
            <Col>
              <div sm="3" className="cardR">
                <label>
                  <input type="checkbox" />
                  <div className="cardR">
                    <div className="front" />
                    <div className="back">{this.state.consequnceCard}</div>
                  </div>
                </label>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <div className="bottom">
              <div>
                <div className="p-0 text-center">
                  <div>
                    <Button
                      id="button"
                      outline
                      color="warning"
                      className="button"
                      type="button"
                      onClick={this.refreshPage}
                    >
                      Next Cards
                    </Button>

                    <div className="signin">
                      <h5>
                        <a href="/signin">Log In</a> to add your own cards to
                        the Deck!
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Game;
