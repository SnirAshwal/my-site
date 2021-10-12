import "./ContactMe.css";
import { BsEnvelopeOpen } from "react-icons/bs";
import { send } from "emailjs-com";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";

function ContactMe() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setToSend({
      ...toSend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      "myLandingPage",
      "LandingPageContact",
      toSend,
      "user_i2pjD71PDtGSN7u9egPLi"
    )
      .then((response) => {
        document
          .getElementById("success-notification")
          .classList.replace("notification-fade-out", "notification-fade-in");

        const changeFadeClass = setTimeout(() => {
          document
            .getElementById("success-notification")
            .classList.replace("notification-fade-in", "notification-fade-out");
          return () => clearTimeout(changeFadeClass);
        }, 3000);
        document.getElementById("contact-me-form").reset();
        return false;
      })

      .catch((err) => {
        document
          .getElementById("error-notification")
          .classList.replace("notification-fade-out", "notification-fade-in");

        const changeFadeClass = setTimeout(() => {
          document
            .getElementById("error-notification")
            .classList.replace("notification-fade-in", "notification-fade-out");
          return () => clearTimeout(changeFadeClass);
        }, 3000);
      });
  };

  return (
    <div className="box-shaddow">
      <div id="Contact-me" className="ContactMe">
        <div className="contact-me-main">
          <div
            id="success-notification"
            className="success-notification notification-fade-out"
          >
            <FaRegCheckCircle size={30} />
            <div>
              <div>Your Message has</div>
              <div>been sent Successfully!</div>
            </div>
          </div>
          <div
            id="error-notification"
            className="error-notification notification-fade-out"
          >
            <VscError size={30} />
            <div>
              <div>Error</div>
              <div>Something went wrong</div>
            </div>
          </div>
          <form
            id="contact-me-form"
            className="contact-me-form"
            onSubmit={handleSubmit}
            method="post"
            encType="text/plain"
          >
            <div className="contact-me-input-details">
              <div className="main-title">
                CONTACT-ME <BsEnvelopeOpen size={30} />
              </div>
              <hr className="title-underline"></hr>
              <p className="form-text">
                send me an email with a description of your intrest and i will
                get back to you as soon as possible
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
                name="from_name"
                onChange={handleChange}
                required
              ></input>
              <br />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
                name="from_email"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="contact-me-input-text">
              <h2 className="textfeild-title">Message</h2>
              <textarea
                id="textfeild"
                className="textfeild"
                placeholder="Type Your Message Here..."
                name="message"
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                LETS WORK TOGETHER!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
