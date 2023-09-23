export const HomePage = () => {
  return (
    <>
      <div className="flex justify-center align-center border-2 m-4 rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-2xl py-4">To Do List</h1>
          <section className="mb-6">
            <input className="p-2 border-2 rounded w-96" type="text" placeholder="Write task" />
          </section>
        </div>
      </div>
    </>
  );
};
