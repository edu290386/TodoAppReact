import { AppRouter } from "./router/AppRouter";
import TodoProvider from "./todos/context/TodoProvider";

export const TodoApp = () => {


  
  return (
    <>
      <TodoProvider>
      <AppRouter />
      </TodoProvider>
      
  
    </>
  );
};
