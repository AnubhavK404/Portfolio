"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ProjectCard } from "./ProjectCard";
import { FeaturedProject } from "./FeaturedProject";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/lib/motion";
import { MANUAL_PROJECTS, PROJECT_CATEGORIES } from "@/data/profile";
import { SectionShell } from "@/components/ui/SectionShell";

interface Repo {
  id: number;
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage?: string;
}

export function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/AnubhavK404/repos?sort=updated&per_page=100"
        );
        if (!response.ok) {
          if (response.status === 404) throw new Error("GitHub user not found.");
          throw new Error("Failed to fetch repositories");
        }

        const data: Repo[] = await response.json();
        const portfolioRepos = data.filter((repo) =>
          repo.topics?.includes("portfolio")
        );

        const manualNames = new Set(
          MANUAL_PROJECTS.map((p) => p.name.toLowerCase())
        );
        const dedupedPortfolio = portfolioRepos.filter(
          (repo) => !manualNames.has(repo.name.toLowerCase())
        );

        const allRepos: Repo[] = [
          ...MANUAL_PROJECTS.map((p) => ({ ...p, topics: [...p.topics] })),
          ...dedupedPortfolio,
        ];

        setRepos(allRepos);
        setFilteredRepos(allRepos);
        setError(null);
      } catch (err: unknown) {
        console.error(err);
        setError(
          err instanceof Error ? err.message : "Unable to load projects at this time."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(
        repos.filter((repo) =>
          repo.topics?.some(
            (topic) => topic.toLowerCase() === activeCategory.toLowerCase()
          )
        )
      );
    }
  }, [activeCategory, repos]);

  useGSAP(
    () => {
      if (filteredRepos.length === 0) return;
      const reduced = prefersReducedMotion();

      gsap.from(".project-card-wrapper", {
        opacity: 0,
        y: reduced ? 0 : 24,
        stagger: reduced ? 0 : 0.06,
        duration: reduced ? 0.01 : 0.75,
        ease: "power3.out",
        force3D: true,
        clearProps: "all",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
        },
      });
    },
    { scope: container, dependencies: [filteredRepos] }
  );

  return (
    <SectionShell
      id="projects"
      label="Selected Work"
      title={
        <>
          Products & <span className="text-secondary">projects</span>
        </>
      }
      description="SaaS platforms, security tools, and full-stack apps — built solo and shipped to production."
      className="py-24 md:py-32"
    >
      <div ref={container}>
        <FeaturedProject />

        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-secondary">
            // github repositories
          </p>
          <div className="filter-bar" role="tablist" aria-label="Filter repositories">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "filter-chip",
                  activeCategory === category && "filter-chip-active"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="neu-inset flex min-h-[280px] flex-col items-center justify-center gap-4 text-secondary">
            <Loader2 className="h-7 w-7 animate-spin text-secondary" suppressHydrationWarning />
            <p className="font-mono text-xs tracking-widest">Syncing repositories...</p>
          </div>
        ) : error ? (
          <div className="neu-inset flex min-h-[280px] flex-col items-center justify-center gap-4 text-red-400">
            <p className="font-mono text-xs uppercase tracking-widest">{error}</p>
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="neu-inset flex min-h-[280px] flex-col items-center justify-center gap-4 text-secondary">
            <p className="font-mono text-xs uppercase tracking-widest">
              No projects in this category.
            </p>
          </div>
        ) : (
          <div className="projects-grid grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {filteredRepos.map((repo) => (
              <div key={repo.id} className="project-card-wrapper h-full">
                <ProjectCard
                  title={repo.name}
                  description={repo.description}
                  topics={repo.topics}
                  html_url={repo.html_url}
                  homepage={repo.homepage}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionShell>
  );
}
