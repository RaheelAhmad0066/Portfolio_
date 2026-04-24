import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

// ── Replace these 3 values with your EmailJS credentials ──────────────────────
const EMAILJS_SERVICE_ID  = "service_rmnnaa5";
const EMAILJS_TEMPLATE_ID = "template_p1ktwu4";
const EMAILJS_PUBLIC_KEY  = "dE2V-RlhpLxx0YNBI";
// ──────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { email, message, subject, name } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in Name, Email and Message.");
      return;
    }
    setError("");
    setIsLoading(true);

    const templateParams = {
      from_name:  name,
      from_email: email,
      subject:    subject || "Portfolio Contact",
      message:    message,
      to_email:   "raheelahmad9335@gmail.com",
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setIsLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Something went wrong. Please try again.");
        console.error("EmailJS error:", err);
      });
  };

  return (
    <>
      <h2 className="head-text">
        Take a coffee & <span>chat</span> with <span>me</span>
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:raheelahmad9335@gmail.com" className="p-text">
            raheelahmad9335@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="https://wa.me/923090320565" className="p-text">
            +92 3090320565
          </a>
        </div>
        <div className="app__contact-card">
          <FaLinkedin style={{ fontSize: 28, color: "#0077b5", margin: "0 0.7rem" }} />
          <a
            href="https://www.linkedin.com/in/raheel-ahmad-dev/"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            linkedin.com/in/raheel-ahmad-dev
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex" ref={formRef}>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Subject"
              value={subject}
              onChange={handleChangeInput}
              name="subject"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          {error && (
            <p className="p-text" style={{ color: "red", marginTop: "0.5rem" }}>
              {error}
            </p>
          )}
          <button
            type="button"
            className="portfolio-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
          <p className="p-text" style={{ marginTop: "1rem", color: "#313bac" }}>
            I'll get back to you soon 🙌
          </p>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
