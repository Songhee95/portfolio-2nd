import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  const [clicked, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!clicked);
  const closeMobileMenu = () =>setClick(false);

  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <ul className="nav">
              <Link to='/github' target="_blank" className="navbar-brand">
              <i className="fab fa-github"></i>
              </Link>
              <Link to='/linkedIn' target="_blank" className="navbar-brand">
              <i className="fab fa-linkedin"></i>
              </Link>
              <li className="navbar-brand name" onClick={closeMobileMenu}>
                SONGHEE
              </li>
            </ul>
            {/* close icon in mobile menu */}
            <div className="menu-icon" onClick={handleClick}>
              <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
            </div>
            {/* List of Nav items  */}
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/files/resume_Songhee.pdf" target="_blank" download className="nav-links" onClick={closeMobileMenu}>
                  <i className="fas fa-download"></i> RESUME
                </Link>
              </li>
              <li className="nav-item">
                <a href="mailto:thdgml5537@gmail.com" className="nav-links" onClick={closeMobileMenu}>
                  <i className="fas fa-paper-plane"></i> HIRE ME
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </> 
  );
}

export default Navbar;
