import React, { Component } from "react";
import {
  FiSmartphone,
  FiHardDrive,
  FiDatabase,
  FiCloud,
  FiCheckSquare,
  FiDollarSign,
} from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiSmartphone />,
    title: "Mobile First Website Development",
    description:
      "Bring your app ideas to life with a website that is both fast and responsive.",
  },
  {
    icon: <FiHardDrive />,
    title: "API Creation & Integration",
    description: "REST and SOAP API integration using Node.js and Postman.",
  },
  {
    icon: <FiDatabase />,
    title: "Database Design",
    description:
      "Database architectures in MongoDB and MySQL with Mongoose and Sequelize ORMs.",
  },
  {
    icon: <FiCloud />,
    title: "Cloud Integration",
    description:
      "Deployment of MERN Stack applications using cloud platforms such as Heroku and AWS.",
  },
  {
    icon: <FiDollarSign />,
    title: "E-commerce",
    description:
      "Integration with PayPal and Stripe using the most popular e-commerce platforms such as Shopify, Webflow, and Wix.",
  },
  {
    icon: <FiCheckSquare />,
    title: "Software Testing",
    description:
      "Test writing for optimized software performance using Jest and Node.js.",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Services:</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <span>
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
