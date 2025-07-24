"use client";

import { useEffect, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import TodoFilters from "@/components/TodoFilters";
import { Todo } from "@/types/todo";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getTodos(): Promise<Todo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Failed to fetch todos");
  await delay(2000);
  return res.json();
}

export default function TodosPage() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-md flex flex-col items-center mt-8">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,_#fff_0%,_#a18fff44_60%,_transparent_100%)] blur-2xl opacity-70 pointer-events-none z-0" />
          <div className="relative z-10 w-full bg-white/30 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/40 px-8 py-12 flex flex-col items-center">
            <h2 className="text-3xl font-extrabold text-white text-center mb-4 font-montserrat tracking-widest">
              Loading Todos...
            </h2>
            <div className="w-12 h-12 rounded-full border-4 border-[#a18fff] border-t-[#ffb6ea] animate-spin" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <PageWrapper>
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-2xl flex flex-col items-center mt-8">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,_#fff_0%,_#a18fff44_60%,_transparent_100%)] blur-3xl opacity-70 pointer-events-none z-0" />
          <div className="relative z-10 w-full bg-white/30 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/40 px-8 py-12 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-[0_2px_24px_#a18fff] font-montserrat tracking-widest mb-4">
              ToDo List
            </h1>
            <TodoFilters todos={todos} />
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
