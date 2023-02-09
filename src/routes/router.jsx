import SettingsPage from "../pages/SettingsPage";
import DocumentationPage from "../pages/DocumentationPage";
import App from "../components/App";
import {createHashRouter} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import About from "../pages/AboutPage";
import React from "react";
import packageJSON from "../../package.json";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App/>,
      errorElement: <NotFoundPage/>,
      children: [
        {
          path: "",
          element: <HomePage/>,
        },
        {
          path: "/about",
          element: <About/>,
          errorElement: <NotFoundPage/>,
        },
        {
          path: "/settings",
          element: <SettingsPage/>,
          errorElement: <NotFoundPage/>,
        },
        {
          path: "/docs",
          element: <DocumentationPage/>,
          errorElement: <NotFoundPage/>,
        },
      ],
    },
  ],
  {
    basename:
      process.env.NODE_ENV === "production" ? `${packageJSON.name}/` : "/",
  }
);

export default router;
