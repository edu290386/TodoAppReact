import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../context";

export const TodoCard = ({ todo, index }) => {
  const { toogleTask } = useContext(TodoContext);
  const onToogleTask = (id) => {
    toogleTask(id);
  };

  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
        <td className="whitespace-nowrap px-6 py-4 text-left">
          <div className="flex items-center">
            <input
              onChange={() => onToogleTask(todo.id)}
              type="checkbox"
              className="mr-2 mt-1"
              checked={todo.doneAt !== null ? true : false}
            />
            {todo.title}
          </div>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {JSON.stringify(todo.createdAt.toLocaleDateString("en-US")).replace(
            /["']/g,
            ""
          )}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {todo.doneAt ? (
            <div className="bg-green-500 rounded-sm px-2 pb-1 w-16">Done</div>
          ) : (
            <div className="w-16">Pending</div>
          )}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className="bg-neutral-800 rounded-sm px-2 pb-1">
            <Link
              to={`/task/${index + 1}`}
              className="text-white transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200"
            >
              More info
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};
