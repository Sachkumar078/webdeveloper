import React from "react";
import { NavLink } from "react-router-dom";
import homeImg from "../Images/Dining.png";
import "../Css/HomeAbout.css";
import Same from "./Same.jsx";
const Home = () => {
  return (
    <Same
      title="Dining Table"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
    reprehenderit laborum corrupti, debitis maxime eum, libero, dolore
    dicta quibusdam molestiae maiores velit vero sequi delectus quaerat
    quasi repellat temporibus laudantium."
      imgsrc={homeImg}
      btn="Read More"
    />
  );
};

export default Home;
