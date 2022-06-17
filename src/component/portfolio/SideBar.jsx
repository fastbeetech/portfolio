import { NavLink } from "react-router-dom";
import Container from "./Container";
import Sidebar from "./data/sidebar";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const SideBar = (props) => {
  const [close, setClose] = useState(false);
  return (
    <div
      className={`${props.className} ${
        close ? "hidden" : ""
      } lg:w-[200px] sm:w-[100%] lg:h-screen lg:static sm:fixed sm:top-0 bg-zinc-700`}
    >
      <Container className="">
        <header className="mx-auto bg-black flex items-center lg:py-1 sm:py-2 justify-between cursor-pointer mb-3 lg:px-2 sm:px-5 text-center lg:text-2xl sm:text-lg text-zinc-400 font-bold uppercase">
          Harbiola
          <AiOutlineClose
            className="ml-2 text-red-500 hover:text-red-600 sm:text-2xl"
            onClick={() => setClose(!close)}
          />
        </header>
        <nav>
          <ul className="flex flex-col sm:text-center">
            {Sidebar.menu.map((item, index) => {
              return (
                // <li key={index} className="my-2 w-full">
                <NavLink
                  key={index}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 block bg-black px-3 py-2 my-2"
                      : "px-3 py-2 bg-inherit text-zinc-400 my-2"
                  }
                >
                  {item.label}
                </NavLink>
                // </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default SideBar;
