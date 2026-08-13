"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, ExternalLink } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";
import { prefersReducedMotion } from "@/lib/motion";
import { FEATURED_PROJECTS } from "@/data/profile";

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
    },
    { scope: container }
  );

  return (
    <div ref={container} className="bento-grid mb-4 grid gap-4">
      <div className="featured-card neu-card-featured relative col-span-1 flex flex-col justify-between p-8 sm:p-10 lg:col-span-2 lg:row-span-2 lg:min-h-[400px]">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="section-label">{hero.label}</span>
            <span className="neu-badge px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary">
              300+ users
            </span>
          </div>
          <h4 className="text-display mb-4 text-4xl sm:text-5xl lg:text-[3.5rem]">
            {hero.title}
          </h4>
          <p className="max-w-lg text-sm leading-relaxed text-secondary sm:text-base">
            {hero.description}
          </p>
        </div>
        {"tags" in hero && hero.tags && (
          <div className="mt-8 flex flex-wrap gap-2">
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
        <div className="mt-8">
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
      </div>

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
  );
}
