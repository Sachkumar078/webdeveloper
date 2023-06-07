import React from "react";
import { NavLink } from "react-router-dom";
import Pooja from "../Images/Pooja.png";
const Card = () => {
  return (
    <>
      <div className="card">
        <h2>Furniture House</h2>
        <img src={Pooja} alt="Pooja" className="serviceImg" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          nobis
        </p>
        <div className="btnBox">
          <button className="btn">
            <NavLink to="/about" className="readMore">
              Services
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
