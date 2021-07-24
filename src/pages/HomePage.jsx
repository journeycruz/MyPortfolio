import React from "react";
import Jumbotron from "../components/Jumbotron";
import AboutTabs from "../components/AboutTabs";
import ServiceList from "../components/ServiceList";
import PortfolioSlider from "../components/PortfolioSlider";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default function HomePage() {
  let title = "About Me:",
    description =
      "Hi I'm Journey, an innovative web developer with a see a problem, solve a problem work ethic. I am a creative Front End Developer adept at building responsive websites that meet customer needs. Specializing in collaborating with ecommerce customers to gather requirements, produce plans and improve designs for usability and functionality. Fully proficient in JavaScript, Bootstrap and React. I currently live and work in San Antonio, TX but I look forward to working with developers from all over the world.";

  return (
    <div className="App">
      <ReactNotification />
      <Jumbotron />
      {/* Start About Area */}
      <div id="about" className="fix text-center">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <br></br>
                      <p className="pt--50 pb--50">{description}</p>
                    </div>
                    <br></br>
                    <div>
                      <div className="row text-center">
                        <AboutTabs tabStyle="tab-style--1" />
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonBg rn-button-style--2 btn-solid text-center">
          <p>
            My technical experience, work ethic, and diligence make me an
            advantageous candidate for any development team.
          </p>
        <br />
        <a
          className="rn-button-style--2 btn-solid"
          href="/assets/JourneyCruzResume2021.PDF"
          download="/assets/JourneyCruzResume2021.PDF"
        >
          Download My Resume
        </a>
      </div>
      <div>
        <PortfolioSlider />
        {/* Start Service Area  */}
        <div id="service" className="fix">
          <div className="service-area creative-service-wrapper ptb--120 about-area">
            <div className="container">
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
        <div id="contact" className="fix bg_color--5">
          <div className="rn-contact-area ptb--120 bg_color--5">
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
