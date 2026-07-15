"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Layers, 
  CheckCircle2,
  Clock,
  Terminal,
  ExternalLink
} from "lucide-react";
import { Github } from "@/components/BrandIcons";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const p1Screenshots = [
    {
      src: "/projects/login.png",
      title: "Login Page",
      caption: "User Authentication – Secure login interface providing access to the Interview Analyzer system."
    },
    {
      src: "/projects/distribution.png",
      title: "Fair Question Distribution",
      caption: "Fair Question Distribution – Successfully distributes interview questions among candidates using the fairness and equity algorithm while maintaining balanced difficulty levels."
    },
    {
      src: "/projects/analytics.png",
      title: "Thematic Mapping & Analytics",
      caption: "Analytics Dashboard – Visual representation of question distribution, thematic mapping, and complexity analysis."
    },
    {
      src: "/projects/audit.png",
      title: "Audit Logs",
      caption: "Audit Logs – Maintains interview history and system activity for transparency and traceability."
    },
    {
      src: "/projects/email.png",
      title: "Email Console",
      caption: "Email Integration – Generates and sends interview reports directly through the application."
    }
  ];

  const project1 = {
    title: "AI-Powered Interview Fairness System",
    subtitle: "MCA Major Academic Project (2025–2026)",
    github: "https://github.com/Varadhakrishnadas/AI-Powered-Interview-Fairness-Question-Distribution-System",
    overview: "An automated HR evaluation assistant designed to ensure structural fairness in interview question distribution. By analyzing candidates' academic streams (BCA, B.Sc. CS, B.Tech) and matching them to job roles, the system distributes questions dynamically, enforcing parity and minimizing evaluative bias.",
    features: [
      "Streamlit-based HR portal with secure SQLite authentication.",
      "TF-IDF based relevancy matching of questions against target job descriptions.",
      "Algorithmic distribution ensuring equitable complexity (Easy, Medium, Hard) across candidates.",
      "Interactive data visualizations of candidate complexity and questions distribution maps.",
      "One-click PDF/CSV report generation and automated email dispatch capabilities."
    ],
    tech: ["Python", "Streamlit", "SQLite", "Pandas", "NumPy", "Scikit-learn", "Plotly", "ReportLab", "PyPDF2"],
    responsibilities: [
      "Designed and implemented the core equity algorithm for question indexing and distribution.",
      "Built the responsive Streamlit user interface and integrated Plotly for analytical dashboards.",
      "Constructed the database schema in SQLite for user sessions, audits, and archives.",
      "Implemented automated PDF compilation using ReportLab and mail service integration."
    ],
    learnings: [
      "Deepened practical understanding of TF-IDF text vectorization and cosine similarity calculations.",
      "Gained expertise in database session handling and transaction logging in SQLite.",
      "Refined skills in building rapid UI prototypes using Streamlit and structuring clean, modular Python packages."
    ],
    timeline: [
      { phase: "Requirement Analysis", duration: "2 Weeks", details: "Studied existing manual bias pitfalls and mapped standard HR distribution demands." },
      { phase: "System Design", duration: "3 Weeks", details: "Modeled database schema, flowcharts, and drafted the equity mathematical framework." },
      { phase: "Development", duration: "5 Weeks", details: "Wrote the core python modules,Streamlit interfaces, and report generators." },
      { phase: "Testing", duration: "2 Weeks", details: "Tested with mock batches of BCA/B.Tech candidates to verify equity distributions." },
      { phase: "Documentation", duration: "2 Weeks", details: "Drafted project logs, setup guidelines, and completed the conference submission." }
    ]
  };

  const project2 = {
    title: "TrendScope YouTube Intelligence Dashboard",
    subtitle: "MCA Mini Academic Project (2025)",
    github: "https://github.com/Varadhakrishnadas/TrendScope-YouTube-Intelligence-Dashboard",
    overview: "A business intelligence tool focused on YouTube metrics and viewer sentiment analysis. It enables digital marketing professionals and content developers to analyze comments, track video metrics, and forecast trends using natural language processing and deep learning sequence models.",
    features: [
      "YouTube Data API integration for fetching real-time video metrics and comments.",
      "Comment cleaning and sentiment analysis mapping user reactions (positive, neutral, negative).",
      "Interactive trend visualizations using Matplotlib and Pandas.",
      "Experimental LSTM forecasting models predicting views trends."
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "TextBlob", "TensorFlow", "LSTM", "YouTube Data API"],
    responsibilities: [
      "Developed connections to YouTube Data API endpoints for comments collection.",
      "Wrote text parsing scripts for comment normalization and emoji filtering.",
      "Configured the TextBlob NLP pipeline to calculate polarity scores.",
      "Wrote the experimental LSTM model script for views forecasting."
    ],
    learnings: [
      "Understood how to handle rate limits and structural payloads of public API endpoints.",
      "Learned sequence model data-preparation (sliding windows) for neural networks.",
      "Enhanced visualization patterns for sentiment mapping and time-series representations."
    ],
    timeline: [
      { phase: "Requirement Analysis", duration: "2 Weeks", details: "Defined key performance indicators for content creators and studied YouTube API parameters." },
      { phase: "System Design", duration: "2 Weeks", details: "Designed data flow pipelines from comment fetching to model inference." },
      { phase: "Development", duration: "4 Weeks", details: "Developed Pandas preprocessing scripts and configured the deep learning models." },
      { phase: "Testing", duration: "2 Weeks", details: "Validated forecasting curves and tested NLP sentiment boundaries on live comments." },
      { phase: "Documentation", duration: "1 Week", details: "Completed project logs and drafted the research paper detailing sentiment thresholds." }
    ]
  };

  // Lightbox functions
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % p1Screenshots.length);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + p1Screenshots.length) % p1Screenshots.length);
    }
  };

  const project = activeProject === 1 ? project1 : project2;

  return (
    <section className="space-y-12 py-6 md:py-12">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Academic <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-base md:text-lg max-w-xl">
          Core university projects designed to solve practical problems.
        </p>
      </div>

      {/* Project Selector Tabs */}
      <div className="flex p-1 bg-slate-900/50 light:bg-slate-200/55 rounded-2xl max-w-2xl border border-slate-800 dark:border-slate-800 light:border-slate-300">
        <button
          onClick={() => setActiveProject(1)}
          className={`flex-1 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
            activeProject === 1
              ? "bg-indigo-650 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-250 dark:hover:text-slate-200 light:text-slate-700"
          }`}
        >
          Interview Fairness System
        </button>
        <button
          onClick={() => setActiveProject(2)}
          className={`flex-1 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
            activeProject === 2
              ? "bg-indigo-650 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-250 dark:hover:text-slate-200 light:text-slate-700"
          }`}
        >
          YouTube Analytics Dashboard
        </button>
      </div>

      {/* Main Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Overview and Tech Stack */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card Header & Description */}
          <div className="glass rounded-3xl p-6 md:p-8 space-y-6">
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                {project.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-1">
                {project.title}
              </h2>
            </div>

            <p className="text-slate-350 dark:text-slate-400 light:text-slate-700 text-base leading-relaxed">
              {project.overview}
            </p>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 uppercase tracking-wider">
                Key Features
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-400 dark:text-slate-400 light:text-slate-650">
                    <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons (GitHub only, Hide Live Demo) */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-3 bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white rounded-xl text-sm font-semibold transition-all duration-200"
              >
                <Github size={18} />
                <span>View GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Gallery / Source Code Section */}
          {activeProject === 1 ? (
            <div className="glass rounded-3xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 border-b border-slate-850 dark:border-slate-850 light:border-slate-200 pb-3">
                Project Screenshots
              </h3>
              
              {/* Screenshots Gallery grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {p1Screenshots.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="group relative aspect-video rounded-xl overflow-hidden border border-slate-850 hover:border-indigo-500/40 bg-slate-950 transition-all focus:outline-none"
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-350"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-xs bg-indigo-650 text-white font-medium px-2.5 py-1.5 rounded-lg shadow-md">
                        Preview
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Project 2: Professional Source Code Available Fallback */
            <div className="glass rounded-3xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 border-b border-slate-850 dark:border-slate-850 light:border-slate-200 pb-3">
                Project Access
              </h3>
              
              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-indigo-400">
                    <Terminal size={18} />
                    <span className="text-sm font-semibold tracking-wider uppercase">Source Code Available</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 dark:text-slate-450 light:text-slate-700 leading-relaxed">
                    This project is a source-code-only command line and deep learning pipeline. You can check the structured repository for notebook evaluations and metrics.
                  </p>
                </div>
                
                <a
                  href={project2.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-3 bg-indigo-650 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shrink-0 transition-colors shadow-lg shadow-indigo-650/20"
                >
                  <ExternalLink size={14} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Tech Stack, Timelines, Responsibilities, and Learnings */}
        <div className="lg:col-span-5 space-y-6">
          {/* Tech stack */}
          <div className="glass rounded-3xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 uppercase tracking-wider flex items-center">
              <Layers size={16} className="text-indigo-400 mr-2" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-250 border border-slate-750/30 text-slate-300 dark:text-slate-300 light:text-slate-750">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities & Learnings */}
          <div className="glass rounded-3xl p-6 space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-255 dark:text-slate-200 light:text-slate-900 border-b border-slate-850 dark:border-slate-850 light:border-slate-200 pb-2">
                My Responsibilities
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-400 dark:text-slate-400 light:text-slate-650 leading-relaxed">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-indigo-400 font-bold mr-2 shrink-0">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-3">
              <h4 className="text-sm font-bold text-slate-255 dark:text-slate-200 light:text-slate-900 border-b border-slate-850 dark:border-slate-850 light:border-slate-200 pb-2">
                What I Learned
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-400 dark:text-slate-400 light:text-slate-650 leading-relaxed">
                {project.learnings.map((learn, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-emerald-450 dark:text-emerald-400 light:text-emerald-600 font-bold mr-2 shrink-0">•</span>
                    <span>{learn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="glass rounded-3xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-255 dark:text-slate-200 light:text-slate-900 uppercase tracking-wider flex items-center">
              <Clock size={16} className="text-indigo-400 mr-2" />
              Project Timeline
            </h4>
            <div className="space-y-4 pt-2">
              {project.timeline.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-extrabold text-slate-200 dark:text-slate-200 light:text-slate-900">{item.phase}</span>
                      <span className="text-[10px] bg-slate-800 dark:bg-slate-800 light:bg-slate-300 text-slate-400 px-1.5 py-0.5 rounded-md">{item.duration}</span>
                    </div>
                    <p className="text-[11px] text-slate-450 dark:text-slate-400 light:text-slate-650 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Full screen gallery Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 p-4 transition-all">
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 rounded-full bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Interactive Slide wrapper */}
          <div className="relative w-full max-w-5xl aspect-video max-h-[70vh] flex items-center justify-center">
            
            {/* Left arrow */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:-left-16 z-10 p-3 rounded-full bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Full Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <Image
                src={p1Screenshots[lightboxIndex].src}
                alt={p1Screenshots[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right arrow */}
            <button
              onClick={nextImage}
              className="absolute right-2 md:-right-16 z-10 p-3 rounded-full bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Image caption */}
          <div className="mt-6 text-center max-w-2xl px-4 space-y-1">
            <h4 className="text-lg font-bold text-slate-100">{p1Screenshots[lightboxIndex].title}</h4>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{p1Screenshots[lightboxIndex].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
