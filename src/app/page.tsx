"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  FolderGit2, 
  Code2, 
  TrendingUp, 
  Briefcase,
  Download,
  ArrowRight
} from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

const typewriterWords = [
  "MCA Graduate",
  "Python Developer",
  "Software Developer",
  "Data Analytics Enthusiast",
  "Open to Internship Opportunities",
];

// Custom typewriter component for the typing effect
function Typewriter() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const word = typewriterWords[currentWordIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          timer = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
        } else {
          timer = setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="text-indigo-400 font-semibold border-r-2 border-indigo-400 dark:text-indigo-400 light:text-indigo-600 animate-pulse pr-1 min-h-[1.5em] inline-block">
      {currentText}
    </span>
  );
}

export default function Home() {
  return (
    <section className="space-y-16 py-6 md:py-12">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wider text-slate-500 uppercase">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Hi, I am <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Varadha K</span>
            </h1>
            <div className="text-xl md:text-2xl min-h-[40px] flex items-center justify-center lg:justify-start">
              <Typewriter />
            </div>
          </div>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-base md:text-lg max-w-2xl leading-relaxed">
            I am an MCA graduate passionate about Python development, Data Analytics, Software Development, and building practical software applications using Python and data-driven technologies. I enjoy solving practical problems through clean and efficient solutions while continuously learning new technologies.
          </p>

          {/* Social Icons - Clickable */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/Varadhakrishnadas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-200/50 border border-slate-800/80 light:border-slate-300/80 text-slate-400 hover:text-indigo-400 hover:scale-105 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/varadha-k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-200/50 border border-slate-800/80 light:border-slate-300/80 text-slate-400 hover:text-indigo-400 hover:scale-105 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:varadhakrishnadas@gmail.com"
              className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-200/50 border border-slate-800/80 light:border-slate-300/80 text-slate-400 hover:text-indigo-400 hover:scale-105 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:7907640429"
              className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-200/50 border border-slate-800/80 light:border-slate-300/80 text-slate-400 hover:text-indigo-400 hover:scale-105 transition-all duration-200"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://maps.google.com/?q=Palakkad,Kerala,India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-200/50 border border-slate-800/80 light:border-slate-300/80 text-slate-400 hover:text-indigo-400 hover:scale-105 transition-all duration-200"
              aria-label="Location"
            >
              <MapPin size={20} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="/resume.pdf"
              download="Varadha_K_Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-indigo-650 via-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-medium shadow-lg shadow-indigo-550/20 active:scale-[0.98] transition-all duration-250 cursor-pointer"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            <Link
              href="/projects"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/20 hover:bg-slate-800/40 text-slate-300 dark:text-slate-350 light:text-slate-800 dark:hover:text-white transition-all active:scale-[0.98] duration-200"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right Photo */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl animate-pulse-slow">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-950/20 bg-slate-900">
              <Image
                src="/profile.jpg"
                alt="Varadha K Profile Photo"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Overview Cards */}
      <div className="space-y-6 pt-10">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight border-b border-slate-850 dark:border-slate-850 light:border-slate-300 pb-2">
          Professional Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: MCA Graduate */}
          <div className="glass rounded-2xl p-6 flex items-start space-x-4 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 bg-indigo-550/10 text-indigo-400 rounded-xl">
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">MCA Graduate</h4>
              <p className="text-sm text-indigo-450 dark:text-indigo-400 light:text-indigo-600 mt-0.5">Bharathiar University</p>
              <p className="text-xs text-slate-500 mt-2">Nehru College of Management | Class of 2026</p>
            </div>
          </div>

          {/* Card 2: 2 Academic Projects */}
          <div className="glass rounded-2xl p-6 flex items-start space-x-4 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 bg-purple-550/10 text-purple-400 rounded-xl">
              <FolderGit2 size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">2 Academic Projects</h4>
              <p className="text-xs text-slate-400 dark:text-slate-450 light:text-slate-700 mt-1 leading-relaxed">
                • AI-Powered Interview Fairness System<br />
                • TrendScope YouTube Dashboard
              </p>
            </div>
          </div>

          {/* Card 3: Python Developer */}
          <div className="glass rounded-2xl p-6 flex items-start space-x-4 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
            <div className="p-3 bg-pink-550/10 text-pink-400 rounded-xl">
              <Code2 size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">Python Developer</h4>
              <p className="text-sm text-pink-450 dark:text-pink-400 light:text-pink-600 mt-0.5">Python • SQL • Streamlit</p>
              <p className="text-xs text-slate-500 mt-2">Focused on solving practical problems with clean and modular code.</p>
            </div>
          </div>

          {/* Card 4: Data Analytics */}
          <div className="glass rounded-2xl p-6 flex items-start space-x-4 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="p-3 bg-emerald-550/10 text-emerald-400 rounded-xl">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">Data Analytics</h4>
              <p className="text-sm text-emerald-450 dark:text-emerald-400 light:text-emerald-600 mt-0.5">Deloitte Australia Job Simulation</p>
              <p className="text-xs text-slate-500 mt-2">Hands-on experience in data analysis and forensic technology.</p>
            </div>
          </div>

          {/* Card 5: Open to Work */}
          <div className="glass rounded-2xl p-6 flex items-start space-x-4 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-2">
            <div className="p-3 bg-amber-550/10 text-amber-400 rounded-xl">
              <Briefcase size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">Open to Work</h4>
              <p className="text-sm text-amber-450 dark:text-amber-400 light:text-amber-600 mt-0.5">Actively Seeking Opportunities</p>
              <p className="text-xs text-slate-500 mt-2">Ready for internship and entry-level Software Developer, Python Developer, and Data Analyst roles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
