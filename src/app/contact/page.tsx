"use client";

import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function Contact() {
  const contactCards = [
    {
      id: 1,
      title: "Email Address",
      value: "varadhakrishnadas@gmail.com",
      link: "mailto:varadhakrishnadas@gmail.com",
      icon: <Mail className="text-indigo-400" size={24} />,
      btnLabel: "Send Email"
    },
    {
      id: 2,
      title: "Phone Number",
      value: "+91 7907640429",
      link: "tel:7907640429",
      icon: <Phone className="text-purple-400" size={24} />,
      btnLabel: "Call Mobile"
    },
    {
      id: 3,
      title: "LinkedIn Profile",
      value: "linkedin.com/in/varadha-k",
      link: "https://linkedin.com/in/varadha-k",
      icon: <Linkedin className="text-pink-400" size={24} />,
      btnLabel: "Connect"
    },
    {
      id: 4,
      title: "GitHub Profile",
      value: "github.com/Varadhakrishnadas",
      link: "https://github.com/Varadhakrishnadas",
      icon: <Github className="text-emerald-400" size={24} />,
      btnLabel: "View Repositories"
    },
    {
      id: 5,
      title: "Current Location",
      value: "Sreevaradham, Palakkad, Kerala - 678010",
      link: "https://maps.google.com/?q=Sreevaradham,Palakkad,Kerala,India",
      icon: <MapPin className="text-amber-400" size={24} />,
      btnLabel: "View on Map"
    }
  ];

  return (
    <section className="space-y-12 py-6 md:py-12">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Get in <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-650 text-base md:text-lg max-w-xl">
          Feel free to reach out via any of my professional channels.
        </p>
      </div>

      {/* Grid of Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactCards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target={card.link.startsWith("http") ? "_blank" : undefined}
            rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="glass rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] hover:-translate-y-1 transition-all duration-350 group border border-slate-800/80 hover:border-indigo-500/20"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-200/50 rounded-2xl border border-slate-750/30">
                  {card.icon}
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Contact Card
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {card.title}
                </h3>
                <p className="text-base font-extrabold text-slate-105 dark:text-slate-200 light:text-slate-900 group-hover:text-indigo-400 transition-colors leading-relaxed break-words">
                  {card.value}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-850 dark:border-slate-850 light:border-slate-200 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-indigo-400 transition-colors">
              <span>{card.btnLabel}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>

      {/* Professional Note */}
      <div className="rounded-3xl glass p-6 md:p-8 max-w-3xl border-l-4 border-indigo-500 space-y-2">
        <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
          Availability
        </h4>
        <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-700 leading-relaxed">
          I am actively looking for internship opportunities and entry-level positions as a Software Developer, Python Developer, or Data Analyst. I am prompt in responding to professional inquiries via Email and LinkedIn. Let&apos;s build something great together.
        </p>
      </div>
    </section>
  );
}
