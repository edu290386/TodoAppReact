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
      doneAt: null,
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
        className="m-0 block w-96 flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.25rem] font-normal leading-[1.6] text-neutral-700 outline-none focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
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
