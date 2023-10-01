import { NavLink, useNavigate } from "react-router-dom";
import { TodoContext } from "../todos/context";
import { useContext } from "react";
import { SearchNavBar } from "./components";


export const Navbar = () => {
  const navigate = useNavigate();
  const { todos } = useContext(TodoContext);
  const onLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <NavLink
            className="ml-2 text-2xl font-semibold text-neutral-800 dark:text-neutral-200"
            to="/"
          >
            ToDo
            <div className="ml-2 inline-block">
              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-neutral-600">
                <span className="text-white font-bold text-sm">
                  {todos.length}
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`}
            to="/goals"
          >
            Goals
            <div className="ml-2 inline-block">
              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-neutral-600">
                <span className="text-white font-bold text-sm">
                  {todos.filter((todo) => todo.doneAt === null).length}
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`}
            to="/achievements"
          >
            Achievements
            <div className="ml-2 inline-block">
              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-600">
                <span className="text-white font-bold text-sm">
                  {todos.filter((todo) => todo.doneAt !== null).length}
                </span>
              </div>
            </div>
          </NavLink>
          <SearchNavBar />
          <div>
            <span className="">Eduardo</span>
            <button
              type="button"
              className="bg-blue-500 text-white font-bold mx-3 py-1 px-4 rounded"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
