"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion";
import { PROFILE } from "@/data/profile";
import { SectionShell } from "@/components/ui/SectionShell";

export function About() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;
      const reduced = prefersReducedMotion();

      gsap.from(".about-block", {
        opacity: 0,
        y: reduced ? 0 : 28,
        stagger: reduced ? 0 : 0.12,
        duration: reduced ? 0.01 : 0.9,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: container }
  );

  return (
    <SectionShell
      id="about"
      label="About"
      title={
        <>
          Design-led builder.{" "}
          <span className="text-secondary">Ships products end to end.</span>
        </>
      }
      className="py-24 md:py-32"
    >
      <div ref={container}>
        <div ref={textRef} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="about-block space-y-6">
            <p className="text-lg leading-relaxed text-secondary md:text-xl">
              Hey, I&apos;m{" "}
              <span className="font-semibold text-foreground">{PROFILE.firstName}</span>{" "}
              — a {PROFILE.title.toLowerCase()} who turns ideas into polished,
              production-ready experiences.
            </p>
            <p className="text-lg leading-relaxed text-secondary md:text-xl">
              From Figma mockups to Shopify storefronts and Next.js SaaS apps, I
              own the full cycle:{" "}
              <span className="text-foreground">design → build → launch → grow</span>.
            </p>
          </div>

          <div className="about-block neu-inset p-6 md:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-secondary">
              // summary
            </p>
            <p className="text-sm leading-relaxed text-secondary md:text-base">
              {PROFILE.summary}
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
