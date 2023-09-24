import { useContext } from "react";
import { TodoContext } from "../context";
import { TodoList } from "../components";

export const AchievementPage = () => {
  const { todos } = useContext(TodoContext);
  const achieves = todos.filter((todo) => todo.doneAt === true);

  return (
    <>
      {achieves.length > 0 && (
        <div className="flex justify-center align-center border-2 m-4 rounded-lg ">
          <TodoList todos={achieves} />
        </div>
      )}
    </>
  );
};
