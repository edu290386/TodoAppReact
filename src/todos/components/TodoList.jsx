import { TodoCard } from "./TodoCard";

export const TodoList = (props) => {
  const { todos } = props;

  return (
    <>
      { (todos.length > 0) && (<div className="flex flex-col mb-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden ">
              <table className="min-w-full text-sm font-light text-center">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Created
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo, index) => (
                    <TodoCard key={todo.id} todo={todo} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>) }
    </>
  );
};
