"use client";

import { useState } from "react";
import { Todo } from "@/types/todo";
import TodoList from "./TodoList";

interface TodoFiltersProps {
  todos: Todo[];
}

export default function TodoFilters({ todos }: TodoFiltersProps) {
  const [userId, setUserId] = useState("");
  const [completed, setCompleted] = useState("");

  const filteredTodos = todos.filter((todo) => {
    const matchUserId = userId ? todo.userId === Number(userId) : true;
    const matchCompleted =
      completed === ""
        ? true
        : completed === "true"
        ? todo.completed
        : !todo.completed;

    return matchUserId && matchCompleted;
  });

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col md:flex-row items-stretch gap-6 mb-8">
        <div className="flex-1">
          <label className="block text-sm font-bold mb-2 text-[#7f5fff] tracking-wide">
            Filter by User ID
          </label>
          <input
            type="number"
            min={1}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border-2 border-[#a18fff] focus:border-[#ffb6ea] focus:ring-2 focus:ring-[#ffb6ea55] bg-white/40 backdrop-blur-md p-3 rounded-xl w-full text-[#7f5fff] font-bold placeholder:text-[#a18fff99] transition-all duration-200 shadow"
            placeholder="e.g. 1"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-bold mb-2 text-[#7f5fff] tracking-wide">
            Completed Status
          </label>
          <select
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
            className="
                border-2 border-[#a18fff]
               focus:border-[#ffb6ea]
               focus:ring-2 focus:ring-[#ffb6ea55]
               bg-white/40 backdrop-blur-md
                px-3 py-3 pr-10
               rounded-xl w-full
               text-[#7f5fff] font-bold
               transition-all duration-200 shadow"
          >
            <option value="">All</option>
            <option value="true">Completed</option>
            <option value="false">Incomplete</option>
          </select>
        </div>
      </div>
      <div className="relative w-full bg-white/30 rounded-2xl shadow-xl backdrop-blur-2xl border border-white/40 px-4 py-6 md:px-6 md:py-8">
        <TodoList todos={filteredTodos} />
      </div>
    </div>
  );
}
