import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 sm:py-16 px-4 sm:px-6 bg-slate-50/70 border-t border-slate-200/60">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Background Grid - Blue Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf820_1px,transparent_1px),linear-gradient(to_bottom,#38bdf820_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center px-2">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-purple-600 block mb-2">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Let&apos;s Work Together
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a Frontend Developer with 2+ years of experience building
            responsive and modern web applications using React.js, Next.js,
            JavaScript, and Tailwind CSS. Currently available for full-time,
            remote, and freelance opportunities.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-slate-700 text-center">
          <a
            href="mailto:shekadednyande@gmail.com"
            className="hover:text-purple-600 transition break-all"
          >
            📧 shekadednyande@gmail.com
          </a>

          <a
            href="tel:+919146704407"
            className="hover:text-purple-600 transition"
          >
            📞 +91 9146704407
          </a>

          <span>📍 Pune, India</span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {[
            "React.js",
            "Next.js",
            "JavaScript",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs sm:text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Availability */}
        <div className="text-center mt-6 sm:mt-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs sm:text-sm font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            Available for Work
          </span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-5 mt-8 sm:mt-10">
          {/* GitHub */}
          <Link
            href="https://github.com/dnyandeoShekade"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50/50 shadow-sm transition"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/dnyandeo-shekade-b75016334/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50/50 shadow-sm transition"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-slate-200/80 text-center px-2">
          <p className="text-xs sm:text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-700">
              Dnyandeo Shekade
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}