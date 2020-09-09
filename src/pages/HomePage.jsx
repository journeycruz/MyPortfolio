import React from "react";
import Jumbotron from "../components/Jumbotron";
import AboutTabs from "../components/AboutTabs";
import ServiceList from "../components/ServiceList";
import PortfolioSlider from "../components/PortfolioSlider";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function HomePage() {
  let title = "About Me",
    description =
      "My passion is helping people reach larger audiences by creating websites that are fast, interactive, and responsive. I am a problem-solver with a background in project management, data analysis, and I love to find creative ways to incorporate animations into my designs. I want to work with other developers to create influential electronic products using ReactJS and the MERN stack.";

  return (
    <div className="App">
      <Jumbotron />
      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <AboutTabs tabStyle="tab-style--1" />
                    </div>
                    <br />
                    <div className="rn-button-style--2 btn-solid">
                      <a
                        className="rn-button-style--2 btn-solid"
                        href="/assets/JourneyCruzResume2020.pdf"
                        download="/assets/JourneyCruzResume2020.pdf"
                      >
                                              Download My Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Service Area  */}
        <div id="service" className="fix">
          <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Services</h2>
                  </div>
                </div>
              </div>
              <div className="row creative-service">
                <div className="col-lg-12">
                  <ServiceList
                    item="6"
                    column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PortfolioSlider />
        <div id="contact" className="fix bgDark">
          <div className="rn-contact-area ptb--120 bgDark">
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
