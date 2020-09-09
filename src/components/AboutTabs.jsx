import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class AboutTabs extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Experience",
      tab3 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Experience working with HTML, CSS, JavaScript, jQuery, Bootstrap, APIs, JSON, AJAX, Firebase, React.js, Heroku, Git, GitHub, AWS, MySQL, MongoDB, Mongoose, Sequelize, Handlebars, Node.js, Express.js, MVCs, sessions, test writing, algorithms, and data structures.
                        </li>
                        <li>
                          My technical experience, work ethic, and diligence
                          make me an advantageous candidate for any development team.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
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
                      <br />
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
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <hr />
                      <hr />
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
