import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const value = useContext(TaskContext);
  const { createTask } = useContext(TaskContext);

  function handleSubmit(e) {
    // console.log(title, description);
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  }
  return (
    <div className="max-w-md mx-auto">
     
      <form onSubmit={handleSubmit} className="bg-red-900 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
        <input
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        ></input>
        <textarea
          placeholder="Write your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button
          className="bg-indigo-500 px-3 py-1 text-white"
        >Enviar</button>
      </form>
    </div>
  );
}

export default TaskForm;
