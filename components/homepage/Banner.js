"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Sparkles, ArrowRight, Award } from "lucide-react";

const ROLES = [
  "Frontend Developer",
  "React.js Developer",
  "Next.js Developer",
  "UI Developer",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through job roles smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Container variants for staggered child animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-50 text-slate-900 flex flex-col justify-center px-6 md:px-20 py-20 relative overflow-hidden font-sans">
      
      {/* --- Ambient Glowing Orbs & Background Grid --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-400/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-cyan-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-300/8 blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 space-y-12">

        {/* --- Top Greeting Badge with Corrected Hand-Drawn Arrow --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-blue-200 backdrop-blur-xl shadow-lg shadow-blue-500/10 self-start ml-4 md:ml-28 group"
        >
          {/* Precise Hand-Drawn Swooping Arrow */}
          <svg
            className="absolute -top-10 -left-12 w-14 h-14 text-blue-500 pointer-events-none -rotate-6"
            viewBox="0 0 60 60"
            fill="none"
          >
            {/* Smooth Arrow Arc */}
            <motion.path
              d="M 10 10 C 12 35, 30 45, 46 38"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            />
            {/* Aligned Arrowhead */}
            <motion.path
              d="M 38 30 L 47 38 L 41 46"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.3 }}
            />
          </svg>

          <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
          <p className="text-sm md:text-base font-normal tracking-wide text-slate-700">
            Hello! I Am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 font-semibold drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]">
              Dnyandeo Shekade
            </span>
          </p>
        </motion.div>

        {/* --- Main Hero Grid Section --- */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Memoji Avatar with Floating Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0 group"
          >
            {/* Glowing Pulsing Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/30 via-cyan-400/20 to-white/20 rounded-full blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            
            {/* Glass Avatar Ring */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-b from-white to-blue-50 border-2 border-blue-300 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] group-hover:border-blue-400 transition-all duration-500">
              <motion.img
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png"
                alt="Memoji Avatar"
                className="w-38 h-38 md:w-48 md:h-48 object-contain translate-y-2 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Heading Text Column */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-3 text-center md:text-left"
          >
            <motion.div variants={fadeInUp} className="text-blue-600 text-xs tracking-widest uppercase font-mono flex items-center justify-center md:justify-start gap-1 font-semibold">
              <span>▼</span> INTRODUCING
            </motion.div>

            {/* Experience Highlight Pill */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-300 text-blue-700 text-xs md:text-sm font-semibold tracking-wide shadow-sm">
              <Award className="w-4 h-4 text-blue-600" />
              <span>2+ Years of Professional Experience</span>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-slate-600 font-light tracking-wide pt-1">
              A Developer who
            </motion.p>

            {/* Main Headline */}
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              Crafts responsive <br />
              & user-friendly{" "}
              
              {/* Clean Highlight without background pill/border box */}
              <span className="relative inline-block px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 font-bold">
                web sites
                
                {/* Thin, Hand-drawn Oval Circle SVG */}
                <svg
                  className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)] text-blue-500 pointer-events-none"
                  viewBox="0 0 100 40"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 6,20 C 6,5 94,5 94,20 C 94,35 6,35 6,20 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-sm md:text-base text-slate-600 font-normal pt-2 max-w-lg">
              Building pixel-perfect UI implementations with modern frontend technologies.
            </motion.p>
          </motion.div>
        </div>

        {/* --- Section 2: Animated Dynamic Role & Bio --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-10 border-t border-blue-200 space-y-5"
        >
          {/* Animated Dynamic Role Switcher */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 min-h-[72px]">
            <span className="text-slate-800">I&apos;m a</span>
            
            <div className="relative inline-block overflow-hidden py-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={{ y: 45, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -45, opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Glowing Blinking Cursor */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="w-[3px] h-8 sm:h-10 md:h-12 bg-blue-500 inline-block rounded-sm shadow-[0_0_12px_#3b82f6]"
            />
          </div>

          {/* Company Badge Pill */}
          <div className="text-base sm:text-lg text-slate-600 flex items-center gap-2.5 flex-wrap">
            <span>Currently, I&apos;m a Frontend Developer at</span>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-blue-200 text-blue-600 font-medium text-sm sm:text-base hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 backdrop-blur-md shadow-md shadow-blue-500/5 group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <Users className="w-4 h-4 text-blue-500" />
              <span>Innovins Technologies</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600" />
            </motion.a>
          </div>

          {/* Bio Description with Highlighted 2+ Years */}
          <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-normal pt-1">
            Results-driven Frontend Developer with <strong className="text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">2+ years of professional experience</strong> building responsive, user-friendly web applications using React.js, Next.js, JavaScript (ES6+), and Tailwind CSS. Proven ability to collaborate with cross-functional teams to optimize web performance, and deliver pixel-perfect UI implementations.
          </p>
        </motion.div>

      </div>
    </section>
  );
}