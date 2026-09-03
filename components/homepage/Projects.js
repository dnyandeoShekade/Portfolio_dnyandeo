"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Globe, ArrowUpRight, Code } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Job Portal Web Application",
    techStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "Developed a full-stack job portal with separate user and admin functionalities. Implemented user authentication and authorization using JWT with protected routes. Built features including job listing, job search, job applications, and user dashboard. Developed RESTful APIs using Node.js, Express.js, and MongoDB for users, jobs, and applications. Created a responsive and reusable UI using Next.js, React.js, and Tailwind CSS. Developed an admin dashboard to add, edit, and delete jobs, users, and applications.",
    link: "https://job-board-two-blush.vercel.app/",
    image: "/job-portal.png",
  },
  // {
  //   id: 1,
  //   title: "Yuva Nexus Website",
  //   techStack: ["Next.js", "Tailwind CSS", "REST API", "SEO", "JavaScript"],
  //   description:
  //     "Developed the official company website for Yuva Nexus Tech LLP. Implemented dynamic routing using URL parameters for service, blog, and project detail pages. Integrated API handling to dynamically load content from the backend with dynamic SEO metadata in Next.js for maximum search visibility.",
  //   link: "https://yuvanexus.com/",
  //   image: "/project1.png",
  // },
  {
    id: 2,
    title: "Wellness Forever Corporate Website",
    techStack: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "CMS Integration",
    ],
    description:
      "Wellness Forever Corporate Website is a responsive corporate web platform built using Next.js, React.js, JavaScript, and Tailwind CSS. The project includes dynamic CMS API integration using Axios and an admin dashboard for managing website content. It provides a modern, responsive experience across pages such as Home, Leadership, Network, Franchise, Investor, Careers, and Contact.",
    link: "https://corpuat.wellnessforever.in/",
    image: "/wellness1.png",
  },
  {
    id: 3,
    title: "Billing Cart Web",
    techStack: ["Next.js", "Tailwind CSS", "E-Commerce", "JavaScript"],
    description:
      "Developed a static e-commerce billing application for managing products, SEO, and UI interactions. Built a high-performance web application using Next.js with fast-loading, optimized pages, dynamic metadata, and a responsive layout with clean architecture.",
    link: "https://billingcart.in/",
    image: "/project2.png",
  },
  {
    id: 4,
    title: "Cosmetic Surgery Landing Page",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    description:
      "Built a polished cosmetic surgery clinic landing page with sections for treatments, specialist doctors, testimonials, clinic highlights, insights, and appointment booking. Created a clean, conversion-focused UI to showcase aesthetic and reconstructive surgery services, with a desktop-focused design.",
    link: "https://cosmetic-landingpage.vercel.app/",
    image: "/cosmetick.png",
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
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-slate-50 text-slate-900 font-sans"
    >
      {/* --- Ambient Glowing Blue & Cyan Orbs --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] bg-blue-400/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-4 sm:left-10 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-cyan-400/15 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-4 sm:right-10 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-300/15 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" />

      {/* --- Subtle Background Grid --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 sm:space-y-20 lg:space-y-28">
        {/* --- Section Header --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center space-y-4 px-2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/80 border border-blue-200 backdrop-blur-xl shadow-lg shadow-blue-500/5 text-xs sm:text-sm font-medium text-blue-600"
          >
            <Sparkles className="w-4 h-4 text-blue-500 animate-spin" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* --- Projects Showcase List --- */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
                  {/* Image Column with Float Animation */}
                  <div
                    className={`lg:col-span-7 relative group ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Glowing halo behind image */}
                    <motion.div
                      animate={{
                        scale: [1, 1.03, 1],
                        opacity: [0.6, 0.9, 0.6],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                      }}
                      className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-blue-400/30 via-cyan-400/30 to-blue-200/20 rounded-3xl blur-2xl pointer-events-none"
                    />

                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-blue-200/80 bg-white/80 backdrop-blur-md shadow-xl shadow-blue-500/10 group-hover:border-blue-400/60 transition-all duration-500"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Light subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Floating Badge on Image */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-blue-100 text-[10px] sm:text-xs font-semibold text-blue-600 shadow-sm flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                        <Code className="w-3 h-3 text-blue-500" />
                        Live Application
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content Column */}
                  <div
                    className={`lg:col-span-5 space-y-4 sm:space-y-5 z-20 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Category Label */}
                    <div className="flex items-center gap-2 text-blue-600 text-xs font-mono tracking-widest uppercase font-semibold">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping shrink-0" />
                      <span>Featured Project #{project.id}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Tech Stack Pills with stagger hover */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50/80 border border-blue-200/80 text-blue-700 backdrop-blur-md shadow-sm cursor-default transition-colors hover:bg-blue-100/80"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Frosted White Description Card */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="relative rounded-2xl bg-white/90 p-5 sm:p-6 md:p-8 backdrop-blur-xl border border-blue-100 shadow-xl shadow-blue-500/5 hover:border-blue-300/80 transition-all duration-300 group"
                    >
                      {/* Top subtle blue highlight line */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                      <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>

                    {/* Action Link Button */}
                    {project.link && (
                      <div className="pt-2">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-block"
                        >
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-12 py-5 rounded-full bg-white hover:bg-blue-50 border border-blue-200 hover:border-blue-400/60 text-slate-800 hover:text-blue-600 font-medium text-xs sm:text-sm transition-all duration-300 backdrop-blur-md shadow-md shadow-blue-500/5 group/btn"
                          >
                            <Globe className="w-6 h-6 text-blue-500 group-hover/btn:rotate-180 transition-transform duration-500" />
                            <span>Visit Website</span>
                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                          </Link>
                        </motion.div>
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
