import React from 'react'
import image from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../components/css/NavbarComponent.css'

export const NavbarComponent = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
    <Link className="title" to="/">
      <img src={image} width="200" height="100" alt="" />
    </Link>
    <div className="menu" onClick={() => {
      setMenuOpen(!menuOpen);
    }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
    <li>
        <NavLink to={"/services"}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>
          About The Project
        </NavLink>
      </li>
      <li>
        <NavLink to={"/tech"}>
          Tech Stack
        </NavLink>
      </li>
    </ul>
  </nav>
  );
}