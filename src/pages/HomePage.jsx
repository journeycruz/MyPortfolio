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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique ligula ut arcu porta tristique. Sed ut libero quis dui luctus varius sit amet maximus enim. Proin non ex ac sem consectetur ultricies in non nibh. Cras lacinia ullamcorper nunc, eu rutrum massa viverra vitae. Sed consequat lacus eget semper efficitur. Integer lobortis nisl ac fermentum dignissim. Nunc mattis odio id sagittis porttitor. Praesent mattis vitae libero et porttitor.";

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
        <a
          className="rn-button-style--2 btn-solid"
          href="/assets/JourneysResume.pdf"
          download="/assets/JourneysResume.pdf"
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
