"use client";
import React from "react";
import { FiBriefcase, FiCompass, FiUsers, FiStar } from "react-icons/fi";
import HeroSection from "@/components/banner";
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="relative w-full bg-black text-white px-5 pt-40 pb-10 overflow-hidden select-none">
      {/* Background Overlay Wrapper 
        Replace 'bg-[url("/path-to-your-globe.png")]' with your actual background image asset path
      */}
      <div className="absolute inset-0 bg-cover bg-center opacity-90 bg-[url('/images/globe.png')] bg-no-repeat bg-contain pointer-events-none mix-blend-screen" />

      <HeroSection />
      {/* Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Main Heading Headline */}
        <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-normal text-gray-300 max-w-2xl leading-snug tracking-wide mb-14 md:mb-20">
          Assisting over{" "}
          <span className="font-semibold text-white">15,000 job seekers</span>{" "}
          <br className="hidden sm:inline" />
          find their dream positions.
        </h2>

        {/* Stats Cards Grid Grid Layout */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Card 1: Active Jobs */}
          <div className="flex flex-col justify-between bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-6 h-[180px] hover:border-gray-800 transition-colors duration-300">
            <div className="text-gray-400 text-xl">
              <FiBriefcase className="stroke-[1.5]" />
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">
                50K
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                Active Jobs
              </div>
            </div>
          </div>

          {/* Card 2: Companies */}
          <div className="flex flex-col justify-between bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-6 h-[180px] hover:border-gray-800 transition-colors duration-300">
            <div className="text-gray-400 text-xl">
              <FiCompass className="stroke-[1.5]" />
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">
                12K
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                Companies
              </div>
            </div>
          </div>

          {/* Card 3: Job Seekers */}
          <div className="flex flex-col justify-between bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-6 h-[180px] hover:border-gray-800 transition-colors duration-300">
            <div className="text-gray-400 text-xl">
              <FiUsers className="stroke-[1.5]" />
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">
                2M
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                Job Seekers
              </div>
            </div>
          </div>

          {/* Card 4: Satisfaction Rate */}
          <div className="flex flex-col justify-between bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-6 h-[180px] hover:border-gray-800 transition-colors duration-300">
            <div className="text-gray-400 text-xl">
              <FiStar className="stroke-[1.5]" />
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">
                97%
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
