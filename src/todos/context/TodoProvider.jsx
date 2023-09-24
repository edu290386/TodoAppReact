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
            const toogleDoneAt = todo.doneAt ? null : new Date();
            return {...todo, doneAt:toogleDoneAt}
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
