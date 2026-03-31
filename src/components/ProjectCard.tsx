"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Code, Terminal } from "lucide-react";
import clsx from "clsx";

interface ProjectCardProps {
  title: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage?: string;
  className?: string;
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
      if (!cardRef.current) return;

      const card = cardRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          duration: 0.5,
          ease: "power2.out",
          force3D: true,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
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
    <motion.div
      ref={cardRef}
      className={clsx(
        "project-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-8 backdrop-blur-sm transition-colors hover:border-white/10 hover:bg-zinc-900",
        className
      )}
    >
      <div className="absolute top-0 right-0 h-1 w-0 bg-blue-500 transition-all duration-700 group-hover:w-full" />
      
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-blue-400">
            <Terminal className="h-5 w-5" />
          </div>
          <div className="flex gap-4">
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-white"
            >
              <Code className="h-5 w-5" />
            </a>
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary transition-colors hover:text-white"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <h4 className="mb-3 text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
          {title.replace(/-/g, " ").toUpperCase()}
        </h4>
        <p className="mb-6 line-clamp-3 text-sm text-secondary/80">
          {description || "No description provided."}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary transition-colors group-hover:bg-white/10 group-hover:text-white"
          >
            {topic}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
