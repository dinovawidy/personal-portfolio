import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>👋 Hi there! I'm Dinova</h2>
        <div className="prompt">
          <p><span>💻</span> A passionate Frontend Web Developer with over 1-2 years of hands-on experience. I thrive on creating immersive user experiences using technologies like JavaScript, React.js, Tailwind CSS, Axios, and more.
          🚀 My journey in web development has been both exciting and challenging. I take pride in translating ideas into visually stunning and user-friendly interfaces. I believe in building projects that stand the test of time, providing users with seamless interactions.
        🌐 Currently open to new opportunities and collaborations. Let's connect and explore the possibilities!</p>
          <EmailIcon onClick={() => window.open("mailto:dinovaprogram@gmail.com")} />
          <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/dinova-widytianto/")} />
          <GitHubIcon onClick={() => window.open("https://github.com/dinovawidy")} />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front End</h2>
            <span>HTML, CSS3, React.JS, Sass, NPM, BootStrap, Tailwind CSS, Material UI, Yarn</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJs, ExpressJS, Code Igniter, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C++, Php</span>
          </li>
          {/* 
        <iframe width='610px' height='490px' src='https://crm.zoho.com/crm/WebFormServeServlet?rid=852bfe8b59f31c5c2ad28655774d93b3ecd098787d1f0781a7fd9ddc78ff0117gid55062cc3b902f6a566f593fa176a2f0d9c31453f063afafa6425fd48eeac751d'></iframe>  
          */}

        </ol>
      </div>
    </div>
  );
};

export default Home;
