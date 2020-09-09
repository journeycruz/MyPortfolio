import React from "react";
import { css } from "emotion";
import emailjs from 'emailjs-com';


const input = css`
 background: #bacfe6;
`

export default function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_8gpom8u', e.target, 'user_YR4oY7ZbrSRXqxpG8og64')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
      }
    render(){
        return (
            <div id="contact" className="contact-form--1 bgDark">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-12 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Hire Me</h2>
                                <p className="description">Let's get to work. Email me at: journey.cruz@gmail.com</p>
                            </div>
                            <div className="form-wrapper">

                                <form onSubmit={sendEmail}>
                                    <label htmlFor="item01">
                                        Name:
                                        <input className={input}
                                            type="text"
                                            name="name"
                                            id="item01"
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        Email:
                                        <input className={input}
                                            type="text"
                                            name="email"
                                            id="item02"
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        Subject:
                                        <input className={input}
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        Message:
                                        <textarea className={input}
                                            type="text"
                                            id="item04"
                                            name="message"
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactForm;