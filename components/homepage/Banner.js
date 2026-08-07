"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Award, Briefcase } from "lucide-react";

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
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-50 text-slate-900 flex flex-col justify-center px-4 sm:px-6 md:px-20 py-16 sm:py-20 relative overflow-hidden font-sans">
      
      {/* Download Resume Button - Top Right Corner */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5,
          type: "spring",
          stiffness: 100
        }}
        className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20"
      >
        <motion.a
          whileHover={{ 
            scale: 1.05, 
            rotate: 2,
            boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" 
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
          href="/Dnyandeo Shekade Resume.pdf"
          download
          className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 text-white font-semibold text-xs sm:text-base rounded-full shadow-xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 overflow-hidden"
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "200%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear"
            }}
          />
          
          {/* Download Icon with bounce animation */}
          <motion.svg 
            className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-white shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{
              y: [0, 3, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </motion.svg>
          <span className="relative z-10 text-white hidden xs:inline">Download Resume</span>
          <span className="relative z-10 text-white xs:hidden">Resume</span>
          
          {/* Arrow on hover */}
          <motion.div
            className="relative z-10 hidden sm:block"
            initial={{ x: -5, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* --- Ambient Glowing Orbs & Background Grid --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-blue-400/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-4 sm:left-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-cyan-400/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-4 sm:right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-blue-300/8 blur-[110px] sm:blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 space-y-8 sm:space-y-12">

        {/* --- Top Greeting Badge with Corrected Hand-Drawn Arrow --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/80 border border-blue-200 backdrop-blur-xl shadow-lg shadow-blue-500/10 self-start ml-2 sm:ml-4 md:ml-28 group"
        >
          {/* Precise Hand-Drawn Swooping Arrow (Hidden on very small screens to avoid overflow) */}
          <svg
            className="absolute -top-10 -left-10 sm:-left-12 w-12 sm:w-14 h-12 sm:h-14 text-blue-500 pointer-events-none -rotate-6 hidden xs:block"
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

          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 animate-pulse shrink-0" />
          <p className="text-xs sm:text-sm md:text-base font-normal tracking-wide text-slate-700">
            Hello! I Am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 font-semibold drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]">
              Dnyandeo Shekade
            </span>
          </p>
        </motion.div>

        {/* --- Main Hero Grid Section --- */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* Memoji Avatar with Floating Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0 group mt-2 sm:mt-0"
          >
            {/* Glowing Pulsing Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/30 via-cyan-400/20 to-white/20 rounded-full blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            
            {/* Glass Avatar Ring */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-b from-white to-blue-50 border-2 border-blue-300 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] group-hover:border-blue-400 transition-all duration-500">
              <motion.img
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png"
                alt="Memoji Avatar"
                className="w-32 h-32 sm:w-38 sm:h-38 md:w-48 md:h-48 object-contain translate-y-2 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Heading Text Column */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-3 text-center md:text-left w-full"
          >
            <motion.div variants={fadeInUp} className="text-blue-600 text-[10px] sm:text-xs tracking-widest uppercase font-mono flex items-center justify-center md:justify-start gap-1 font-semibold">
              <span>▼</span> INTRODUCING
            </motion.div>

            {/* Experience Highlight Pill */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-300 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
              <span>2+ Years of Professional Experience</span>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-3xl text-slate-600 font-light tracking-wide pt-1">
              A Developer who
            </motion.p>

            {/* Main Headline */}
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              Crafts responsive <br className="hidden sm:inline" />
              & user-friendly{" "}
              
              {/* Clean Highlight without background pill/border box */}
              <span className="relative inline-block px-1 sm:px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 font-bold">
                web sites
                
                {/* Thin, Hand-drawn Oval Circle SVG */}
                <svg
                  className="absolute -inset-x-1 sm:-inset-x-2 -inset-y-1 w-[calc(100%+8px)] sm:w-[calc(100%+16px)] h-[calc(100%+8px)] text-blue-500 pointer-events-none"
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

            <motion.p variants={fadeInUp} className="text-xs sm:text-sm md:text-base text-slate-600 font-normal pt-1 max-w-lg mx-auto md:mx-0">
              Building pixel-perfect UI implementations with modern frontend technologies.
            </motion.p>
          </motion.div>
        </div>

        {/* --- Section 2: Animated Dynamic Role & Bio --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 sm:pt-10 border-t border-blue-200 space-y-4 sm:space-y-5"
        >
          {/* Animated Dynamic Role Switcher */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-2xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 min-h-[50px] sm:min-h-[72px]">
            <span className="text-slate-800">I&apos;m a</span>
            
            <div className="relative inline-block overflow-hidden py-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={{ y: 45, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -45, opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent text-center md:text-left"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Glowing Blinking Cursor */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="w-[2px] sm:w-[3px] h-6 sm:h-9 md:h-12 bg-blue-500 inline-block rounded-sm shadow-[0_0_12px_#3b82f6]"
            />
          </div>

          {/* Availability Status Badge Pill */}
          <div className="text-sm sm:text-lg text-slate-600 flex items-center justify-center md:justify-start gap-2.5 flex-wrap">
            <span>Status:</span>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/80 border border-emerald-200 text-emerald-700 font-medium text-xs sm:text-base backdrop-blur-md shadow-md shadow-emerald-500/5 group"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span>Open to New Opportunities</span>
            </motion.div>
          </div>

          {/* Bio Description with Highlighted 2+ Years */}
          <p className="text-slate-600 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed font-normal pt-1 text-center md:text-left">
            Results-driven Frontend Developer with <strong className="text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">2+ years of professional experience</strong> building responsive, user-friendly web applications using React.js, Next.js, JavaScript (ES6+), and Tailwind CSS. Proven ability to collaborate with cross-functional teams to optimize web performance, and deliver pixel-perfect UI implementations.
          </p>
        </motion.div>

      </div>
    </section>
  );
}