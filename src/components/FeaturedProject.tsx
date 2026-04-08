"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Zap } from "lucide-react";

export function FeaturedProject() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(container.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
    });

    // Pulsing glow effect for the buttons
    gsap.to(".featured-button", {
      boxShadow: "0 0 25px rgba(0, 0, 0, 0.6)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, { scope: container });

  return (
    <div ref={container} className="relative mb-20 grid gap-6 lg:grid-cols-2">
      {/* SpecterScan Card */}
      <div className="relative rounded-2xl border border-blue-500/20 bg-zinc-900/50 p-10 text-center overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.15),transparent_60%)]" />
        
        <div className="relative z-10 w-full">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Featured Security
          </h3>
          <h4 className="mb-6 text-4xl font-bold tracking-tight text-white uppercase">
            SpectreScan
          </h4>
          <p className="mx-auto max-w-2xl mb-10 text-base text-secondary/80">
            Advanced Cybersecurity Intelligence platform for real-time domain analysis, threat detection, and vulnerability scoring.
          </p>
          <a
            href="https://spectrescan-4sjn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-button group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white transition-transform hover:scale-105"
          >
            <Zap className="h-4 w-4" suppressHydrationWarning />
            Launch SpectreScan
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" suppressHydrationWarning />
          </a>
        </div>
      </div>

      {/* DataForge Card */}
      <div className="relative rounded-2xl border border-blue-500/20 bg-zinc-900/50 p-10 text-center overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.15),transparent_60%)]" />
        
        <div className="relative z-10 w-full">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Featured Technical
          </h3>
          <h4 className="mb-6 text-4xl font-bold tracking-tight text-white uppercase">
            DataForge
          </h4>
          <p className="mx-auto max-w-2xl mb-10 text-base text-secondary/80">
            High-performance data visualizer that transforms raw data into interactive dashboards and professional insights instantly.
          </p>
          <a
            href="https://data-forge-final-tpmf.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-button group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-transform hover:scale-105"
          >
            <Zap className="h-4 w-4 text-blue-400" suppressHydrationWarning />
            Launch DataForge
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" suppressHydrationWarning />
          </a>
        </div>
      </div>

      {/* Find My Game Card */}
      <div className="relative rounded-2xl border border-white/10 bg-zinc-900/30 p-8 text-center overflow-hidden flex flex-col items-center justify-center opacity-90 shadow-none">
        <div className="relative z-10 w-full">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-secondary">
            Featured Creative
          </h3>
          <h4 className="mb-6 text-4xl font-bold tracking-tight text-white uppercase">
            Find My Game
          </h4>
          <p className="mx-auto max-w-2xl mb-10 text-base text-secondary/70">
            A game discovery platform that helps users find and explore new games based on their mood.
          </p>
          <a
            href="https://find-my-game-b6bi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-button group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-secondary transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" suppressHydrationWarning />
            View Find My Game
          </a>
        </div>
      </div>
    </div>
  );
}
