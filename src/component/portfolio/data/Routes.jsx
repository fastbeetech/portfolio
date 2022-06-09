import React from "react";
import Home from "../Home"
import About from "../About"
import Contact from "../Contact"

const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    exact: true,
    path: "/about",
    main: () => <About />,
  },
  {
    path: "/projects",
    main: () => <h2>My project page</h2>,
  },
  {
    path: "/contact",
    main: () => <Contact />,
  },
];

export default Routes;
