"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  BookOpen, 
  Presentation, 
  ExternalLink, 
  Award, 
  Calendar, 
  Tag, 
  X, 
  Download,
} from "lucide-react";

export default function Publications() {
  const [activeCertUrl, setActiveCertUrl] = useState<string | null>(null);

  const journals = [
    {
      id: 1,
      title: "Interview Question Analyzer: A Framework for Bias-Free Question Distribution and Evaluation",
      journalName: "International Journal of Scientific Research in Engineering & Management (IJSREM)",
      date: "February 2026",
      doi: "10.55041/IJSREM56346",
      paperUrl: "https://drive.google.com/file/d/1Y8k8WOkepWLeI5pjRu35qQ1bhgZ7mGUZ/view?usp=sharing",
      certUrl: "/certificates/ijsrem_cert.png"
    },
    {
      id: 2,
      title: "YouTube Pulse: Tracking Trends and Viewer Reactions",
      journalName: "International Journal of Advanced Research in Applied Science and Engineering Management (IJARASEM)",
      date: "September - October 2025",
      doi: null, // Omit DOI field if none exists
      paperUrl: "https://drive.google.com/file/d/1g-5JkS3GqsQPstnzwkS2JAiZkenYX4TE/view?usp=sharing",
      certUrl: "/certificates/ijarasem_cert.pdf"
    }
  ];

  const conferences = [
    {
      id: 1,
      conferenceName: "13th National Conference on \"The Agentic Turn: New Era of Artificial Intelligence\"",
      paperTitle: "An Automated Fairness Aware Interview Question Distribution System",
      organizer: "Computer Science Stream of Sri Krishna Arts and Science College, Coimbatore",
      date: "24.02.2026",
      certUrl: "/certificates/flutter_program.jpg"
    }
  ];

  const handleOpenCert = (url: string) => {
    setActiveCertUrl(url);
  };

  const handleCloseCert = () => {
    setActiveCertUrl(null);
  };

  const isPdfFile = (url: string) => {
    return url.toLowerCase().endsWith(".pdf");
  };

  return (
    <section className="space-y-16 py-6 md:py-12">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Publications & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Conference Presentations</span>
        </h1>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-base md:text-lg max-w-xl">
          Academic research papers and presentations in national forums.
        </p>
      </div>

      {/* Section 1: Journal Publications */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 border-b border-slate-850 dark:border-slate-850 light:border-slate-300 pb-2 flex items-center">
          <BookOpen className="text-indigo-400 mr-2.5" size={22} />
          Journal Publications
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {journals.map((paper) => (
            <div
              key={paper.id}
              className="glass rounded-2xl p-6 md:p-8 hover:scale-[1.005] transition-transform duration-200 border-l-4 border-indigo-500"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-indigo-450 dark:text-indigo-400 light:text-indigo-600 bg-indigo-500/10 px-3 py-1 rounded-full">
                    {paper.journalName}
                  </span>
                  
                  <h4 className="text-lg md:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug">
                    {paper.title}
                  </h4>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-450 dark:text-slate-400 light:text-slate-650 font-medium">
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1.5 text-indigo-450" />
                      {paper.date}
                    </span>
                    {paper.doi && (
                      <span className="flex items-center">
                        <Tag size={12} className="mr-1.5 text-indigo-450" />
                        <span>DOI: {paper.doi}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Buttons container */}
                <div className="flex flex-row md:flex-col items-center gap-3 shrink-0 pt-2">
                  <a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:w-full flex items-center justify-center space-x-1.5 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-650/10"
                  >
                    <span>View Journal</span>
                    <ExternalLink size={12} />
                  </a>
                  
                  <button
                    onClick={() => handleOpenCert(paper.certUrl)}
                    className="flex-1 md:w-full flex items-center justify-center space-x-1.5 px-4 py-2.5 bg-slate-800/80 border border-slate-700/80 hover:bg-slate-750 rounded-xl text-xs font-bold text-slate-300 dark:text-slate-350 light:text-slate-800 transition-all"
                  >
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Conference Presentations */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 border-b border-slate-850 dark:border-slate-850 light:border-slate-300 pb-2 flex items-center">
          <Presentation className="text-purple-400 mr-2.5" size={22} />
          Conference Presentations
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {conferences.map((conf) => (
            <div
              key={conf.id}
              className="glass rounded-2xl p-6 md:p-8 hover:scale-[1.005] transition-transform duration-200 border-l-4 border-purple-500"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-purple-450 dark:text-purple-400 light:text-purple-600 bg-purple-500/10 px-3 py-1 rounded-full">
                    {conf.organizer}
                  </span>
                  
                  <h4 className="text-lg md:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug">
                    {conf.paperTitle}
                  </h4>

                  <p className="text-xs md:text-sm text-slate-400 dark:text-slate-450 light:text-slate-750">
                    Conference: <span className="font-semibold">{conf.conferenceName}</span>
                  </p>

                  <div className="flex items-center text-xs text-slate-450 dark:text-slate-400 light:text-slate-650 font-medium">
                    <Calendar size={12} className="mr-1.5 text-purple-450" />
                    Presentation Date: {conf.date}
                  </div>
                </div>

                {/* View Certificate (No View Paper Button) */}
                <div className="flex items-center shrink-0 pt-2">
                  <button
                    onClick={() => handleOpenCert(conf.certUrl)}
                    className="w-full md:w-auto flex items-center justify-center space-x-1.5 px-4 py-2.5 bg-purple-650 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-purple-650/10"
                  >
                    <Award size={14} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Viewer */}
      {activeCertUrl && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 p-4 transition-all">
          {/* Top Bar */}
          <div className="w-full max-w-4xl flex items-center justify-between pb-4 text-slate-400">
            <span className="text-sm font-semibold truncate max-w-[70%]">
              Document Viewer
            </span>
            <div className="flex items-center space-x-4">
              <a
                href={activeCertUrl}
                download
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-200 transition-colors"
              >
                <Download size={14} />
                <span className="hidden sm:inline">Download</span>
              </a>
              <button
                onClick={handleCloseCert}
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Main Viewer Wrapper */}
          <div className="relative w-full max-w-4xl h-[75vh] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
            {isPdfFile(activeCertUrl) ? (
              <iframe
                src={`${activeCertUrl}#toolbar=0`}
                className="w-full h-full border-none"
                title="Document PDF Viewer"
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src={activeCertUrl}
                  alt="Certificate Image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
