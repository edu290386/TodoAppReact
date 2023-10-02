import { Navigate, useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../context";
import { useContext } from "react";

export const TaskPage = () => {
  const { todos } = useContext(TodoContext);
  const { taskIndex } = useParams();
  const navigate = useNavigate();

  const detailTask = todos.find(
    (todo, index) => index + 1 === Number(taskIndex)
  );

  if (!detailTask) {
    return <Navigate to="/home" />;
  }
  
  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center h-[calc(100vh-100px)]">
      <div className="p-8 pt-6 mx-auto flex flex-col gap-8 items-center justify-center  border-solid border-2 rounded shadow-sm">
        <h1 className="text-4xl font-extrabold capitalize">
          {detailTask?.title}
        </h1>
        <ul>
          <li>
            <span>Created at:</span>&nbsp;&nbsp;
            <span className="text-base font-normal leading-tight text-gray-500 ">
              {JSON.stringify(
                detailTask.createdAt.toLocaleString("en-US")
              ).replace(/["']/g, "")}
            </span>
          </li>
          {detailTask.doneAt && (
            <li>
              <span>Done at:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-base font-normal leading-tight text-gray-500 ">
                {JSON.stringify(
                  detailTask?.doneAt?.toLocaleString("en-US")
                ).replace(/["']/g, "")}
              </span>
            </li>
          )}
        </ul>
        <button
              type="button"
              className="bg-blue-500 text-white font-bold mx-3 py-1 px-4 rounded"
              onClick={onNavigateBack}
            >
              Back
            </button>
      </div>
    </div>
  );
};
