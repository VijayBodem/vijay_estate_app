import React, { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logoo.png" alt="logo" />
          <span>VijayEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">
          Sign Up
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            onClick={() => setOpenMenu((prev) => !prev)}
            alt=""
          />
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
