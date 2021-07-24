import React from "react";
import { css } from "emotion";
import emailjs from "emailjs-com";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const input = css`
  background: #f6f6f6;
`;
var whiteTxt = {
  color: "#efefef",
};

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_8gpom8u",
        e.target,
        "user_YR4oY7ZbrSRXqxpG8og64"
      )
      .then(
        (result) => {
          console.log(result.text);
          store.addNotification({
            title: "Message Sent!",
            message: "Message sent! I will get back to you soon.",
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
              pauseOnHover: true,
            },
          });
        },
        (error) => {
          console.log(error.text);
          store.addNotification({
            title: "Sorry, your message could not be sent at this time.",
            message: (error.text),
            type: "danger",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
              pauseOnHover: true,
            },
          });
        }
      );
    e.target.reset();
  }
  return (
    <div id="contact" className="contact-form--1 bg_color--5">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-12 order-2 order-lg-1">
            <div className="section-title text-center mb--50">
              <h2 className="title whiteTitle">Get in Touch.</h2>
              <p className="contact pb-0" style={whiteTxt}>
                Let's build something together.
              </p>
              <p className="contact pt-0" style={whiteTxt}>
                {" "}
                Use the form below to send me an email.
              </p>
            </div>
            <div className="form-wrapper">
              <form onSubmit={sendEmail}>
                <label htmlFor="item01">
                  Name:
                  <input
                    className={input}
                    type="text"
                    name="name"
                    id="item01"
                    placeholder="Your Name*"
                  />
                </label>

                <label htmlFor="item02">
                  Email:
                  <input
                    className={input}
                    type="text"
                    name="email"
                    id="item02"
                    placeholder="Your Email Address*"
                  />
                </label>

                <label htmlFor="item03">
                  Subject:
                  <input
                    className={input}
                    type="text"
                    name="subject"
                    id="item03"
                    placeholder="Subject"
                  />
                </label>
                <label htmlFor="item04">
                  Message:
                  <textarea
                    className={input}
                    type="text"
                    id="item04"
                    name="message"
                    placeholder="Message*"
                  />
                </label>
                <button
                  className="rn-button-style--2 btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  id="mc-embedded-subscribe"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
