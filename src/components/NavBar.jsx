import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedSabres } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import logo from "../assets/img/mlogo.png";

import "./NavBar.css";

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <img src={logo} alt="Logo" />
        
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <NavLink to="/">Home </NavLink>
        </li>
        <li className="p__opensans">
        <NavLink to="/about">About </NavLink>
        </li>
        <li className="p__opensans">
        <NavLink to="/pricing">Pricing </NavLink>
        </li>
        <li className="p__opensans">
        <NavLink to="/agreement">Agreement </NavLink>
        </li>
        <li className="p__opensans">
        <NavLink to="/faqs">FAQ's </NavLink>
        </li>
        <li className="p__opensans">
        <NavLink to="/blogs">Blogs </NavLink>
        </li>
      
        
    
        
      </ul>

      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="black"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-down">
            <GiCrossedSabres
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <NavLink to="/" onClick={() => setToggleMenu(false)}>
                  
                  <a style={{textDecoration:"none", color:"black"}}>Home</a>
                </NavLink>
              </li>
              <li>
              <NavLink to="/about" onClick={() => setToggleMenu(false)}>
                  
                  <a style={{textDecoration:"none", color:"black"}}>About</a>
                </NavLink>
              </li>


              <li>
              <NavLink to="/pricing" onClick={() => setToggleMenu(false)}>
                  
                  <a style={{textDecoration:"none", color:"black"}}>Pricing</a>
                </NavLink>
              </li>
              <li>
              <NavLink to="/agreement" onClick={() => setToggleMenu(false)}>
                  
                  <a style={{textDecoration:"none", color:"black"}}>Agreement</a>
                </NavLink>
              </li>
              <li>
              <NavLink to="/faqs" onClick={() => setToggleMenu(false)}>
                  
                  <a style={{textDecoration:"none", color:"black"}}>FAQ's</a>
                </NavLink>
              </li>
              <li>
              <NavLink to="/blogs" onClick={() => setToggleMenu(false)}>
                  
                  <a style={{textDecoration:"none", color:"black"}}>Blogs</a>
                </NavLink>
              </li>
              
              
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
