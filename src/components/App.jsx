import React from 'react';
import Navbar from "./navbar/Navbar";
import Footer from "./navbar/Footer";
import {useTranslation} from "react-i18next";
import {Outlet} from "react-router-dom";

const App = () => {
  const {t} = useTranslation();
  document.title = t("homepage.title");

  return (
    <React.StrictMode>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </React.StrictMode>
  );
}

export default App;
