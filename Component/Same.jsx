import React from "react";
import { NavLink } from "react-router-dom";
import homeImg from "../Images/Dining.png";
const Same = (props) => {
  return (
    <div className="mainSection">
      <div className="contentBox">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className="btnBox">
          <button className="btn">
            <NavLink to="/about" className="readMore">
              {props.btn}
            </NavLink>
          </button>
        </div>
      </div>
      <div className="imgContainer">
        <img src={props.imgsrc} alt="logo" />
      </div>
    </div>
  );
};

export default Same;
