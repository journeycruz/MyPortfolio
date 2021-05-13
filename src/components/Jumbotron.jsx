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
                        src="/assets/images/62083284.jpeg"
                        alt="Slider Images"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mt_md--40 mt_sm--40">
                    <div className={`inner ${value.textPosition}`}>
                      <h1 className="title">
                        Hi, I’m Journey, a <br />
                        <TextLoop>
                          <span> Full-Stack</span>
                        </TextLoop>
                        <br />
                        Web Developer
                      </h1>
                      <TextLoop>
                        {value.category ? (
                          <span id="welcome">{value.category}</span>
                        ) : (
                          ""
                        )}
                        <span id="welcome">Welcome to my Portfolio.</span>
                      </TextLoop>
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
