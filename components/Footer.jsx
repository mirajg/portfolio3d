
"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const iconBtn =
  "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#100d25] text-[#aaa6c3] " +
  "transition-colors duration-300 hover:bg-[#1d1836] hover:text-white " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#915eff]";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050816] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto w-full max-w-7xl border-t border-[#1d1836] pt-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          {/* Name */}
          <div>
            <h2 className="text-lg font-bold tracking-wider text-[#aaa6c3] sm:text-xl">
              MIRAJ
            </h2>
            <p className="mt-1 text-sm text-[#aaa6c3]">Building ideas with code.</p>
          </div>

          {/* Social Links */}
          <nav aria-label="Social links" className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/mirajg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconBtn}
            >
              <FaGithub size={20} />
            </a>

            {/* TODO: replace with your real LinkedIn URL */}
            <a
              href="https://www.linkedin.com/in/mirajgautam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconBtn}
            >
              <FaLinkedin size={20} />
            </a>

            <a href="mailto:mirajgtesting@gmail.com" aria-label="Email" className={iconBtn}>
              <FaEnvelope size={20} />
            </a>

            <button type="button" onClick={scrollToTop} aria-label="Back to top" className={iconBtn}>
              <FaArrowUp size={20} />
            </button>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-[#1d1836] pt-5 text-center text-xs text-[#aaa6c3] sm:flex-row sm:text-left">
          <p>© {year} Miraj Gautam. All rights reserved.</p>
          <p>
            Designed &amp; built with <span className="text-white">♥</span> and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;