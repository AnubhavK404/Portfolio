"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, ArrowRight, MapPin, Code2 } from "lucide-react";
import { NeuButton } from "@/components/ui/NeuButton";
import { prefersReducedMotion } from "@/lib/motion";
import { PROFILE } from "@/data/profile";
import { SectionShell } from "@/components/ui/SectionShell";

export function Contact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();

      gsap.from(".contact-block", {
        opacity: 0,
        y: reduced ? 0 : 24,
        stagger: reduced ? 0 : 0.08,
        duration: reduced ? 0.01 : 0.85,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <SectionShell
      id="contact"
      label="Contact"
      title={
        <>
          Let&apos;s build <span className="text-secondary">something great</span>
        </>
      }
      description="Open to freelance, SaaS collaborations, and full-time roles. Typical response within 24 hours."
      align="center"
      className="pb-24 pt-24 md:pb-32 md:pt-32"
    >
      <div ref={container} className="mx-auto max-w-2xl">
        <div className="contact-block neu-card mb-8 p-8 text-center sm:p-10">
          <p className="mb-6 flex items-center justify-center gap-2 text-sm text-secondary">
            <MapPin className="h-4 w-4" suppressHydrationWarning />
            {PROFILE.location}
          </p>

          <NeuButton
            href={`mailto:${PROFILE.email}`}
            variant="accent"
            size="lg"
            className="contact-block mb-6 w-full flex-wrap gap-3"
          >
            <Mail className="h-5 w-5 shrink-0" suppressHydrationWarning />
            <span className="break-all sm:break-normal">{PROFILE.email}</span>
            <ArrowRight className="h-4 w-4 shrink-0" suppressHydrationWarning />
          </NeuButton>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-badge contact-block inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-secondary transition-colors hover:text-foreground"
          >
            <Code2 className="h-4 w-4" suppressHydrationWarning />
            GitHub
          </a>
        </div>

        <footer className="contact-block text-center">
          <div className="section-divider relative left-auto mx-auto mb-8 translate-x-0" />
          <p className="text-xs text-secondary/50">
            © 2026 {PROFILE.name}. Crafted with Next.js & GSAP.
          </p>
        </footer>
      </div>
    </SectionShell>
  );
}
