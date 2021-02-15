import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollNav from './ScrollNav';
import "./Navbar.css";


function Navbar() {
  const [clicked, setClick] = useState(false);

  const handleClick = () => setClick(!clicked);
  const closeMobileMenu = () =>setClick(false);

  return (
    <>
      <div id="home">
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
              <ScrollNav closeMobileMenu={closeMobileMenu}/>
            </ul>

          </div>
        </nav>
      </div>
    </> 
  );
}

export default Navbar;
