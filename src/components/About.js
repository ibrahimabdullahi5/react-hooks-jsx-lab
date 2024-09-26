import React from "react";
import { image } from "../data/data.js"; 

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate web developer with a love for creating dynamic and responsive websites.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;

