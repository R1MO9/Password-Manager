import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    <span>CodeBucks</span>
                    {/* <i className="fas fa-code"></i> */}
                    <span className="icon">
                    </span>
                </NavLink>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink
                        // exact
                        to="/"
                        // activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                        // exact
                        to="/manage-password"
                        // activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                        >
                            Manage Password
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                        // exact
                        to="/about"
                        //  activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                        // exact
                        to="/login"
                        // activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                        >
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                        // exact
                        to="/register"
                        // activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>
            <div className="nav-icon" onClick={handleClick}>
                {
                    click ? <RiCloseFill /> : <RiMenu3Fill />
                }
            </div>
        </div>
    </nav>
    </>
  );
}

export default Header;