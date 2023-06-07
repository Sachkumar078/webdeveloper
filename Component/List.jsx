import React from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import "../Css/ListStyle.css";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// import whatsapp from "../Images/whatsapp.png";
// // import FacebookIcon from "@mui/icons-material/Facebook";
// // import InstagramIcon from "@mui/icons-material/Instagram";
// // import PhoneIcon from "@mui/icons-material/Phone";
const List = () => {
  return (
    <header>
      <div className="container container-flex">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav>
          <div className="list">
            <NavLink
              exact
              to="/"
              className="listItem"
              activeClassName="activeItems"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="listItem"
              activeClassName="activeItems"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="listItem"
              activeClassName="activeItems"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="listItem"
              activeClassName="activeItems"
            >
              Contact
            </NavLink>
            <NavLink
              to="/blog"
              className="listItem"
              activeClassName="activeItems"
            >
              Blog
            </NavLink>
          </div>
        </nav>
        <div className="icons">
          {/* <WhatsAppIcon /> */}
          {/* <img src={whatsapp} alt="whatsapp" className="whatsapp" /> */}
        </div>
      </div>
    </header>
  );
};

export default List;
