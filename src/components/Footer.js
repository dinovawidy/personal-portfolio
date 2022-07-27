import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <GitHubIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2022 dinovaw</p>
    </div>
  );
};

export default Footer;
