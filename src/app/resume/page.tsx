"use client";
import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  ExternalLink,
  Sparkles
} from "lucide-react";

export default function Resume() {
   const [showPreview, setShowPreview] = useState(false);
  return (
    <section className="space-y-12 py-6 md:py-12">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Resume</span>
        </h1>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-base md:text-lg max-w-xl">
          View or download my latest professional curriculum vitae.
        </p>
      </div>

      {/* Toolbar Options Card */}
      <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:scale-[1.005] transition-transform duration-200">
        <div className="flex items-center space-x-4 text-center sm:text-left">
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20 shrink-0 hidden sm:block">
            <FileText size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center justify-center sm:justify-start">
              <span>Curriculum Vitae</span>
              <Sparkles size={14} className="text-purple-400 ml-1.5" />
            </h3>
            <p className="text-xs text-slate-450 dark:text-slate-400 light:text-slate-600 mt-0.5">
              Updated for software engineering and data analytics roles
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="/resume.pdf"
            download="Varadha_K_Resume.pdf"
            className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-5 py-3 bg-indigo-650 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-indigo-650/20"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-5 py-3 bg-slate-800 hover:bg-slate-750 border border-slate-700/80 rounded-xl text-sm font-semibold text-slate-205 dark:text-slate-300 light:text-slate-800 transition-all"
          >
            <span>Open Full Resume</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

     {/* Resume Preview */}
<div className="space-y-4">

  {!showPreview ? (
    <button
      onClick={() => setShowPreview(true)}
      className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition"
    >
      <FileText size={18} />
      Preview Resume
    </button>
  ) : (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
          Resume Preview
        </h3>

        <button
          onClick={() => setShowPreview(false)}
          className="text-sm text-indigo-500 hover:text-indigo-400"
        >
          Hide Preview
        </button>
      </div>

      <div className="relative w-full h-[75vh] rounded-3xl overflow-hidden border border-slate-850 dark:border-slate-850 light:border-slate-300 bg-slate-900/60 shadow-xl">
        <iframe
          src="/resume.pdf#toolbar=0"
          className="w-full h-full border-none"
          title="Resume PDF Preview"
        />
      </div>
    </>
  )}

</div>
    </section>
  );
}
