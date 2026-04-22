"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ProjectCard } from "./ProjectCard";
import { FeaturedProject } from "./FeaturedProject";
import { Terminal, Filter, Loader2 } from "lucide-react";
import clsx from "clsx";

interface Repo {
  id: number;
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage?: string;
}

const CATEGORIES = ["All", "Security", "OSINT", "Technical"];

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
        // Fetch all repos for user AnubhavK404
        const response = await fetch("https://api.github.com/users/AnubhavK404/repos?sort=updated&per_page=100");
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("GitHub user not found.");
          }
          throw new Error("Failed to fetch repositories");
        }
        
        const data: Repo[] = await response.json();
        
        // Filter by the topic "portfolio" as requested
        const portfolioRepos = data.filter((repo) => 
          repo.topics?.includes("portfolio")
        );

        // Manually push DataForge into the dynamic list
        const dataForgeRepo: Repo = {
          id: 999999, // Unique ID
          name: "DataForge",
          description: "High-performance data visualizer that transforms raw data into interactive dashboards and professional insights instantly.",
          topics: ["data-visualization", "technical", "portfolio"],
          html_url: "https://github.com/AnubhavK404", // Pointing to profile as it's a deployed project
          homepage: "https://data-forge-final-tpmf.vercel.app/"
        };

        // Manually push SpecterScan into the dynamic list
        const specterScanRepo: Repo = {
          id: 999998, // Unique ID
          name: "SpectreScan",
          description: "Advanced Cybersecurity Intelligence platform for real-time domain analysis, threat detection, and vulnerability scoring.",
          topics: ["security", "cybersecurity", "osint", "technical", "portfolio"],
          html_url: "https://github.com/AnubhavK404", // Pointing to profile as it's a deployed project
          homepage: "https://spectrescan-4sjn.vercel.app/"
        };

        // Manually push Find My Game into the dynamic list
        const findMyGameRepo: Repo = {
          id: 999997, // Unique ID
          name: "Find My Game",
          description: "A game discovery platform that helps users find and explore new games based on their preferences.",
          topics: ["technical", "UI & UX Design", "Creative"],
          html_url: "https://github.com/AnubhavK404", // Pointing to profile as it's a deployed project
          homepage: "https://find-my-game-b6bi.vercel.app/"
        };
        
        const allRepos = [specterScanRepo, findMyGameRepo, dataForgeRepo, ...portfolioRepos];
        
        setRepos(allRepos);
        setFilteredRepos(allRepos);
        setError(null);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Unable to load projects at this time.");
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
      setFilteredRepos(repos.filter((repo) => 
        repo.topics?.some(topic => topic.toLowerCase() === activeCategory.toLowerCase())
      ));
    }
  }, [activeCategory, repos]);

  useGSAP(
    () => {
      if (filteredRepos.length > 0) {
        gsap.from(".project-card-wrapper", {
          opacity: 0,
          y: 40,
          scale: 0.9,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          force3D: true,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
          },
        });
      }
    },
    { scope: container, dependencies: [filteredRepos] }
  );

  return (
    <section
      ref={container}
      className="w-full bg-black px-4 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <FeaturedProject />

        <div className="mb-20 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
              Dynamic Repositories
            </h2>
            <h3 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl uppercase">
              SELECTED <span className="text-blue-500">WORKS</span>
            </h3>
            <p className="text-secondary/80">
              Fetched directly from GitHub. These projects represent my focus on <span className="text-white">Cybersecurity</span>, <span className="text-white">Web Development</span>, and <span className="text-white">OSINT</span>.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-3 md:mt-0">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all",
                  activeCategory === category
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-white/5 text-secondary hover:bg-white/10"
                )}
              >
                {category === "All" ? <Terminal className="h-3 w-3" suppressHydrationWarning /> : <Filter className="h-3 w-3" suppressHydrationWarning />}
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-secondary">
            <Loader2 className="h-10 w-10 animate-spin text-blue-500" suppressHydrationWarning />
            <p className="font-mono text-sm tracking-widest">INITIALIZING REPOSITORY SYNC...</p>
          </div>
        ) : error ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-red-400">
            <p className="font-mono text-sm uppercase tracking-widest">{error}</p>
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-secondary">
            <p className="font-mono text-sm uppercase tracking-widest">NO PROJECTS FOUND IN THIS CATEGORY.</p>
          </div>
        ) : (
          <div className="projects-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}

