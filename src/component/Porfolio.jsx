import React, { useState } from "react";
import Container from "../component/portfolio/Container";
import Header from "../component/portfolio/Header";
import SideBar from "../component/portfolio/SideBar";
import routes from "./portfolio/data/Routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Portfolio = () => {
  const showSidebar = (val) => {
    console.log(val)
    setOpenSidebar(val);
  }
  const [openSidebar, setOpenSidebar] = useState();
  return (
    <Router>
      <div className="portfolio">
        <Header showSidebar={showSidebar}/>
        <Container className="flex">
          {openSidebar ? <SideBar className="w-[200px]"/> : null}
          {/* <SideBar className="w-[200px]" active={showSidebar}/> */}
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.main />}
              />
            ))}
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default Portfolio;
