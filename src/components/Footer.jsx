import React from "react";
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Invisible spacer that dynamically forces the footer to the bottom of short pages */}
      <div className="sticky bottom-[100vh]" />

      <footer className="w-full bg-[#030303] text-[#8c8c8c] px-5 py-[35px] md:px-10 lg:px-20 border-t border-[#141414]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-10 lg:gap-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-5">
            <div className="text-3xl font-bold tracking-tight text-[#2563eb]">
              hire<span className="text-[#d97706]">Game</span>
            </div>
            <p className="text-[15px] leading-relaxed max-w-[320px] text-[#555555]">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Links Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4">
            {/* Column 1: Product */}
            <div className="flex flex-col">
              <h3 className="text-[#4d4dff] text-base font-medium mb-5">
                Product
              </h3>
              <ul className="space-y-[14px]">
                <li>
                  <a
                    href="#job-discovery"
                    className="text-[14px] hover:text-white transition-colors duration-200"
                  >
                    Job discovery
                  </a>
                </li>
                <li>
                  <a
                    href="#worker-ai"
                    className="text-[14px] hover:text-white transition-colors duration-200"
                  >
                    Worker AI
                  </a>
                </li>
                <li>
                  <a
                    href="#companies"
                    className="text-[14px] hover:text-white transition-colors duration-200"
                  >
                    Companies
                  </a>
                </li>
                <li>
                  <a
                    href="#salary-data"
                    className="text-[14px] hover:text-white transition-colors duration-200"
                  >
                    Salary data
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigations */}
            <div className="flex flex-col">
              <h3 className="text-[#4d4dff] text-base font-medium mb-5">
                Navigations
              </h3>
              <ul className="space-y-[14px]">
                <li>
                  <a
                    href="#help-center"
                    className="text-[14px] hover:text-white transition-colors duration-200"
                  >
                    Help center
                  </a>
                </li>
                <li>
                  <a
                    href="#career-library"
                    className="text-[14px] hover:text-white transition-colors duration-200"
                  >
                    Career library
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[14px] hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col">
              <h3 className="text-[#4d4dff] text-base font-medium mb-5">
                Resources
              </h3>
              <ul className="space-y-[14px]">
                <li>
                  <a
                    href="#brand-guideline"
                    className="text-[14px] hover:text-white transition-colors duration-200"
                  >
                    Brand Guideline
                  </a>
                </li>
                <li>
                  <a
                    href="#newsroom"
                    className="text-[14px] hover:text-white transition-colors duration-200"
                  >
                    Newsroom
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="max-w-[1200px] mx-auto border-[#1a1a1a] mt-[50px] mb-[25px]" />

        {/* Bottom Footer Section */}
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 flex-wrap">
          {/* Social Media Links */}
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#141414] text-[#8c8c8c] rounded-lg text-[1.1rem] transition-all duration-200 hover:text-white hover:-translate-y-0.5"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://pinterest.com"
              aria-label="Pinterest"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#3b3b98] text-white rounded-lg text-[1.1rem] transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaPinterestP size={16} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#141414] text-[#8c8c8c] rounded-lg text-[1.1rem] transition-all duration-200 hover:text-white hover:-translate-y-0.5"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          {/* Legal & Copyright Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[13px] text-[#444444]">
            <span>Copyright 2024 — Programming Hero</span>
            <div className="flex items-center gap-2">
              <a
                href="#terms"
                className="hover:text-[#8c8c8c] transition-colors duration-200"
              >
                Terms & Policy
              </a>
              <span className="text-[#333333]">-</span>
              <a
                href="#privacy"
                className="hover:text-[#8c8c8c] transition-colors duration-200"
              >
                Privacy Guideline
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
