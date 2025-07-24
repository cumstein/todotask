"use client";

import { Todo } from "@/types/todo";
import { motion, AnimatePresence } from "framer-motion";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <div className="w-full min-h-[520px] flex flex-col justify-start">
      <AnimatePresence mode="wait">
        {todos.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center text-[#ff6fcf] font-bold text-lg py-12"
          >
            No todos found with these filters.
          </motion.div>
        ) : (
          <motion.ul
            key="list"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-4"
          >
            <AnimatePresence initial={false}>
              {todos.map((todo) => (
                <motion.li
                  key={todo.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className={`
                    flex items-center justify-between px-6 py-4 rounded-2xl shadow-lg border border-white/30
                    transition-all duration-200
                    ${
                      todo.completed
                        ? "bg-gradient-to-r from-[#a18fff]/70 to-[#ffb6ea]/70 text-[#7f5fff] font-bold"
                        : "bg-white/60 text-gray-700"
                    }
                  `}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-montserrat font-semibold truncate">
                      {todo.title}
                    </p>
                    <p className="text-xs text-[#a18fff] mt-1">
                      User ID: {todo.userId}
                    </p>
                  </div>
                  <span
                    className={`
                      ml-4 px-4 py-1 rounded-full text-xs font-bold shadow
                      ${
                        todo.completed
                          ? "bg-[#7f5fff]/90 text-white"
                          : "bg-gray-300 text-gray-700"
                      }
                    `}
                  >
                    {todo.completed ? "Completed" : "Incomplete"}
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
