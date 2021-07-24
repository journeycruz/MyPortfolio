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
                    <div className="tabContainer">
                      <div className="single-tab-content">
                        <ul>
                          <li className="text-center">
                            Experience working with the following software:
                          </li>
                        </ul>
                        <div className="row">
                          <ul className="col-md-6">
                            <li>
                              <a
                                href="https://www.javascript.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLI"
                                  src="/assets/images/html5-logo-31816.png"
                                  alt="HTML, CSS, Javascript"
                                />
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a
                                href="https://jquery.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIsmall"
                                  src="/assets/images/jquery-1-logo-png-transparent.png"
                                  alt="jQuery"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://git-scm.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLI"
                                  src="/assets/images/gitlogoorange.png"
                                  alt="Git"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://getbootstrap.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIlarge"
                                  src="/assets/images/bootstraplogolong.png"
                                  alt="Bootstrap"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://expressjs.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLI"
                                  src="/assets/images/express-logo.png"
                                  alt="Express"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://rapidapi.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIlarge"
                                  src="/assets/images/rapidAPIlogo.png"
                                  alt="RapidAPI"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.postman.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLI"
                                  src="/assets/images/postman-logo.png"
                                  alt="Postman"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://json5.org/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIsmall"
                                  src="/assets/images/json-5-logo-png-transparent.png"
                                  alt="JSON"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.mysql.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIlarge"
                                  src="/assets/images/mysql-logo.png"
                                  alt="MySQL"
                                />
                              </a>
                            </li>
                          </ul>
                          <ul className="col-md-6">
                            <li>
                              <a
                                href="https://www.mongodb.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLI"
                                  src="/assets/images/mongodblogo.png"
                                  alt="MongoDB"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://reactjs.org/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIlarge"
                                  src="/assets/react-logo.png"
                                  alt="React"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://nodejs.org/en/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLI"
                                  src="/assets/images/nodejs-logo.png"
                                  alt="Node"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.heroku.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIlarge"
                                  src="/assets/images/heroku-logotype-horizontal-purple.png"
                                  alt="Heroku"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://aws.amazon.com/free/?trk=ps_a131L0000085EJuQAM&trkCampaign=acq_paid_search_brand&sc_channel=ps&sc_campaign=acquisition_US&sc_publisher=google&sc_category=core-main&sc_country=US&sc_geo=NAMER&sc_outcome=acq&sc_detail=amazon%20web%20services&sc_content=Brand_amazon_web_services_e&sc_segment=423740514695&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Core-Main|Core|US|EN|Text&s_kwcid=AL!4422!3!423740514695!e!!g!!amazon%20web%20services&ef_id=EAIaIQobChMIqfii1pP88QIVdm1vBB1BJwqTEAAYASAAEgLAO_D_BwE:G:s&s_kwcid=AL!4422!3!423740514695!e!!g!!amazon%20web%20services&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIlarge"
                                  src="/assets/images/aws-logo.png"
                                  alt="Amazon Web Services"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://mongoosejs.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLI"
                                  src="/assets/images/mongoose-logo.png"
                                  alt="Mongoose"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://handlebarsjs.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIlarge"
                                  src="/assets/images/handlebars-js.png"
                                  alt="Handlebars"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.npmjs.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLI"
                                  src="/assets/images/npm-logo.png"
                                  alt="NPM"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://jestjs.io/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="softwareLIlarge"
                                  src="/assets/images/jest-logo-png-transparent.png"
                                  alt="Jest"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="col-md-12"></div>
                      <ul>
                        <li>
                          <a href="https://www.cyanbirddesigns.com/" rel="noopener noreferrer" target="_blank"><img src="/assets/images/cbd_logo.jpg" alt="Cyan Bird Designs" id="cbdLogo"/></a>
                        </li>
                        <br />
                        <li>Frontend Developer - Cyan Bird Designs</li>
                        <li> 2019 - Current</li>
                        <li>
                          Communicated with product managers and UX designers to
                          translate project requirements and business objectives
                          into polished User Interfaces. Improved and expanded
                          project platforms using JavaScript to develop rich
                          UIs. Developed Application UIs via
                          emerging Front End Technologies such as React and
                          SASS. Identified, documented, and reported on technical
                          factors impacting interface performance. Collaborated
                          with design team to integrate UI features complying
                          with prescribed code standards and technical design
                          guidelines. Designed UIs with frontend web
                          frameworks such as Bootstrap and React, exploiting associated
                          templates and tools to shorten development times.
                        </li>
                        <br></br>
                      </ul>
                      <div className="col-md-12"></div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Coding Bootcamp Graduate - University of Texas At San
                          Antonio - September, 2020
                        </li>
                        <img
                          id="certificate1"
                          src="/assets/images/coding_certificate.jpg"
                          alt="coding_certificate"
                        />
                      </ul>
                    </div>
                  </TabPanel>
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
