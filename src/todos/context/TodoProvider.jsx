import { useState } from "react";
import { TodoContext } from "./TodoContext";
import { useEffect } from "react";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchTasks, setSearchTasks] = useState([]);
  
  const onAddTask = (task) => {
    setTodos([...todos, task]);
  };
  
  const toogleTask = ( id ) => {
    const newTodos = todos.map( todo => {
        if(todo.id === Number(id)) {
            const toogleDoneAt = todo.doneAt ? null : new Date();
            return {...todo, doneAt:toogleDoneAt}
        }
        return todo;
    })
    setTodos(newTodos)
  }

  const searchTodos = ( search ) => {
    const searchTodos = todos.filter((todo) => todo.title.includes(search))
    setSearchTasks([...searchTasks, ...searchTodos ])
  }
  
  return (
    <TodoContext.Provider value={{ todos, onAddTask, toogleTask, searchTodos, searchTasks }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
