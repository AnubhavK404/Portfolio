"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion, isTouchDevice } from "@/lib/motion";
import {
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
  SKILL_GROUPS,
} from "@/data/profile";
import { SectionShell } from "@/components/ui/SectionShell";

export function Experience() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      const touch = isTouchDevice();

      gsap.from(".timeline-item", {
        opacity: 0,
        y: reduced ? 0 : 20,
        stagger: reduced ? 0 : 0.07,
        duration: reduced ? 0.01 : 0.75,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: ".timeline-list",
          start: "top 85%",
        },
      });

      gsap.from(".skill-badge", {
        opacity: 0,
        y: reduced ? 0 : 10,
        stagger: reduced ? 0 : 0.015,
        duration: reduced ? 0.01 : 0.5,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 90%",
        },
      });

      gsap.from(".cert-item", {
        opacity: 0,
        y: reduced ? 0 : 12,
        stagger: reduced ? 0 : 0.06,
        duration: reduced ? 0.01 : 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".certifications-grid",
          start: "top 90%",
        },
      });

      if (!touch) {
        const badges = container.current?.querySelectorAll(".skill-badge");
        badges?.forEach((badge) => {
          badge.addEventListener("mouseenter", () => {
            gsap.to(badge, { scale: 1.04, duration: 0.2, ease: "power2.out" });
          });
          badge.addEventListener("mouseleave", () => {
            gsap.to(badge, { scale: 1, duration: 0.2, ease: "power2.out" });
          });
        });
      }
    },
    { scope: container }
  );

  return (
    <SectionShell
      id="education"
      label="Experience"
      title={
        <>
          Background & <span className="text-secondary">expertise</span>
        </>
      }
      description="Four years of building for clients, startups, and my own SaaS products."
      className="py-24 md:py-32"
    >
      <div ref={container} className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="timeline-list space-y-12">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-widest text-secondary">
              // work history
            </p>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <div
                  key={`exp-${index}`}
                  className="timeline-item timeline-card group relative"
                >
                  <div className="timeline-dot" aria-hidden />
                  <p className="mb-1.5 font-mono text-xs text-secondary">{exp.year}</p>
                  <h3 className="mb-1 text-lg font-bold md:text-xl">{exp.role}</h3>
                  <p className="mb-2 text-sm font-medium text-secondary">{exp.company}</p>
                  <p className="text-sm leading-relaxed text-secondary/85">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-widest text-secondary">
              // education
            </p>
            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <div
                  key={`edu-${index}`}
                  className="timeline-item timeline-card group relative"
                >
                  <div className="timeline-dot" aria-hidden />
                  <p className="mb-1.5 font-mono text-xs text-secondary">{edu.year}</p>
                  <h3 className="mb-1 text-lg font-bold md:text-xl">{edu.role}</h3>
                  <p className="mb-2 text-sm font-medium text-secondary">{edu.company}</p>
                  <p className="text-sm leading-relaxed text-secondary/85">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-14">
          <div className="skills-grid">
            <p className="mb-8 font-mono text-xs uppercase tracking-widest text-secondary">
              // skills
            </p>
            <div className="space-y-7">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground/70">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge neu-badge px-3.5 py-2 text-xs font-medium text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-grid">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-secondary">
              // certifications
            </p>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  className="cert-item neu-card flex items-center justify-between gap-4 p-4 sm:p-5"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-xs text-secondary">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-secondary">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
