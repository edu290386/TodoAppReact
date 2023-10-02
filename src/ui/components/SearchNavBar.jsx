import { TodoContext } from "../../todos/context";
import { useForm } from "../../todos/hooks/useForm";
import { useContext } from "react";

export const SearchNavBar = () => {
  const { searchTodos } = useContext(TodoContext);
  const { search, onInputChange } = useForm({});
 

  const searchTasks = (e) => {
    e.preventDefault();
    searchTodos(search);

  };

  return (
    <form
      onSubmit={searchTasks}
      className="ml-5 flex w-[30%] items-center justify-between"
    >
      <input
        type="search"
        className="m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.25rem] font-normal leading-[1.6] text-neutral-700 outline-none focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
        placeholder="Search task"
        onChange={onInputChange}
        name="search"
        value={search || ""}
        aria-label="Search"
        aria-describedby="button-addon2"
      />
    </form>
  );
};
