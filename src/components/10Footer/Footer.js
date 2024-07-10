import { React, memo, useState } from "react";
import "./Footer.css";
import { Footers } from "../../data/data";
import axios from "axios";
/**
 * Footer Component
 *
 * This component renders the footer of the page. It displays the social media links, contact form,
 * and company information.
 */
const Footer = memo(() => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(Footers.webhook_url, {
        content: `Email: ${email}\nMessage: ${message}`,
      });

      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    // Main footer container
    <footer id="footer">
      <div className="social-links">
        {/* Footer logo */}
        <div className="footer_logo">
          <img className="footer-logo" loading="lazy" src="/group-36-1.svg" />
          <img className="footer-logo-text" loading="lazy" src="/swift-1.svg" />
        </div>

        {/* Social media links */}
        <div className="footer_socials">
          {Footers.socials.map((footer) => (
            // Render a link for each social media link
            <a
              href={footer.href}
              target="_blank"
              rel="noreferrer"
              key={footer.index}
            >
              <img
                className=""
                loading="lazy"
                src={footer.image}
                alt="social-icon"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="form">
        {/* Contact form */}
        <form className="main-form" onSubmit={handleSubmit}>
        <input
          className="text-field mail-field"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="text-field message-field"
          placeholder="Enter your message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className="contact-button" type="submit">
          <div>Contact us</div>
        </button>
      </form>
        <div className="about-us">
          {/* Company information */}
          <div className="footer_title">
            <b className="lh-24">Company</b>
            <div>
              <div className="lh-24"><a>Home</a></div>
              <div className="lh-24"><a>Work</a></div>
              <div className="lh-24"><a>About Us</a></div>
            </div>
          </div>

          {/* Contact information */}
          <div className="footer_title">
            <b className="lh-24">Contact Us</b>
            <div>
              {/* Phone number */}
              <div className="image-assembler">
                <img loading="lazy" src="/call.svg" alt="Phone icon" />
                <a href={`tel:+977${Footers.contact.phone}`}>
                  +977 {Footers.contact.phone}
                </a>
              </div>
              {/* Email */}
              <div className="image-assembler">
                <img loading="lazy" src="/mail.svg" alt="Email icon" />
                <a
                  href={`mailto:${Footers.contact.email}`}
                >
                  {Footers.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footnote */}
      <div className="foot-note">
        <strong>Made with 💚 by Niyalo</strong>
        <p className="">© 2023 Swift. All rights reserved. </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
