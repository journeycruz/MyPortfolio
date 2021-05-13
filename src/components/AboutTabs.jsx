import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class AboutTabs extends Component {
  render() {
    let tab1 = "What I Do",
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
                      <div className="col-md-12"></div>
                      <ul>
                      <li>
                          Freelance Web Developer - 2018 - Current: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus accumsan ullamcorper. Cras consequat justo sit amet magna laoreet efficitur. Phasellus sodales sem sed neque ultrices fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus accumsan ullamcorper. Cras consequat justo sit amet magna laoreet efficitur. Phasellus sodales sem sed neque ultrices fringilla.
                        </li>
                        <br></br>
                        <li>
                          Electrician<span> - R & R Electric</span> 2018 -
                          Current: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus accumsan ullamcorper. Cras consequat justo sit amet magna laoreet efficitur. Phasellus sodales sem sed neque ultrices fringilla.
                        </li>
                        <br></br>
                        <li>
                          Porter Supervisor
                          <span> - 1st Call Cleaning Services</span> 2016 - 2018: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus accumsan ullamcorper. Cras consequat justo sit amet magna laoreet efficitur. Phasellus sodales sem sed neque ultrices fringilla.
                        </li>
                        <br></br>
                        <li>
                          Directional Driller
                          <span> - Penlee Oil & Gas Consultants </span> 2013 -
                          2016: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus accumsan ullamcorper. Cras consequat justo sit amet magna laoreet efficitur. Phasellus sodales sem sed neque ultrices fringilla.
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
                          Certificate of Completion{" "}
                          <span> - Full Stack Web Development Coding Boot Camp, UTSA</span>{" "}
                          September 2020: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus accumsan ullamcorper. Cras consequat justo sit amet magna laoreet efficitur. Phasellus sodales sem sed neque ultrices fringilla.
                        </li>
                      </ul>
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
