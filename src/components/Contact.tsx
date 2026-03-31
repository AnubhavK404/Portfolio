"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-content > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="w-full bg-black px-4 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="contact-content flex flex-col items-center text-center">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Get in Touch
          </h2>
          
          <h3 className="mb-12 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            LET&apos;S <span className="text-secondary">CONNECT</span>
          </h3>
          
          <p className="mb-16 max-w-2xl text-xl text-secondary md:text-2xl">
            I&apos;m currently available for freelance projects and full-time opportunities. Have a project in mind? Let&apos;s build something extraordinary.
          </p>
          
          <div className="flex flex-col gap-6 mb-20">
            <a
              href="mailto:anubhavS8n666@outlook.com"
              className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-full bg-white px-12 py-6 text-xl font-bold text-black transition-transform hover:scale-105"
            >
              <Mail className="h-6 w-6" />
              anubhavS8n666@outlook.com
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
          
          <a
            href="https://github.com/AnubhavK404"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-secondary hover:text-white transition-colors flex items-center gap-2"
          >
            GitHub Profile <ArrowRight className="h-4 w-4" />
          </a>
          

          <div className="mt-32 w-full border-t border-white/5 pt-12 text-sm text-secondary/40">
            <p>© 2026 Premium Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
