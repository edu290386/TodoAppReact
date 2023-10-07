import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchTask, setSearchTask] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onAddTask = (task) => {
    setTodos([...todos, task]);
  };

  const toogleTask = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === Number(id)) {
        const toogleDoneAt = todo.doneAt ? null : new Date();
        return { ...todo, doneAt: toogleDoneAt };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const searchTodos = (search) => {
    setSearchValue(search);
    const searchTodo = todos.filter((todo) => todo.title.includes(search));
    setSearchTask([...searchTodo]);
  };

  useEffect(() => {
    if (searchValue === "") return;
    searchTodos(searchValue);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, onAddTask, toogleTask, searchTodos, searchTask }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
