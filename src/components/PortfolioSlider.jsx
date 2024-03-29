import React, { Component } from "react";
import Slider from "react-slick";

const portfolioSlick2 = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const PortfolioList = [
  {
    image: "image-7",
    category:
      "Play server authoritative chess games with your friends. Customize the board to match your style. Chat with other players using Chat.io. Lock games to limit who can join.",
    title: "Chess Masta",
    href1: "https://github.com/shmoesolid/Chess-Masta",
    href2: "https://chess-masta.herokuapp.com/",
  },
  {
    image: "image-6",
    category:
      "Generate passwords and store them in a MongoDB database. Uses Passport for secure login and BCrypt password hasher to ensure any stored passwords remain encrypted.",
    title: "Password Genie",
    href1: "https://github.com/noahnr/Password_Genie",
    href2: " https://arcane-inlet-71435.herokuapp.com/",
  },
  {
    image: "image-3",
    category:
      "Makes an AJAX call to the Open Weather Map API and displays information such as Temperature, Humidity, Wind Speed, and UV Index for any city.",
    title: "Weather Tracker",
    href1: "https://github.com/journeycruz/Weather_OpenWeatherMapAPI",
    href2: "https://journeycruz.github.io/Weather_OpenWeatherMapAPI/",
  },
  {
    image: "image-1",
    category:
      "Track employees by storing them in an organized Bootstrap Table. Sort alphabetically by first or last name, or search for an employee with the built in search bar.",
    title: "Employee Directory",
    href1: "https://github.com/journeycruz/React_Employee_Directory",
    href2: "https://react-employee-directory-20.herokuapp.com/",
  },
  {
    image: "image-2",
    category:
      "Node.js application that allows users to create README.md files quickly and easily. Includes the option to link a GitHub Repository and select the best license for your project.",
    title: "README Generator",
    href1: "https://github.com/journeycruz/Node_README_Generator",
    href2: "https://github.com/journeycruz/React_Employee_Directory",
  },
  {
    image: "image-4",
    category:
      "Take notes on the go using this handy note keeper. Powered by Express.js this fully responsive Bootstrap application can be used on any device.",
    title: "Note Taker",
    href1: "https://github.com/journeycruz/Notes_App",
    href2: "https://notesappexpress.herokuapp.com/",
  },
  {
    image: "image-5",
    category:
      "Node.js application that prompts a user with questions and writes an HTML document listing roles and contact information cards for all team members on your next project.",
    title: "Team Organizer",
    href1: "https://github.com/journeycruz/OOP_Team_Generator",
    href2: "https://github.com/journeycruz/OOP_Team_Generator",
  },
];

class PortfolioSlider extends Component {
  render() {
    let title = "Recent Work:";
    return (
      <div id="portfolio" className="portfolio-area ptb--120 about-area">
        <div className="portfolio-sacousel-inner mb--55">
          <React.Fragment>
            <div className="portfolio-wrapper align-items-center">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title">
                      <h2>{title}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-slick-activation mt--70 mt_sm--40">
                <Slider {...portfolioSlick2}>
                  {PortfolioList.map((value, index) => (
                    <div className="portfolio" key={index}>
                      <div className="thumbnail-inner">
                        <div className={`thumbnail ${value.image}`}></div>
                        <div className={`bg-blr-image ${value.image}`}></div>
                      </div>
                      <div className="content">
                        <div className="inner innerPortfolioText">
                          <h4>{value.title}</h4>
                          <p>{value.category}</p>
                          <div className="portfolio-button">
                            <a
                              className="rn-btn"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={value.href1}
                            >
                              View Code (GitHub)
                            </a>
                          </div>
                          <div className="portfolio-button">
                            <a
                              className="rn-btn"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={value.href2}
                            >
                              Visit Website
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default PortfolioSlider;
