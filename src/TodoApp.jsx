import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";
import TodoProvider from "./todos/context/TodoProvider";

export const TodoApp = () => {


  
  return (
    <AuthProvider>
      <TodoProvider>
      <AppRouter />
      </TodoProvider>
      
  
    </AuthProvider>
  );
};
