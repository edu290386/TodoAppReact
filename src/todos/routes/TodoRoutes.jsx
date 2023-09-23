import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { AchievementPage, GoalPage, HomePage, SearchPage, TaskPage } from "../pages";

export const TodoRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="m-4">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/achievements" element={<AchievementPage />} />
          <Route path="/goals" element={<GoalPage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  );
};
