import React, { useState } from "react";
import Container from "../component/portfolio/Container";
import Header from "../component/portfolio/Header";
import SideBar from "../component/portfolio/SideBar";
import routes from "./portfolio/data/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./portfolio/Footer";
import AnimatedUrl from "./portfolio/AnimatedUrl";

const Portfolio = () => {
  const showSidebar = (val) => {
    console.log(val);
    setOpenSidebar(val);
  };
  const [openSidebar, setOpenSidebar] = useState();
  return (
    <Router>
      <div className="portfolio">
        <Header showSidebar={showSidebar} />
        <Container className="flex">
          {openSidebar ? <SideBar className="" /> : null}
          <AnimatedUrl routes={routes} />
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default Portfolio;
