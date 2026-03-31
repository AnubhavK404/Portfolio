"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SKILLS = [
  "Cybersecurity", "Web Development", "Automation", "Web Design",
  "Web App Pentesting", "HTTP Protocol Analysis", "HTTPS Security",
  "Reconnaissance", "OSINT", "Vulnerability Assessment", "Exploitation",
  "SQL Injection", "XSS", "CSRF", "Auth & Session Attacks",
  "Directory Enumeration", "Subdomain Enumeration", "Network Scanning",
  "Port Scanning", "Packet Analysis", "Privilege Escalation",
  "Linux Security", "TCP/IP Networking", "DNS Analysis",
  "Web Proxies", "Interception", "Password Attacks",
  "Scripting for Automation", "Malware Analysis", "Security Misconfiguration"
];

const EDUCATION = [
  {
    year: "2023 - 2025",
    role: "Cybersecurity Engineering",
    company: "Specialization",
    description: "Focused on advanced web application security, network defense, and ethical hacking."
  },
  {
    year: "2019 - 2022",
    role: "Computer Science & Engineering",
    company: "DIT University, Dehradun",
    description: "Foundational studies in Computer Science and Engineering with a focus on web technologies and software development."
  }
];

const EXPERIENCE = [
  {
    year: "2020 - 2022",
    role: "Core Developer",
    company: "cForums Startup",
    description: "Developed and maintained community-driven web platforms, focusing on backend efficiency and user engagement features."
  },
  {
    year: "2020 - 2021",
    role: "Freelance Web Developer",
    company: "Independent",
    description: "Designed and launched multiple full-stack websites for diverse clients, specializing in custom UI/UX and responsive layouts."
  }
];

const PLATFORMS = [
  {
    name: "Hack The Box",
    description: "Engaging in competitive penetration testing labs to refine exploitation and reconnaissance techniques."
  },
  {
    name: "TryHackMe",
    description: "Continuous hands-on learning in controlled environments, mastering network security and threat analysis."
  }
];

const REAL_WORLD_APPS = [
  {
    year: "2026",
    name: "SpectreScan",
    description: "Advanced Cybersecurity Intelligence platform for real-time domain analysis, threat detection, and vulnerability scoring."
  },
  {
    year: "2026",
    name: "DataForge",
    description: "High-performance data visualizer that transforms raw data into interactive dashboards and professional insights instantly."
  }
];

export function Experience() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".timeline-item", {
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        force3D: true,
        scrollTrigger: {
          trigger: ".timeline-list",
          start: "top 85%",
        },
      });

      gsap.from(".skill-badge", {
        opacity: 0,
        scale: 0.9,
        y: 20,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.2)",
        force3D: true,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 90%",
        },
      });

      gsap.from(".platform-card", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".platforms-grid",
          start: "top 90%",
        },
      });

      // Hover effect for skill badges
      const badges = container.current?.querySelectorAll(".skill-badge");
      badges?.forEach((badge) => {
        badge.addEventListener("mouseenter", () => {
          gsap.to(badge, {
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            duration: 0.3,
            ease: "power2.out"
          });
        });
        badge.addEventListener("mouseleave", () => {
          gsap.to(badge, {
            scale: 1,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="w-full bg-zinc-950 px-4 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-2 items-start">
          {/* Timeline Column */}
          <div className="timeline-list">
            <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
              Experience & Education
            </h2>
            
            <div className="space-y-12">
              {EXPERIENCE.map((exp, index) => (
                <div key={`exp-${index}`} className="timeline-item group relative pl-8 border-l border-white/10 transition-colors hover:border-white/30">
                  <div className="absolute -left-[1.5px] top-0 h-4 w-[3px] bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  <p className="mb-2 text-xs font-mono text-secondary">{exp.year}</p>
                  <h3 className="mb-1 text-2xl font-bold">{exp.role}</h3>
                  <p className="mb-4 text-sm font-medium text-secondary">{exp.company}</p>
                  <p className="max-w-md text-secondary/80">{exp.description}</p>
                </div>
              ))}
              {EDUCATION.map((edu, index) => (
                <div key={`edu-${index}`} className="timeline-item group relative pl-8 border-l border-white/10 transition-colors hover:border-white/30">
                  <div className="absolute -left-[1.5px] top-0 h-4 w-[3px] bg-white opacity-0 transition-opacity group-hover:opacity-100" />
                  <p className="mb-2 text-xs font-mono text-secondary">{edu.year}</p>
                  <h3 className="mb-1 text-2xl font-bold">{edu.role}</h3>
                  <p className="mb-4 text-sm font-medium text-secondary">{edu.company}</p>
                  <p className="max-w-md text-secondary/80">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Real-world Applications Section */}
            <div className="mt-20">
              <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
                Real-world Applications
              </h2>
              <div className="space-y-12">
                {REAL_WORLD_APPS.map((app, index) => (
                  <div key={`app-${index}`} className="timeline-item group relative pl-8 border-l border-white/10 transition-colors hover:border-white/30">
                    <div className="absolute -left-[1.5px] top-0 h-4 w-[3px] bg-blue-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    <p className="mb-2 text-xs font-mono text-secondary">{app.year}</p>
                    <h3 className="mb-1 text-2xl font-bold uppercase tracking-tight text-blue-400">{app.name}</h3>
                    <p className="max-w-md text-secondary/80 leading-relaxed">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-20">
            {/* Skills Column */}
            <div className="skills-grid">
              <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
                Expertise / Skills
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-badge rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Platforms Column */}
            <div className="platforms-grid">
              <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
                Cybersecurity Platforms
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 items-stretch">
                {PLATFORMS.map((platform, index) => (
                  <div key={index} className="platform-card flex flex-col rounded-xl border border-white/5 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-white/20">
                    <h4 className="mb-3 font-bold text-blue-400 uppercase tracking-wider text-sm">{platform.name}</h4>
                    <p className="text-sm text-secondary/80 leading-relaxed">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

