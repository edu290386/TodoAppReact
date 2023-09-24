import { useContext } from "react";
import { TodoContext } from "../context";
import { useForm } from "../hooks/useForm";

export const FormTask = () => {
  const { formState, onInputChange, onResetForm } = useForm();
  const { title } = formState;
  const { onAddTask } = useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === undefined) return;
    const newTask = {
      id: new Date().getTime(),
      title,
      createdAt: new Date(),
      doneAt: false,
    };
    onAddTask(newTask);
    onResetForm();
  };

  return (
    <form className="mb-6 mx-auto" onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        name="title"
        value={title || ""}
        className="p-2 border-2 rounded w-96 "
        type="text"
        placeholder="Write task"
      />
      {/* <input
        onChange={onInputChange}
        name="area"
        value={area || ""}
        className="p-2 border-2 rounded w-96"
        type="text"
        placeholder="Write task"
      /> */}
    </form>
  );
};
