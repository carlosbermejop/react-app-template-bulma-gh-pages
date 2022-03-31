import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };
  return (
    <nav
      className="navbar is-fixed-top has-shadow is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a
          role="button"
          className={isActive ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="basicNavbar"
          onClick={toggleActive}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="basicNavbar"
        className={isActive ? "navbar-menu is-active" : "navbar-menu"}
      >
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to={"/"}>Inicio</Link>
          </div>
          <div className="navbar-item">
            <Link to={"/settings"}>Ajustes</Link>
          </div>
          <div className="navbar-item">
            <Link to={"/docs"}>Documentación</Link>
          </div>
          <div className="navbar-item">
            <Link to={"/about"}>Acerca de</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
