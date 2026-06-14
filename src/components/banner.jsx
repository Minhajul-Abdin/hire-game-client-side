"use client";

import { Briefcase, Magnifier, Pin } from "@gravity-ui/icons";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="relative min-h-[600px] w-full px-4 pb-40 pt-15 flex flex-col items-center justify-center overflow-hidden">
      {/* Soft background glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative dots background simulation */}
      <div className="absolute inset-0 opacity-30" />

      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shadow-inner text-xs sm:text-sm font-mono tracking-wider text-zinc-400 mb-8 transition-all hover:border-zinc-700">
          <Briefcase className="text-orange-400" size={14} />
          <span className="text-zinc-200 font-bold">50,000+</span> NEW JOBS THIS
          MONTH
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 max-w-2xl leading-tight">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-normal">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar Container */}
        <div className="w-full max-w-3xl bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-2 sm:p-3 backdrop-blur-xl shadow-2xl focus-within:border-zinc-700 transition-all mb-6">
          <form className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 sm:divide-x sm:divide-zinc-800">
            {/* Input 1: Title/Skill */}
            <div className="flex-1 flex items-center gap-3 px-3 py-2.5">
              <Magnifier className="text-zinc-500 shrink-0" size={18} />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
            </div>

            {/* Input 2: Location */}
            <div className="flex-1 flex items-center gap-3 px-3 sm:pl-6 py-2.5">
              <Pin className="text-zinc-500 shrink-0" size={18} />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end pl-2">
              <button
                type="submit"
                aria-label="Search jobs"
                className="w-full sm:w-auto p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center active:scale-95"
              >
                <Magnifier size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* Trending Suggestions */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span className="text-zinc-500 font-medium mr-1">
            Trending Position
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            type="button"
            className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 transition text-xs font-medium"
          >
            Product Designer
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            type="button"
            className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 transition text-xs font-medium"
          >
            AI Engineering
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            type="button"
            className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 transition text-xs font-medium"
          >
            Dev-ops Engineer
          </motion.button>
        </div>
      </div>
    </div>
  );
}
