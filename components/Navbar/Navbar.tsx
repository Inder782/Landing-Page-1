import Link from "next/link";
import React from "react";
import "./styles.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/" className="title">
        flowt
      </Link>
      <Link href="/" className="links">
        Home
      </Link>
      <Link href="/" className="links">
        Solutions
      </Link>
      <Link href="/" className="links">
        Pricing
      </Link>
      <Link href="/" className="links">
        Developers
      </Link>
      <div className="button">
        <button className="login_btn">Log In</button>
        <button className="publish_btn">Publish App</button>
      </div>
    </div>
  );
};

export default Navbar;
