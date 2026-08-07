"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100/80 shadow-sm shadow-blue-500/5 transition-all duration-300 font-sans">
      <nav className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        
        {/* --- Animated Interactive Logo (Left Side) --- */}
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            whileHover={{ scale: 1.08, rotate: 4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20 overflow-hidden"
          >
            {/* Glowing Background Inner Pulse Effect */}
            <motion.div
              animate={{
                opacity: [0.2, 0.7, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-white/30 rounded-full blur-md pointer-events-none"
            />

            {/* Code Icon with Hover Rotation */}
            <Code2 className="w-5 h-5 relative z-10 text-white group-hover:rotate-12 transition-transform duration-300" />
          </motion.div>

          {/* Animated Text Brand Mark */}
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
              Dnyandeo
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="inline-block w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"
              />
            </span>
            <span className="text-[10px] font-mono tracking-widest text-blue-600 uppercase font-semibold -mt-1">
              Frontend Dev
            </span>
          </div>
        </Link>

        {/* --- Nav Items --- */}
        <ul className="flex items-center gap-1 sm:gap-2 list-none">
          <li>
            <Link
              href="#home"
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all text-sm font-medium px-4 py-2 rounded-full"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all text-sm font-medium px-4 py-2 rounded-full"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="#lab"
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all text-sm font-medium px-4 py-2 rounded-full"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}