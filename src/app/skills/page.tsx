"use client";

import React from "react";
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  Library 
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={20} className="text-indigo-400" />,
      skills: [
        { name: "Python", tag: "Project Experience", highlight: true },
        { name: "Java", tag: "Fundamentals", highlight: false },
        { name: "SQL", tag: "Academic & Project Level", highlight: true }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe size={20} className="text-purple-400" />,
      skills: [
        { name: "HTML", tag: "", highlight: false },
        { name: "CSS", tag: "", highlight: false },
        { name: "Streamlit", tag: "Main Framework", highlight: true }
      ]
    },
    {
      title: "Database Management",
      icon: <Database size={20} className="text-pink-400" />,
      skills: [
        { name: "SQLite", tag: "Embedded Projects", highlight: true },
        { name: "MySQL", tag: "Academic Experience", highlight: false }
      ]
    },
    {
      title: "Python Libraries",
      icon: <Library size={20} className="text-emerald-400" />,
      skills: [
        { name: "Pandas", tag: "Data Analysis", highlight: true },
        { name: "NumPy", tag: "Computation", highlight: false },
        { name: "Plotly", tag: "Visualizations", highlight: true },
        { name: "ReportLab", tag: "PDF Generation", highlight: true }
      ]
    },
    {
      title: "Machine Learning Concepts",
      icon: <Cpu size={20} className="text-amber-400" />,
      skills: [
        { name: "TF-IDF", tag: "Relevancy Scoring", highlight: true },
        { name: "Cosine Similarity", tag: "Distance Metric", highlight: true },
        { name: "LSTM", tag: "Academic Knowledge", highlight: false }
      ]
    },
    {
      title: "Tools & Environments",
      icon: <Wrench size={20} className="text-teal-400" />,
      skills: [
        { name: "Git", tag: "Basic", highlight: false },
        { name: "GitHub", tag: "Version Control", highlight: true },
        { name: "VS Code", tag: "Primary IDE", highlight: false },
        { name: "Jupyter Notebook", tag: "Prototyping", highlight: false }
      ]
    }
  ];

  return (
    <section className="space-y-12 py-6 md:py-12">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
        </h1>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-base md:text-lg max-w-xl">
          Core technical competencies, libraries, and frameworks.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass rounded-2xl p-6 md:p-8 space-y-6 hover:scale-[1.01] transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center space-x-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
              <div className="p-2 bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-200/50 rounded-xl border border-slate-700/30">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {category.title}
              </h3>
            </div>

            {/* Badges container */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    skill.highlight
                      ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-300 shadow-md shadow-indigo-500/5"
                      : "bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-200/50 border-slate-800/80 light:border-slate-350 text-slate-300 dark:text-slate-300 light:text-slate-750"
                  }`}
                >
                  <span className="font-bold">{skill.name}</span>
                  {skill.tag && (
                    <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md ${
                      skill.highlight 
                        ? "bg-indigo-500/20 text-indigo-400" 
                        : "bg-slate-800 text-slate-500 dark:bg-slate-800 light:bg-slate-300 light:text-slate-600"
                    }`}>
                      {skill.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
