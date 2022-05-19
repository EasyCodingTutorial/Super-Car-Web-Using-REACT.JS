import "./navbar.css";
import React, { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand fixed-top active"
            : "navbar navbar-expand fixed-top"
        }
      >
        <a href="#" className="navbar-brand">
          <span>E</span>asy Cars
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
