import { NavLink } from "react-router-dom";
import Container from "./Container";
import Sidebar from "./data/sidebar";


const SideBar = (props) => {
  return (
    <div className={props.className + " h-screen bg-zinc-500"}>
      <Container>
        <header className="mb-3 text-center text-2xl text-orange-500 font-bold uppercase bg-black">Harbiola</header>
        <nav>
          <ul className="flex flex-col">
            {Sidebar.menu.map((item, index) => {
              return (
                <li key={index} className="my-2 w-full">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "text-zinc-900 block bg-zinc-200 px-3 py-2" :
                       "px-3 py-2 bg-zinc-500"
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
