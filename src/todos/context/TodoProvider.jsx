import { useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  
  const onAddTask = (task) => {
    setTodos([...todos, task]);
  };
  
  const toogleTask = ( id ) => {
    const newTodos = todos.map( todo => {
        if(todo.id === Number(id)) {
            return {...todo, doneAt: !todo.doneAt}
        }
        return todo;
    })
    setTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{ todos, onAddTask, toogleTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
