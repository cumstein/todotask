"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreen";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <SplashScreen key="splash" finishLoading={() => setLoading(false)} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="min-h-screen w-screen overflow-x-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
