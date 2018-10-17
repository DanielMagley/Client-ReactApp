import React, { Component } from "react";
import video from "../../style/assets/videos/Dollars+Money+Falling+Free+Background+Animation+Loop+footage+Motion+Graphic+Video+VFX.mp4";
import { Button } from "reactstrap";
import "../../style/LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="lp">
        <video loop autoPlay id="video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="auth-container">
          <div className="content">
            <div className="amd">A Million Dollars </div>
            <div className="but">But... </div>
          </div>
          <Button
            outline
            color="primary"
            size="lg"
            id="button"
            className="button"
            href="/game"
          >
            <span>PLAY</span>
          </Button>
        </div>
      </div>
    );
  }
}
export default LandingPage;
