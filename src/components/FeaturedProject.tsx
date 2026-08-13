"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, ExternalLink } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";
import { prefersReducedMotion } from "@/lib/motion";
import { FEATURED_PROJECTS } from "@/data/profile";

const CLINNK_METRICS = [
  { value: "300+", label: "Live users" },
  { value: "Solo", label: "Built & shipped" },
  { value: "Pay", label: "Razorpay live" },
];

const CLINNK_LINKS = ["Payments", "Analytics", "Embeds"];

export function FeaturedProject() {
  const container = useRef<HTMLDivElement>(null);
  const [hero, ...rest] = FEATURED_PROJECTS;

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();

      gsap.from(".featured-card", {
        opacity: 0,
        y: reduced ? 0 : 28,
        stagger: reduced ? 0 : 0.08,
        duration: reduced ? 0.01 : 0.8,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });

      if (!reduced) {
        gsap.from(".sk-link", {
          y: 8,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".sk-device",
            start: "top 90%",
          },
        });
      }
    },
    { scope: container }
  );

  return (
    <div ref={container} className="mb-4 space-y-4">
      <article className="featured-card clinnk-plate grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="section-label">Flagship product</span>
            <span className="neu-badge px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary">
              300+ users
            </span>
          </div>

          <h4 className="text-display mb-4 text-5xl sm:text-6xl lg:text-7xl">
            {hero.title}
          </h4>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-secondary sm:text-lg">
            {hero.description}
          </p>

          <div className="mb-8 grid grid-cols-3 gap-3">
            {CLINNK_METRICS.map((metric) => (
              <div key={metric.label} className="clinnk-metric px-2 py-3 text-center sm:px-3 sm:py-4">
                <p className="text-sm font-semibold tracking-tight sm:text-lg">{metric.value}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-secondary sm:text-[10px]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {"tags" in hero && hero.tags && (
            <div className="mb-8 flex flex-wrap gap-2">
              {hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="neu-badge px-3 py-1 font-mono text-[10px] text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <NeuButton
            href={hero.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            size="md"
          >
            {hero.cta}
            <ArrowRight className="h-4 w-4" suppressHydrationWarning />
          </NeuButton>
        </div>

        <div className="sk-device mx-auto w-full max-w-sm" aria-hidden>
          <div className="sk-chrome">
            <span className="sk-dot" />
            <span className="sk-dot" />
            <span className="sk-dot" />
            <span className="sk-url">clinnk.in</span>
          </div>
          <div className="sk-screen">
            <div className="sk-avatar">C</div>
            <p className="text-sm font-semibold tracking-tight">Your page</p>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-secondary">
              Link in bio
            </p>
            {CLINNK_LINKS.map((label) => (
              <div key={label} className="sk-link">
                {label}
              </div>
            ))}
          </div>
        </div>
      </article>

      <div className="bento-grid grid gap-4">
        {rest.map((project) => (
          <div
            key={project.title}
            className="featured-card neu-card flex flex-col justify-between p-6 sm:p-8"
          >
            <div>
              <p className="section-label mb-3">{project.label}</p>
              <h4 className="text-display mb-3 text-2xl sm:text-3xl">{project.title}</h4>
              <p className="text-sm leading-relaxed text-secondary">
                {project.description}
              </p>
              {"tags" in project && project.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="neu-badge px-2.5 py-1 font-mono text-[10px] text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <NeuButton
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              variant={project.variant}
              size="md"
              className="mt-6 w-full sm:w-auto"
            >
              <ExternalLink className="h-3.5 w-3.5" suppressHydrationWarning />
              {project.cta}
            </NeuButton>
          </div>
        ))}
      </div>
    </div>
  );
}
