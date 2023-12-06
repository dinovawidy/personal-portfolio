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
        <InstagramIcon onClick={() => window.open("https://www.instagram.com/dinovawidy/")} />
        <GitHubIcon onClick={() => window.open("https://github.com/dinovawidy")} />
        <FacebookIcon onClick={() => window.open("https://www.facebook.com/dino.dasilva.35/")} />
        <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/dinova-widytianto/")} />
      </div>
      <p onClick={() => window.open("https://dinovaw.tech/")}>&copy; 2023 Dinova Widytianto  </p>
    </div>
  );
};

export default Footer;
