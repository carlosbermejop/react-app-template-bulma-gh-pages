import React from 'react';
import gitHubLogo from "../../assets/img/GitHub-Mark-Light-32px.png";
import mailLogo from "../../assets/img/Mail-Icon-White-on-Black.png";
import twitterLogo from "../../assets/img/2021-Twitter-logo-white.png";
import linkedInLogo from "../../assets/img/linkedin-icon-white.png";

const Footer = () => (<nav className="navbar is-dark is-fixed-bottom">
  <div className="navbar-brand">
    <a
      className="navbar-item"
      href="https://github.com/carlosbermejop"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src={gitHubLogo}
        width="32"
        height="32"
        alt="https://github.com/carlosbermejop"
      />
    </a>
    <a
      className="navbar-item"
      href="https://twitter.com/Carlos_BWE"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img src={twitterLogo} width="32" alt="@Carlos_BWE"/>
    </a>
    <a
      className="navbar-item"
      href="https://www.linkedin.com/in/carlos-bermejo-p%C3%A9rez-82442437/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src={linkedInLogo}
        width="32"
        alt="https://www.linkedin.com/in/carlos-bermejo-p%C3%A9rez-82442437/"
      />
    </a>
    <a
      className="navbar-item"
      href="mailto:carlosbermejop@gmail.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src={mailLogo}
        width="34"
        height="37"
        alt="mailto:carlosbermejop@gmail.com"
      />
    </a>
    <a className="navbar-item" href="https://bulma.io" target="_blank" rel="noreferrer noopener">
      <img
        src="https://bulma.io/images/made-with-bulma.png"
        alt="Made with Bulma"
        width="128"
        height="24"
      />
    </a>
  </div>
</nav>);

export default Footer;