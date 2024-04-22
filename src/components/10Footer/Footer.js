import { memo } from "react";
import "./Footer.css";
import { Footers } from "../../data/data";
const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="social-links">
        <div className="footer-logo">
          <img className="" loading="lazy" src="/group-36-1.svg" />
          <img className="" loading="lazy" src="/swift-1.svg" />
        </div>

        <div className="footer-socials">
          {Footers.socials.map((footer, index) => (
            <a href={footer.href} target="_blank">
              <img className="" loading="lazy" src={footer.image} />
            </a>
          ))}
        </div>
      </div>

      <div className="form">
        <form className="main-form">
          <input
            className="text-field mail-field"
            placeholder="Enter your email"
            type="text"
          />
          <input
            className="text-field message-field"
            placeholder="Enter your message"
            type="text"
          />
          <button className="contact-button">
            <div>Contact us</div>
          </button>
        </form>
        <div className="about-us">
          <div className="footer-title">
            <b className="lh-24">Company</b>
            <div>
              <div className="lh-24">Home</div>
              <div className="lh-24">Work</div>
              <div className="lh-24">About Us</div>
            </div>
          </div>

          <div className="footer-title">
            <b className="lh-24">Contact Us</b>
            <div>
              <div className="image-assembler">
                <img loading="lazy" src="/call.svg" />
                <div>+977 {Footers.contact.phone}</div>
              </div>
              <div className="image-assembler">
                <img loading="lazy" src="/mail.svg" />
                <div className="emailgmailcom">{Footers.contact.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-note">
        <b>Made with 💚 by Niyalo</b>
        <div className="">© 2023 Swift. All rights reserved. </div>
      </div>
    </footer>
  );
});

export default Footer;