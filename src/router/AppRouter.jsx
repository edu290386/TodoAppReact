import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, AchievementPage, GoalPage } from "../todos";


import { LoginPage } from "../auth";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/achievements" element={<AchievementPage />} />
        <Route path="/goals" element={<GoalPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
