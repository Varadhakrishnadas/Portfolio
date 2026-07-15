"use client";

import React from "react";
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  FileText, 
  Presentation,
  Briefcase
} from "lucide-react";

export default function Education() {
  const educationTimeline = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Nehru College of Management (Affiliated to Bharathiar University)",
      location: "Coimbatore, Tamil Nadu",
      period: "2024 – 2026",
      score: "CGPA: 8.4/10",
      description: "My MCA coursework focused heavily on programming, software engineering, database systems, computer networking, software testing, cloud computing, PHP, Java, .NET, data mining, and Python programming. It culminated in an AI-based academic project focusing on algorithmic fairness in automated interview evaluation."
    },
    {
      degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
      institution: "College of Applied Science, Malampuzha (Affiliated to Calicut University)",
      location: "Palakkad, Kerala",
      period: "2021 – 2024",
      score: "First Class",
      description: "Completed foundation studies in computer systems, data structures, algorithms, databases, system software, operating systems, and web technologies. Completed a short-term internship at ITI Limited during this period."
    },
    {
      degree: "Higher Secondary (Computer Science)",
      institution: "Kerala State Board",
      location: "Palakkad, Kerala",
      period: "2018 – 2020",
      score: "Score: 75%",
      description: "Studied core sciences with Computer Science, Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Kerala State Board",
      location: "Palakkad, Kerala",
      period: "2018",
      score: "Score: 87%",
      description: "General school education covering languages, mathematics, social sciences, and general science."
    }
  ];

  const highlights = [
    {
      icon: <Award className="text-indigo-400" size={20} />,
      label: "CGPA Score",
      title: "8.4 / 10 CGPA",
      desc: "First Class academic track record maintained throughout my post-graduate studies (MCA)."
    },
    {
      icon: <GraduationCap className="text-purple-400" size={20} />,
      label: "Major Project",
      title: "Interview Fairness System",
      desc: "Designed an AI-Powered question distribution framework implementing TF-IDF relevancy and parity controls."
    },
    {
      icon: <Briefcase className="text-pink-400" size={20} />,
      label: "B.Sc. Internship",
      title: "ITI Limited, Palakkad",
      desc: "Completed hands-on short-term training in Computer Science at ITI Limited (Aug 16 – Aug 26, 2023)."
    },
    {
      icon: <FileText className="text-emerald-400" size={20} />,
      label: "Journal Publications",
      title: "2 Research Journals",
      desc: "Published research in IJSREM (Bias-Free Distribution) and IJARASEM (YouTube Sentiment Dashboard)."
    },
    {
      icon: <Presentation className="text-amber-400" size={20} />,
      label: "Conference Presentations",
      title: "13th National Conference",
      desc: "Presented paper on 'An Automated Fairness Aware Interview Question Distribution System' at Sri Krishna Arts & Science College."
    }
  ];

  return (
    <section className="space-y-16 py-6 md:py-12">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Education</span>
        </h1>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-base md:text-lg max-w-xl">
          Academic progression, timelines, and credentials.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l border-slate-800 dark:border-slate-800 light:border-slate-200 ml-4 md:ml-6 space-y-12">
        {educationTimeline.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-10">
            {/* Timeline Circle Node */}
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-4 border-indigo-500 flex items-center justify-center dark:bg-slate-950" />
            
            <div className="glass rounded-2xl p-6 md:p-8 space-y-4 hover:scale-[1.01] transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-700 mt-1">
                    {item.institution} • <span className="italic">{item.location}</span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full shrink-0">
                    <Calendar size={12} className="mr-1.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center text-xs font-semibold text-emerald-450 dark:text-emerald-400 light:text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full shrink-0">
                    {item.score}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Academic Highlights */}
      <div className="space-y-6 pt-6">
        <h3 className="text-2xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 border-b border-slate-850 dark:border-slate-850 light:border-slate-300 pb-2">
          Academic Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((card, index) => (
            <div key={index} className="glass rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {card.label}
                  </span>
                  <div className="p-2 bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-200/50 rounded-xl border border-slate-700/30">
                    {card.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {card.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-450 dark:text-slate-400 light:text-slate-650 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
