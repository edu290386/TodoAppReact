import { useState } from "react";
import { FormTask, TodoList } from "../components";

export const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos([...todos, task]);
  };

  console.log(todos)
  
  return (
    <>
      <div className="flex flex-col justify-center align-center border-2 m-4 rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-2xl py-4">To Do List</h1>
          <FormTask onAddTask={addTask} />
        </div>
        {todos.length > 0 && <div className="flex justify-center align-center border-2 m-4 rounded-lg ">
          <TodoList todos={todos} />
        </div>}
        
      </div>
    </>
  );
};
