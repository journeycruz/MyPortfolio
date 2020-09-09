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
                          User experience design <span> - UI/UX</span>
                          Delight the user and make it work.
                        </li>
                        <li>
                          Web and user interface design
                          <span> - Development</span>
                          Websites, web experiences, ...
                        </li>
                        <li>
                          My technical experience, work ethic, and diligence
                          make me an advantageous candidate for any development
                          team.
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
