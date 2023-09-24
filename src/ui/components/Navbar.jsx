import { NavLink, useNavigate } from "react-router-dom";
import { TodoContext } from "../../todos/context";
import { useContext } from "react";

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
          <div className="ml-5 flex w-[30%] items-center justify-between">
            <input
              type="search"
              className="m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.25rem] font-normal leading-[1.6] text-neutral-700 outline-none focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
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
