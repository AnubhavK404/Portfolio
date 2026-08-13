"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Code2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { isTouchDevice } from "@/lib/motion";

interface ProjectCardProps {
  title: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage?: string;
  className?: string;
}

function formatTitle(title: string) {
  return title
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function ProjectCard({
  title,
  description,
  topics,
  html_url,
  homepage,
  className,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardRef.current || isTouchDevice()) return;

      const card = cardRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 900,
          duration: 0.35,
          ease: "power2.out",
          force3D: true,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className={cn(
        "neu-card group relative flex flex-col justify-between p-6 sm:p-7",
        className
      )}
    >
      <div>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-secondary">
              Project
            </p>
            <h4 className="text-display text-xl text-foreground sm:text-2xl">
              {formatTitle(title)}
            </h4>
          </div>
          <div className="flex shrink-0 gap-2">
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-raised-sm flex h-9 w-9 items-center justify-center text-secondary transition-colors hover:text-foreground"
              aria-label="View source code"
            >
              <Code2 className="h-4 w-4" suppressHydrationWarning />
            </a>
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-raised-sm flex h-9 w-9 items-center justify-center text-secondary transition-colors hover:text-foreground"
                aria-label="View live demo"
              >
                <ExternalLink className="h-4 w-4" suppressHydrationWarning />
              </a>
            )}
          </div>
        </div>

        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-secondary">
          {description || "No description provided."}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {topics.slice(0, 4).map((topic) => (
          <span
            key={topic}
            className="neu-badge px-2.5 py-1 font-mono text-[10px] text-secondary"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
