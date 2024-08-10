import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { isTokenExpired } from "../../../Utils/TokenDecode.js";

function Header() {
    const navigate = useNavigate();
    const [isTokenValid, setIsTokenValid] = useState(false);
    const [click, setClick] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsTokenValid(!isTokenExpired(token));
        } else {
            navigate('/login')
        }
    }, [navigate]);


    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setIsTokenValid(false);
    };

    return (
    <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    <span>SecureVault</span>
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
                    {
                        !isTokenValid ? 
                        (
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
                            
                        ) : (
                            <li className="nav-item">
                                <NavLink
                                    // exact
                                    // activeClassName="active"
                                    className="nav-links"
                                    onClick={handleLogout}
                            >
                                    Logout
                                </NavLink>
                            </li>
                        )
                    }
                    
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