import { useTodos } from "@/Store/todo";
import { FormEvent, useState } from "react";
import Todolist from "./Todolist";

function Addtodo() {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === "") return; // Avoid adding empty todos
    handleAddTodo(todo.trim());
    setTodo("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Your Todo List By Mohid
        </h1>
        <form onSubmit={handlesubmit} className="flex flex-col gap-6">
          <input
            placeholder="What do you want to accomplish?"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className="px-5 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition duration-300"
          >
            Add Task
          </button>
        </form>
        <div className="mt-8">
          <Todolist />
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
