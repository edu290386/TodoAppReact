import { useContext } from "react";
import { TodoContext } from "../context";
import { TodoList } from "../components";

export const GoalPage = () => {
  const { todos } = useContext(TodoContext);
  const goals = todos.filter((todo) => todo.doneAt === false);
  return (
    <>
      {goals.length > 0 && (
        <div className="flex justify-center align-center border-2 m-4 rounded-lg ">
          <TodoList todos={goals} />
        </div>
      )}
    </>
  );
};
