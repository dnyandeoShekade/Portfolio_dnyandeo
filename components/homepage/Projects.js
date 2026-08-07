"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Globe, ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Yuva Nexus Website",
    techStack: ["Next.js", "Tailwind CSS", "REST API", "SEO","javascript"],
    description:
      "Developed the official company website for Yuva Nexus Tech LLP. Implemented dynamic routing using URL parameters for service, blog, and project detail pages. Integrated API handling to dynamically load content from the backend with dynamic SEO metadata in Next.js for maximum search visibility.",
    link: "https://yuvanexus.com/",
    image: "/project1.png",
  },
  {
    id: 2,
    title: "Billing Cart Web",
    techStack: ["Next.js", "Tailwind CSS", "E-Commerce", "javascript"],
    description:
      "Developed a static e-commerce billing application for managing products, SEO, and UI interactions. Built a high-performance web application using Next.js with fast-loading, optimized pages, dynamic metadata, and a responsive layout with clean architecture.",
    link: "https://billingcart.in/ ",
    image: "/project2.png",
  },
];

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="lab"
      className="py-24 px-6 md:px-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-slate-50 text-slate-900 font-sans"
    >
      {/* --- Ambient Glowing Blue & Cyan Orbs --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-400/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-cyan-400/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-300/15 blur-[150px] rounded-full pointer-events-none" />

      {/* --- Subtle Background Grid --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-24">
        {/* --- Section Header --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-blue-200 backdrop-blur-xl shadow-lg shadow-blue-500/5 text-xs sm:text-sm font-medium text-blue-600">
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* --- Projects Showcase List --- */}
        <div className="space-y-20 lg:space-y-32">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 relative group ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Glowing halo behind image */}
                    <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400/20 via-cyan-400/20 to-blue-200/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-blue-200/80 bg-white/80 backdrop-blur-md shadow-xl shadow-blue-500/10 group-hover:border-blue-400/60 transition-all duration-500">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Light subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Text Content Column */}
                  <div
                    className={`lg:col-span-5 space-y-5 z-20 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Category Label */}
                    <div className="flex items-center gap-2 text-blue-600 text-xs font-mono tracking-widest uppercase font-semibold">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                      <span>Featured Project</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50/80 border border-blue-200/80 text-blue-700 backdrop-blur-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Frosted White Description Card */}
                    <div className="relative rounded-2xl bg-white/90 p-6 md:p-8 backdrop-blur-xl border border-blue-100 shadow-xl shadow-blue-500/5 hover:border-blue-300/80 transition-all duration-300 group">
                      {/* Top subtle blue highlight line */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Link Button */}
                    {project.link && (
                      <div className="pt-2">
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-blue-50 border border-blue-200 hover:border-blue-400/60 text-slate-800 hover:text-blue-600 font-medium text-sm transition-all duration-300 backdrop-blur-md shadow-md shadow-blue-500/5 group/btn"
                        >
                          <Globe className="w-4 h-4 text-blue-500" />
                          <span>Visit Website</span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}