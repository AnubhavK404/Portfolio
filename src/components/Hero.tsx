"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";
import { prefersReducedMotion } from "@/lib/motion";
import { PROFILE } from "@/data/profile";

const STATS = [
  { value: "4+", label: "Years building" },
  { value: "300+", label: "SaaS users" },
  { value: "50+", label: "Sites shipped" },
];

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      const duration = reduced ? 0.01 : 1;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration, force3D: true },
      });

      tl.from(".hero-badge", { y: reduced ? 0 : 12, opacity: 0 })
        .from(
          ".hero-word",
          {
            y: reduced ? 0 : "100%",
            opacity: 0,
            stagger: reduced ? 0 : 0.06,
          },
          "-=0.55"
        )
        .from(".hero-role", { y: reduced ? 0 : 16, opacity: 0 }, "-=0.65")
        .from(subTextRef.current, { y: reduced ? 0 : 12, opacity: 0 }, "-=0.55")
        .from(statsRef.current, { y: reduced ? 0 : 16, opacity: 0 }, "-=0.45")
        .from(ctaRef.current, { y: reduced ? 0 : 12, opacity: 0 }, "-=0.4");
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 pb-24 pt-28 sm:px-6"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="hero-badge section-label mb-8">
          Available for freelance & full-time
        </p>

        <h1 className="hero-title mb-6 text-[clamp(2.75rem,8vw,5.75rem)] font-semibold leading-[0.92] tracking-tight">
          <span className="inline-block overflow-hidden">
            <span className="hero-word inline-block text-foreground">
              {PROFILE.firstName}
            </span>
          </span>{" "}
          <span className="inline-block overflow-hidden">
            <span className="hero-word inline-block text-secondary">
              {PROFILE.lastName}
            </span>
          </span>
        </h1>

        <p className="hero-role mb-3 max-w-xl text-lg text-foreground sm:text-xl md:text-2xl">
          Full Stack Developer & SaaS Founder
        </p>

        <p
          ref={subTextRef}
          className="mb-10 max-w-md text-sm leading-relaxed text-secondary sm:text-base"
        >
          {PROFILE.tagline}
          <span className="mx-2 text-secondary">·</span>
          {PROFILE.location}
        </p>

        <div
          ref={statsRef}
          className="mb-10 grid w-full max-w-lg grid-cols-3 gap-3"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="stat-card neu-inset-sm px-2 py-4 sm:px-4 sm:py-5"
            >
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <NeuButton href="#projects" variant="accent" size="md" className="w-full sm:w-auto">
            View work
            <ArrowRight className="h-4 w-4" suppressHydrationWarning />
          </NeuButton>
          <NeuButton href="#contact" variant="ghost" size="md" className="w-full sm:w-auto">
            Hire me
          </NeuButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="neu-scroll-indicator flex h-11 w-6 items-start justify-center p-1.5">
          <div className="scroll-dot h-1.5 w-1 rounded-full bg-foreground/50" />
        </div>
      </div>
    </section>
  );
}
