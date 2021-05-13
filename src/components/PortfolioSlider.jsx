import React, { Component } from "react";
import Slider from "react-slick";

const portfolioSlick2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [{
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 993,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 481,
        settings: {
            slidesToShow: 1,
        }
    }
]
};

const PortfolioList = [

    {
        image: 'image-1',
        category: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo tortor a ex lacinia malesuada.',
        title: 'Employee Directory',
        href1: 'https://github.com/journeycruz/React_Employee_Directory',
        href2: 'https://github.com/journeycruz/React_Employee_Directory'
    },
    {
        image: 'image-6',
        category: 'MySQL, Sequelize, Node.js, Bootstrap, CSS3, HTML5',
        title: 'Password Genie',
        href1: 'https://github.com/noahnr/Password_Genie',
        href2: 'https://github.com/journeycruz/React_Employee_Directory'
    },
    {
        image: 'image-4',
        category: 'Node.js, Express.js',
        title: 'Note Taker',
        href1: 'https://notesappexpress.herokuapp.com/',
        href2: 'https://github.com/journeycruz/React_Employee_Directory'
    },
    {
        image: 'image-3',
        category: 'Open Weather API, Bootstrap, CSS3',
        title: 'Weather Tracker',
        href1: 'https://github.com/journeycruz/Weather_OpenWeatherMapAPI',
        href2: 'https://github.com/journeycruz/React_Employee_Directory'
    },
    {
        image: 'image-5',
        category: 'OOP, Inquirer, Jest',
        title: 'Team Organizer',
        href1: 'https://github.com/journeycruz/OOP_Team_Generator',
        href2: 'https://github.com/journeycruz/React_Employee_Directory'
    },
    {
        image: 'image-2',
        category: 'Node.js',
        title: 'README Generator',
        href1: 'https://github.com/journeycruz/Node_README_Generator',
        href2: 'https://github.com/journeycruz/React_Employee_Directory'
    },
    {
        image: 'image-7',
        category: 'MongoDB, Bootstrap, Chat.io',
        title: 'Chess Masta',
        href1: 'https://github.com/shmoesolid/Chess-Masta',
        href2: 'https://github.com/journeycruz/React_Employee_Directory'
    }
]

class PortfolioSlider extends Component {
    render(){
        let title = 'My Work:';
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
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <h4>{value.title}</h4>
                                            <p>{value.category}</p>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" target="_blank" rel="noopener noreferrer" href={value.href1}>View Source Code</a>
                                            </div>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" target="_blank" rel="noopener noreferrer" href={value.href2}>Visit Website</a>
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
        )
    }
}

export default PortfolioSlider;