import React from 'react';
import {render, screen} from "@testing-library/react";
import * as ReactDOMClient from "react-dom/client";
import App from "../components/App";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";
import NotFoundPage from "../pages/NotFoundPage";

jest.mock("../components/navbar/Navbar");
jest.mock("../components/navbar/Footer");
jest.mock("../pages/NotFoundPage");

let container;
container = document.createElement("div");
document.body.appendChild(container);
const root = ReactDOMClient.createRoot(container);

afterAll(() => {
  root.unmount();
  document.body.innerHTML = "";
});

afterAll(() => {
  jest.unmock("../components/navbar/Navbar");
  jest.unmock("../components/navbar/Footer");
  jest.unmock("../pages/NotFoundPage");
});

describe("App Tests", () => {
  it("should render the Navbar and the home page when no route is provided", () => {
    Footer.mockImplementation(() => <div>FooterMock</div>);
    Navbar.mockImplementation(() => <div>NavbarMock</div>);
    NotFoundPage.mockImplementation(() => <div>NotFoundPageMock</div>);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    render(<App/>);

    expect(screen.getByText("NavbarMock")).toBeInTheDocument();
    expect(screen.getByText("FooterMock")).toBeInTheDocument();
    expect(screen.queryByText("NotFoundPageMock")).not.toBeInTheDocument();
  });

  // TODO: add test for empty and wrong categories when they are implemented through the backend
});
