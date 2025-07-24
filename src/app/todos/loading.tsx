"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full max-w-md flex flex-col items-center"
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,_#fff_0%,_#a18fff44_60%,_transparent_100%)] blur-2xl opacity-70 pointer-events-none z-0" />
        <div className="relative z-10 w-full bg-white/30 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/40 px-8 py-12 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-white text-center mb-4 font-montserrat tracking-widest">
            Loading Todos...
          </h2>
          <div className="w-12 h-12 rounded-full border-4 border-[#a18fff] border-t-[#ffb6ea] animate-spin" />
        </div>
      </motion.div>
    </main>
  );
}
