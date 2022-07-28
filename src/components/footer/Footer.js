import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h1 className="fTitle">Save time, save money!</h1>
        <span className="fDesc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="signUpContainer">
          <input type="text" placeholder="Your Email"></input>
          <button> Subscribe</button>
        </div>
      </div>
      <div className="copyright">
        <h6>
          Copyright &copy; 2022 MR Booking<sup>TM</sup>. All rights reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
