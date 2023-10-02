import { useContext } from "react";
import { FormTask, TodoList } from "../components";
import { TodoContext } from "../context";

export const HomePage = () => {
  const { todos, searchTasks } = useContext(TodoContext);
console.log(searchTasks)
  return (
    <>
      <div className="flex flex-col justify-center align-center border-2 m-4 rounded-lg mx-auto">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-2xl py-4">To Do List</h1>
          <FormTask />
        </div>
        {searchTasks.length > 0 && (
          <div className="flex justify-center align-center border-2 m-4 mb-10 rounded-lg min-w-[50%] mx-auto">
            <TodoList todos={searchTasks} />
          </div>
        )}
        {todos.length > 0 && (
          <div className="flex justify-center align-center border-2 m-4 mb-10 rounded-lg min-w-[50%] mx-auto">
            <TodoList todos={todos} />
          </div>
        )}
      </div>
    </>
  );
};
