import React from "react";
import { NavLink } from "react-router-dom";
import Pooja from "../Images/Pooja.png";
import "../Css/ServiceStyle.css";
import Card from "./Card";
const Services = () => {
  return (
    <>
      <h1>Our Services</h1>
      <div className="services">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Services;
