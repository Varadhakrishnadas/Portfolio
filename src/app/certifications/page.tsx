"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
   
  Eye, 
  Download, 
  X, 
  FileText, 
  ExternalLink,
  Calendar,
  Building2
} from "lucide-react";

export default function Certifications() {
  const [activeCertUrl, setActiveCertUrl] = useState<string | null>(null);

  const certifications = [
    {
      id: 1,
      name: "Computer Science Short-term Internship",
      org: "ITI Limited, Palakkad",
      year: "2023",
      fileUrl: "/certificates/iti_internship.jpg",
      thumbnail: "/certificates/iti_internship.jpg",
      note: "Internship completed during B.Sc."
    },
    {
      id: 2,
      name: "Data Analytics Job Simulation",
      org: "Deloitte Australia (Forage)",
      year: "2025",
      fileUrl: "/certificates/deloitte.pdf",
      thumbnail: "/profile.jpg", // placeholder thumbnail if pdf, or generic icon
      note: "Forensic Technology & Data Analysis Simulation"
    },
    {
      id: 3,
      name: "30 Days Masterclass in Full Stack Development",
      org: "NoviTech R&D Pvt Ltd",
      year: "2026",
      fileUrl: "/certificates/novitech.pdf",
      thumbnail: "/profile.jpg",
      note: "Full Stack Software Development Masterclass"
    },
    {
      id: 4,
      name: "Data Analyst Skill Certification Test",
      org: "One Roadmap",
      year: "2025",
      fileUrl: "/certificates/oneroadmap.pdf",
      thumbnail: "/profile.jpg",
      note: "Skill Assessment & Achievement Certification"
    },
    {
      id: 5,
      name: "Data Analytics Training Program",
      org: "Analyx Academy",
      year: "2026",
      fileUrl: "/certificates/analyx.pdf",
      thumbnail: "/profile.jpg",
      note: "15 Days Data Analytics Mini Project Program"
    },
    {
      id: 6,
      name: "Five Days Value Added Program on Mobile App Development using Flutter",
      org: "Accent Techno Soft (ATS)",
      year: "2025",
      fileUrl: "/certificates/sri_krishna_conference.jpg",
      thumbnail: "/certificates/sri_krishna_conference.jpg",
      note: "Mobile App Development Training in association with Nehru College of Management"
    }
  ];

  const handleOpenCert = (url: string) => {
    setActiveCertUrl(url);
  };

  const handleCloseCert = () => {
    setActiveCertUrl(null);
  };

  // Automatically detect the file type
  const isPdfFile = (url: string) => {
    return url.toLowerCase().endsWith(".pdf");
  };

  return (
    <section className="space-y-12 py-6 md:py-12">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
        </h1>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-base md:text-lg max-w-xl">
          Verified academic and professional training credentials.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => {
          const isPdf = isPdfFile(cert.fileUrl);
          
          return (
            <div
              key={cert.id}
              className="glass rounded-2xl p-5 flex flex-col justify-between hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top Section */}
              <div className="space-y-4">
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 flex items-center justify-center">
                  {!isPdf ? (
                    <Image
                      src={cert.thumbnail}
                      alt={cert.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-350"
                    />
                  ) : (
                    // Premium PDF visual placeholder representation
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-indigo-400 space-y-3">
                      <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                        <FileText size={32} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">PDF Document</span>
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-200">
                    <button
                      onClick={() => handleOpenCert(cert.fileUrl)}
                      className="p-3 bg-indigo-650 text-white rounded-full shadow-lg shadow-indigo-600/30 hover:scale-110 active:scale-95 transition-transform"
                    >
                      <Eye size={20} />
                    </button>
                  </div>
                </div>

                {/* Text Data */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                    <Building2 size={12} />
                    <span>{cert.org}</span>
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug min-h-[3rem] line-clamp-2">
                    {cert.name}
                  </h3>
                  
                  {cert.note && (
                    <p className="text-[11px] text-slate-450 dark:text-slate-500 light:text-slate-650 italic">
                      {cert.note}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-6 pt-4 border-t border-slate-850 dark:border-slate-850 light:border-slate-200 flex items-center justify-between">
                <span className="flex items-center text-xs font-bold text-slate-400 bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-250 border border-slate-750/30 px-2.5 py-1 rounded-md">
                  <Calendar size={12} className="mr-1.5 text-indigo-400" />
                  {cert.year}
                </span>

                <button
                  onClick={() => handleOpenCert(cert.fileUrl)}
                  className="flex items-center space-x-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Embedded Document Viewer Modal */}
      {activeCertUrl && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 p-4 transition-all">
          {/* Top Bar */}
          <div className="w-full max-w-4xl flex items-center justify-between pb-4 text-slate-400">
            <span className="text-sm font-semibold truncate max-w-[70%]">
              Certificate Viewer
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
                title="Certificate PDF Viewer"
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
