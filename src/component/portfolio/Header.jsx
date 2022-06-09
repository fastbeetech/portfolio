import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Container from "./Container";

const Header = ({ showSidebar }) => {
  function toggleSidebar() {
    setActive(!active);
    console.log("toggleSidebar");
    showSidebar(active);
  }
  const [active, setActive] = useState(true);
  return (
    <div className="">
      <Container className="flex items-center justify-between py-2 px-5">
        <div className="flex items-center sm:justify-between">
          <HiMenuAlt1
            onClick={toggleSidebar}
            className={`mx-2 text-white text-2xl`}
          />
          <h1 className="text-white text-2xl">Abiola Fasanya</h1>
        </div>
        <div>
          <button className="sm:hidden lg:flex bg-orange-500 hover:bg-orange-600 text-white rounded-full px-7 py-2">
            Download CV
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
