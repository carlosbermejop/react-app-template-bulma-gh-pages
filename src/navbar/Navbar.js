/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  const { t, i18n } = useTranslation();

  return (
    <nav
      className="navbar is-fixed-top has-shadow is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
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
            <Link to={"/"} className="has-text-white">
              {t("navbar.homepageItem")}
            </Link>
          </div>
          <div className="navbar-item">
            <Link to={"/settings"} className="has-text-white">
              {t("navbar.settingsItem")}
            </Link>
          </div>
          <div className="navbar-item">
            <Link to={"/docs"} className="has-text-white">
              {t("navbar.docsItem")}
            </Link>
          </div>
          <div className="navbar-item">
            <Link to={"/about"} className="has-text-white">
              {t("navbar.aboutItem")}
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">{t("navbar.languagesItem")}</a>
            <div className="navbar-dropdown">
              <a
                className="navbar-item"
                onClick={() => {
                  i18n.changeLanguage("es");
                }}
              >
                Español
              </a>
              <a
                className="navbar-item"
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                English
              </a>
              <a
                className="navbar-item"
                onClick={() => {
                  console.log(i18n.language);
                  return i18n.changeLanguage("fr");
                }}
              >
                Français
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
