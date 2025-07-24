"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  finishLoading: () => void;
}

export default function SplashScreen({ finishLoading }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      finishLoading();
    }, 3000);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 1, y: 0, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            y: -80,
            scale: 0.98,
            transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 420,
              height: 420,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, #fff 0%, #a18fff44 60%, transparent 100%)",
              filter: "blur(32px)",
              zIndex: 1,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative flex flex-col items-center justify-center z-10">
            <motion.div
              className="flex items-center justify-center mb-8"
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7f5fff 0%, #ffb6ea 100%)",
                boxShadow: "0 0 32px 8px #a18fff55, 0 2px 8px #fff4",
                border: "4px solid rgba(255,255,255,0.25)",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.span
                style={{
                  fontSize: 54,
                  fontWeight: 900,
                  color: "#fff",
                  textShadow: "0 4px 24px #a18fff, 0 1px 0 #fff",
                  letterSpacing: "2px",
                  fontFamily: "Montserrat, Arial, sans-serif",
                  userSelect: "none",
                }}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span style={{ color: "#fff" }}>C</span>
                <span style={{ color: "#ffb6ea" }}>y</span>
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-extrabold text-white text-center"
              style={{
                textShadow: "0 2px 24px #a18fff, 0 1px 0 #fff",
                fontFamily: "Montserrat, Arial, sans-serif",
                letterSpacing: "4px",
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              CyRays
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
