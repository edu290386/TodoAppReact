import { Link, useNavigate } from "react-router-dom";

export const TodoCard = ({ todo, index }) => {
  const navigate = useNavigate();
  // const onDetailTask = (index) => {
  //     const url = `./task/${index}`
  //     navigate(url)
  // }
  

  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
        <td className="whitespace-nowrap px-6 py-4 text-left">{todo.title}</td>
        <td className="whitespace-nowrap px-6 py-4">
          {JSON.stringify(todo.createdAt.toLocaleString("en-US")).replace(
            /["']/g,
            ""
          )}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {todo.doneAt ? "Done" : "Pending"}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className="bg-neutral-800 rounded-sm px-2 pb-1">
            <Link to={`/task/${index+1}`} className="text-white transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200">
              More info
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};
