import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [thankYouDisplayed, setThankYouDisplayed] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendMessage = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formValues.name,
      message: formValues.message,
      reply_to: formValues.email,
    };

    emailjs.send(
      "service_3637lis",
      "template_l8j28lo",
      templateParams,
      "user_4yd3QPeis99cVN9odcI5s"
    );

    setFormValues({
      name: "",
      email: "",
      message: "",
    });

    setThankYouDisplayed(true);
  };

  return (
    <div id="contact" className="contact">
      <div className="custom-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div id="contact-title" className="section-title">
        <h2>Find out how we can work together</h2>
        <h1>Contact Me</h1>
        <p>TimKrauseDev@gmail.com</p>
      </div>
      {!thankYouDisplayed && (
        <form className="contact-form" onSubmit={sendMessage}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="name"
              name="name"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              type="message"
              name="message"
              value={formValues.message}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
              className="form-control"
              placeholder="Message me"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {thankYouDisplayed && (
        <div className="thankyou">
          <p>
            Thank you for getting in touch! I'll get back to you as soon as
            possible!
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
