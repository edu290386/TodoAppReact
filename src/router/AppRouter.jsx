import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../todos/pages/HomePage";
import { AchievementPage } from "../todos/pages/AchievementPage";
import { GoalPage } from "../todos/pages/GoalPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/achievements" element={<AchievementPage />} />
        <Route path="/goals" element={<GoalPage />} />
        <Route path="login" element={<LoginPage />}/>
        <Route path="/" element={<Navigate to="/home" />}/>
      </Routes>
    </>
  );
};
