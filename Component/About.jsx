import React from "react";
import { NavLink } from "react-router-dom";
import Bed2 from "../Images/Bed2.png";
import Same from "./Same.jsx";
const About = () => {
  return (
    <Same
      title="Know more about us"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
reprehenderit laborum corrupti, debitis maxime eum, libero, dolore
dicta quibusdam molestiae maiores velit vero sequi delectus quaerat
quasi repellat temporibus laudantium."
      imgsrc={Bed2}
      btn="Know More"
    />
  );
};

export default About;
