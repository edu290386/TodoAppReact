import { Route, Routes } from "react-router-dom";
import { TodoRoutes } from "../todos";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<TodoRoutes />} />
      </Routes>
    </>
  );
};
