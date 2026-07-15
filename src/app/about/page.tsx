"use client";

import React from "react";
import { 
  User, 
  Target, 
  BookOpen, 
  Lightbulb, 
  Brain, 
  Code, 
  Database,
  Search
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <User className="text-indigo-400" size={20} />,
      title: "Motivated MCA Graduate",
      description: "Equipped with strong theoretical and practical knowledge in advanced computer applications."
    },
    {
      icon: <Code className="text-purple-400" size={20} />,
      title: "Python Developer",
      description: "Experienced in building interactive web portals, analytical tools, and database integrations using Python."
    },
    {
      icon: <Database className="text-pink-400" size={20} />,
      title: "Software Developer",
      description: "Dedicated to designing structured, component-based, and easy-to-edit clean software code."
    },
    {
      icon: <Lightbulb className="text-amber-400" size={20} />,
      title: "Academic Project Experience",
      description: "Successfully designed and implemented research-oriented projects: Interview Fairness and YouTube Analytics Dashboard."
    },
    {
      icon: <Search className="text-emerald-400" size={20} />,
      title: "Data Analytics Enthusiast",
      description: "Experienced in data cleaning, preprocessing, sentiment mapping, and metrics analysis."
    },
    {
      icon: <Brain className="text-blue-400" size={20} />,
      title: "Machine Learning Foundations",
      description: "Interested in machine learning concepts like TF-IDF, Cosine Similarity, and LSTM sequence modeling."
    },
    {
      icon: <BookOpen className="text-teal-400" size={20} />,
      title: "Continuous Learner & Problem Solver",
      description: "Thrive on solving logical problems, learning new frameworks, and staying updated with developer technologies."
    }
  ];

  return (
    <section className="space-y-12 py-6 md:py-12">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Who <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">I Am</span>
        </h1>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-base md:text-lg max-w-xl">
          Get to know my professional focus and career goals.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Career Objective */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl glass p-6 overflow-hidden hover:scale-[1.01] transition-transform duration-300">
            {/* Top Spotlight Gradient */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 bg-indigo-550/10 text-indigo-400 rounded-xl">
                <Target size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">Career Objective</h3>
            </div>
            
            <p className="text-slate-350 dark:text-slate-350 light:text-slate-700 text-sm md:text-base leading-relaxed">
              Recent Master of Computer Applications (MCA) graduate with a strong foundation in Python, Java, web development, and data analytics. Completed coursework and projects in Interview fairness systems, YouTube data analytics, and full-stack development. Eager to leverage analytical abilities to build intelligent, data-driven solutions and deliver impactful software products in a dynamic, tech-driven organization.
            </p>
          </div>
          
          <div className="rounded-2xl glass p-6 border-l-4 border-purple-500 text-slate-400 dark:text-slate-400 light:text-slate-700 text-sm leading-relaxed">
            I approach software engineering with a primary focus on practicality and efficiency. Rather than chasing complex or overly theoretical setups, I aim to implement solutions that are robust, testable, and maintainable.
          </div>
        </div>

        {/* Right Column: Professional Attributes List */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
              Professional Descriptors
            </h3>
            
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-200/50 rounded-xl mt-0.5 shrink-0 border border-slate-750/30">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-255 dark:text-slate-200 light:text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 dark:text-slate-450 light:text-slate-650 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
