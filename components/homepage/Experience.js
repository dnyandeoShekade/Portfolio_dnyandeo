"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Calendar, Briefcase } from "lucide-react";

const experienceCards = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Innovins Technologies",
    duration: "Nov 2025 – Aug 2026 • 10 Months",
    description:
      "Worked on React.js, Next.js, Tailwind CSS, backend API integration, admin panels, UI performance optimization, bug fixing, and collaborated with designers in an Agile environment.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "javascript"],
    link: "https://innovins.com",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Yuva Nexus Technologies",
    duration: "Jun 2024 – Nov 2025 • 1 Year 6 Months",
    description:
      "Developed production-ready web applications using React.js, Next.js, and Tailwind CSS. Built admin panels, integrated REST APIs, converted Figma designs into responsive interfaces, and optimized website performance.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "javascript"],
    link: "https://yuvanexus.com",
  },
];

export default function Experience() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-20 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans"
    >
      {/* --- Ambient Glowing Orbs --- */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-600/10 blur-[120px] sm:blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 sm:right-10 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-blue-600/10 blur-[110px] sm:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-cyan-500/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />

      {/* --- Background Mesh Grid --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf810_1px,transparent_1px),linear-gradient(to_bottom,#38bdf810_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12">
        {/* --- Section Header --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center space-y-3 sm:space-y-4 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-medium text-purple-300 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 animate-pulse" />
            <span>CAREER PATH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* --- Cards Grid --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
        >
          {experienceCards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-slate-900/90 to-purple-950/80 p-5 sm:p-6 md:p-8 backdrop-blur-xl border border-white/15 shadow-xl transition-all duration-300 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top ambient sheen gradient line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent group-hover:via-cyan-400/70 transition-all duration-500" />

              {/* Ambient sheen orb in corner */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none" />

              {/* Card Body */}
              <div className="space-y-3.5 sm:space-y-4 relative z-10">
                {/* Title & Company */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {card.title}
                  </h3>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-purple-300 font-medium text-xs sm:text-sm">
                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>{card.company}</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-2.5 sm:px-3 py-1 rounded-md border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{card.duration}</span>
                </div>

                {/* Description */}
                <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {card.tech.map((techItem, index) => (
                    <span
                      key={index}
                      className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-md bg-purple-950/50 border border-purple-500/30 text-purple-200 font-medium"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learn More Link */}
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-purple-300 hover:text-cyan-300 font-semibold text-xs tracking-wider uppercase transition-colors group/link"
                >
                  <span>Visit Company</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}