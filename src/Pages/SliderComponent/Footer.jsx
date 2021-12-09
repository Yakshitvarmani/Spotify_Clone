import React from "react";
import Logo from "../HeaderComponent/Logo";

const Footer = () => {
  return (
    <section id="footerBlock">
      <article>
        <div className="spotifyLogo">
          <Logo />
        </div>
        <div className="company">
          <ul>
            <li style={{ color: "grey" }}>Company</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
        </div>
        <div className="communities">
          <ul>
            <li style={{ color: "grey" }}>Communities</li>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>
        <div className="useful">
          <ul>
            <li style={{ color: "grey" }}>Useful Links</li>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div className="socialMedia"></div>
      </article>
    </section>
  );
};

export default Footer;
