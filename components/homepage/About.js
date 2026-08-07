"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function About() {
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
    <section 
      id="about" 
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-20 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans"
    >
      {/* --- Ambient Glowing Orbs --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-5 sm:right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-cyan-500/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-5 sm:left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-indigo-500/10 blur-[110px] sm:blur-[150px] rounded-full pointer-events-none" />

      {/* --- Subtle Background Mesh Grid --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf810_1px,transparent_1px),linear-gradient(to_bottom,#38bdf810_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* --- Glassmorphic Content Container --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                staggerChildren: 0.15,
                duration: 0.8 
              } 
            },
          }}
          className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent p-5 sm:p-10 md:p-14 border border-white/15 backdrop-blur-xl shadow-2xl shadow-blue-950/40 text-center space-y-6 sm:space-y-8 overflow-hidden group"
        >
          {/* Subtle Top Ambient Border Accent */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          {/* Pill Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-medium text-cyan-300 shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-pulse" />
            <span>CAREER OBJECTIVE</span>
          </motion.div>

          {/* Heading Statement */}
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-100 leading-snug px-2">
              I&apos;m seeking to contribute expertise in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 font-bold drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                modern frontend technologies
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed px-2">
              to a dynamic product team focused on building exceptional, performant, and user-centric web experiences.
            </p>
          </motion.div>

          {/* Galaxy Showcase Image with Floating Effect */}
          <motion.div 
            variants={fadeInUp}
            className="relative pt-2 sm:pt-4 flex justify-center items-center w-full"
          >
            {/* Background Image Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-purple-500/20 blur-2xl sm:blur-3xl rounded-full scale-75 opacity-70 pointer-events-none" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full flex justify-center"
            >
              <Image
                src="/gallacy1.png"
                alt="Skills & Tech Galaxy"
                width={800}
                height={800}
                priority
                className="object-contain mx-auto drop-shadow-[0_15px_40px_rgba(56,189,248,0.25)] hover:scale-[1.02] transition-transform duration-500 w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] h-auto"
              />
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}