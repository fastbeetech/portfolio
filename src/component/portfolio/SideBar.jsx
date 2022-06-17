import { NavLink } from "react-router-dom";
import Container from "./Container";
import Sidebar from "./data/sidebar";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react"


const SideBar = (props) => {
  const [close, setClose] = useState(false);
  return (
    <div className={`${props.className} ${close ?  'hidden': ''} lg:w-[200px] sm:w-[40%] lg:h-screen lg:static sm:fixed sm:top-[45px] bg-zinc-700`}>
      <Container className="container ">
        <header className="flex items-center justify-between cursor-pointer mb-3 px-2 text-center text-2xl text-orange-500 font-bold uppercase bg-black">
          Harbiola
          <AiOutlineClose  className="ml-2 text-red-500 hover:text-red-600"  
          onClick={() => setClose(!close)}
          />
          </header>
        <nav>
          <ul className="flex flex-col">
            {Sidebar.menu.map((item, index) => {
              return (
                <li key={index} className="my-2 w-full">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "text-orange-600 block bg-black px-3 py-2" :
                       "px-3 py-2 bg-inherit text-zinc-400"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default SideBar;
