"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto py-10 px-4 md:px-8 border-t border-slate-800/40 dark:border-slate-800/40 light:border-slate-200/40 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name and Copyright */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Varadha K
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {currentYear} Varadha K. All rights reserved.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-400 transition-colors">
            About
          </Link>
          <Link href="/education" className="hover:text-indigo-400 transition-colors">
            Education
          </Link>
          <Link href="/skills" className="hover:text-indigo-400 transition-colors">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-indigo-400 transition-colors">
            Projects
          </Link>
          <Link href="/certifications" className="hover:text-indigo-400 transition-colors">
            Certifications
          </Link>
          <Link href="/publications" className="hover:text-indigo-400 transition-colors">
            Publications
          </Link>
          <Link href="/resume" className="hover:text-indigo-400 transition-colors">
            Resume
          </Link>
          <Link href="/contact" className="hover:text-indigo-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Varadhakrishnadas"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/80 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/varadha-k"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/80 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:varadhakrishnadas@gmail.com"
            className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/80 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>

          {/* Scroll to Top */}
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20 active:scale-95 duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
