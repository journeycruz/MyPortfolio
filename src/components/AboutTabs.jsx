import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class AboutTabs extends Component {
  render() {
    let tab1 = "Experience",
      tab2 = "Work History",
      tab3 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div className="aboutMeSection">
        {/* Start Tabs Area */}
        <div className="tabs-area m-0">
          <div className="container col-lg-12">
            <div className="row">
              <div className="text-center">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>
                  <div className="space"></div>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li className="text-center">
                          I have experience working with the following software:
                          {/* Experience working with the following software: HTML,
                          CSS, JavaScript, jQuery, Bootstrap, APIs, JSON, AJAX,
                          Firebase, React.js, Heroku, Git, GitHub, AWS, MySQL,
                          MongoDB, Mongoose, Sequelize, Handlebars, Node.js,
                          Express.js, MVCs, sessions, test writing, algorithms,
                          and data structures. */}
                        </li>
                        {/* <li>
                          My technical experience, work ethic, and diligence
                          make me an advantageous candidate for any development team.
                        </li> */}
                      </ul>
                      <div className="row">
                        <ul className="col-md-6">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Git</li>
                          <li>JavaScript</li>
                          <li>jQuery</li>
                          <li>Bootstrap</li>
                          <li>SOAP and REST API's</li>
                          <li>JSON</li>
                          <li>AJAX</li>
                          <li>MySQL</li>
                        </ul>
                        <ul className="col-md-6">
                          <li>MongoDB</li>
                          <li>React</li>
                          <li>Node</li>
                          <li>Heroku</li>
                          <li>Amazon Web Services</li>
                          <li>Mongoose</li>
                          <li>Handlebars</li>
                          <li>Sequelize</li>
                          <li>Express</li>
                          <li>Jest</li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="col-md-12"></div>
                      <ul>
                        <li>
                          Frontend Developer - 2019 - Current: Communicated with
                          product managers and UX designers to translate project
                          requirements and business objectives into polished
                          user interfaces. Improved and expanded project
                          platforms using JavaScript to develop rich User
                          Interfaces. Developed Application UIs via emerging
                          Front End Technologies such as React, and SASS.
                          Identified, documented and reported on technical
                          factors impacting interface performance. Collaborated
                          with design team to integrate UI features complying
                          with prescribed code standards and technical design
                          guidelines. Designed UIs within frontend web
                          frameworks such as Bootstrap, exploiting associated
                          templates and tools to shorten development times.
                        </li>
                        <br></br>
                      </ul>
                      <div className="col-md-12"></div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <img
                        id="certificate1"
                        src="/assets/images/coding_certificate.jpg"
                        alt="coding_certificate"
                      />
                    </div>
                  </TabPanel>
                  {/* <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Freelance Web Developer - 2018 - Current
                        </li>
                        <li>
                          Electrician<span> - R & R Electric</span> 2018 -
                          Current
                        </li>
                        <li>
                          Porter Supervisor
                          <span> - 1st Call Cleaning Services</span> 2016 - 2018
                        </li>
                        <li>
                          Directional Driller
                          <span> - Penlee Oil & Gas Consultants </span> 2013 -
                          2016
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Certificate of Completion{" "}
                          <span> - Full Stack Web Development Coding Boot Camp, UTSA</span>{" "}
                          September 2020
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default AboutTabs;
