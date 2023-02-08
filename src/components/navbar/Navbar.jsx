import React from 'react';
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  const {t, i18n} = useTranslation();

  return (
    <nav
      className="navbar is-fixed-top has-shadow is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div
          role="button"
          className={isActive ? "navbar-burger has-background-dark is-active" : "navbar-burger has-background-dark"}
          aria-label="menu"
          aria-expanded="false"
          data-target="basicNavbar"
          onClick={toggleActive}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div
        id="basicNavbar"
        className={isActive ? "navbar-menu has-background-dark is-active" : "navbar-menu has-background-dark"}
      >
        <div className="navbar-start">
          <div className="navbar-item is-tab">
            <Link to={"/"} className="has-text-white">
              {t("navbar.homepageItem")}
            </Link>
          </div>
          <div className="navbar-item is-tab">
            <Link to={"/settings"} className="has-text-white">
              {t("navbar.settingsItem")}
            </Link>
          </div>
          <div className="navbar-item is-tab">
            <Link to={"/docs"} className="has-text-white">
              {t("navbar.docsItem")}
            </Link>
          </div>
          <div className="navbar-item is-tab">
            <Link to={"/about"} className="has-text-white">
              {t("navbar.aboutItem")}
            </Link>
          </div>
        </div>
        <div className="navbar-end has-background-dark">
          <div className="navbar-item has-dropdown is-hoverable ">
            <div className="navbar-link has-text-white">{t("navbar.languagesItem")}</div>
            <div className="navbar-dropdown has-background-dark">
              <div
                className="navbar-item has-text-white is-clickable"
                onClick={async () => {
                  await i18n.changeLanguage("es");
                }}
              >
                Español
              </div>
              <div
                className="navbar-item has-text-white is-clickable"
                onClick={async () => {
                  await i18n.changeLanguage("en");
                }}
              >
                English
              </div>
              <div
                className="navbar-item has-text-white is-clickable"
                onClick={async () => {
                  await i18n.changeLanguage("fr");
                }}
              >
                Français
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;