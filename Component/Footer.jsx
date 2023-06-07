import React from "react";
import "../Css/FooterStyle.css";

const Footer = () => {
  return (
    <footer>
      <div className="container container-flex">
        <div className="icond">
          <p>Contact</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="line">
          <hr />
          <hr />
        </div>
        <div className="copyright">
          <p>All rights reserved &copy; 2023 </p>
          <p>by Skumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
