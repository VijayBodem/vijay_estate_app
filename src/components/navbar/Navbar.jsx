import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <div className="left">
        <Link href="/" className="logo">
          <img src="/logoo.png" alt="logo" />
          <span>VijayEstate</span>
        </Link>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Agents</Link>
      </div>
      <div className="right">
        <Link href="/">Sign In</Link>
        <Link href="/" className="register">
          Sign Up
        </Link>
        <div className="menuIcon">
          <img
            src="/menu.png"
            onClick={() => setOpenMenu((prev) => !prev)}
            alt=""
          />
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Agents</Link>
          <Link href="/">Sign In</Link>
          <Link href="/">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
