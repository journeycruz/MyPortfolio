import React, { Component } from "react";
import Slider from "react-slick";

const portfolioSlick2 = {
    infinite: true,
    slidesToShow: 5,
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
        category: 'ReactJS',
        title: 'Employee Directory',
        href: 'https://notesappexpress.herokuapp.com/'
    },
    {
        image: 'image-2',
        category: 'Node.js',
        title: 'README Generator',
        href: 'https://notesappexpress.herokuapp.com/'
    },
    {
        image: 'image-6',
        category: 'MySQL, Sequelize, Node.js, Bootstrap, CSS3, HTML5',
        title: 'Password Genie',
        href: 'https://notesappexpress.herokuapp.com/'
    },
    {
        image: 'image-4',
        category: 'Node.js, Express.js',
        title: 'Note Taker',
        href: 'https://notesappexpress.herokuapp.com/',
    },
    {
        image: 'image-3',
        category: 'Open Weather API, Bootstrap, CSS3',
        title: 'Weather Tracker',
        href: 'https://notesappexpress.herokuapp.com/'
    },
    {
        image: 'image-5',
        category: 'OOP, Inquirer, Jest',
        title: 'Team Organizer',
        href: 'https://notesappexpress.herokuapp.com/'
    }
]

class PortfolioSlider extends Component {
    render(){
        let title = 'Recent Projects',
        description = 'Click on a link below to view the GitHub repository for that project.';
        return (
            <div id="portfolio" className="portfolio-area ptb--120 bgDark">
            <div className="portfolio-sacousel-inner mb--55">
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
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
                                            <p>{value.category}</p>
                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href={value.href}>Case Study</a>
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