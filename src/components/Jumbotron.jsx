import React from "react";
import TextLoop from "react-text-loop";
import { Component } from "react";
import Particles from "react-particles-js";
import { css } from "emotion";
// import { withRouter } from 'react-router-dom';

const bgLight = css`
  background: #ffffff;
`;

const SlideList = [
  {
    textPosition: "text-left",
    category: "from San Antonio, TX.",
  },
];

const loopIntervals = [1000, 1000, 1000, 1000, 5000];

class Jumbotron extends Component {
  render() {
    return (
      <div
        className="slider-activation slider-creative-agency with-particles"
        id="home"
      >
        <div className="frame-layout__particles">
          <Particles
            params={{
              particles: {
                number: {
                  value: 25,
                },
                size: {
                  value: 3,
                },
                color: {
                  value: "#66bdd1",
                },
                line_linked: {
                  shadow: {
                    enable: true,
                    color: "#66bdd1",
                    blur: 1,
                  },
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>

        {/* Start Single Slide */}
        {SlideList.map((value, index) => (
          <div className={bgLight}>
            <div
              className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center rn-slider-height"
              key={index}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="designer-thumbnail text-center">
                      <img
                        src="./assets/images/B7E0D831-C13F-4070-B27E-4A4A51ECFD0B.JPEG"
                        alt="Slider Images"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mt_md--40 mt_sm--40">
                    <div className={`inner ${value.textPosition}`}>
                      <h1 className="title">
                          Journey Cruz <br />
                        <TextLoop springConfig={{ stiffness: 180, damping: 8 }} delay="1000" interval={loopIntervals} >
                          <span>MongoDB&nbsp;</span>
                          <span>Express.js&nbsp;</span>
                          <span>React.js&nbsp;</span>
                          <span>Node.js&nbsp;</span>
                          <span>Full-Stack&nbsp;</span>
                        </TextLoop>
                        Developer
                        <br />
                        from San Antonio, TX
                      </h1>
                      <span id="welcome">Welcome To My Portfolio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Single Slide */}
      </div>
    );
  }
}

export default Jumbotron;
