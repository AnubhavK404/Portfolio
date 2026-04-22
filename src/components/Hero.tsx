"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 2, force3D: true } });

      tl.from(".hero-title span", {
        y: "110%",
        skewY: 10,
        stagger: 0.1,
        opacity: 0,
      })
        .from(
          subTextRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1.5,
          },
          "-=1.5"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1.5,
          },
          "-=1.2"
        );

      // Float animation for subtext
      gsap.to(subTextRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Mouse Parallax for background
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 50;
        const yPos = (clientY / window.innerHeight - 0.5) * 50;

        gsap.to(bgRef.current, {
          x: xPos,
          y: yPos,
          duration: 1.5,
          ease: "power2.out",
          force3D: true
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" 
      />
      
      <div className="z-10 flex flex-col items-center text-center">
        <h1
          ref={textRef}
          className="hero-title mb-6 text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="inline-block text-white">ANUBHAV</span>{" "}
          <span className="inline-block text-secondary">KUMAR</span>
        </h1>
        
        <p
          ref={subTextRef}
          className="mb-10 max-w-2xl text-lg text-secondary md:text-xl uppercase tracking-widest"
        >
          Cybersecurity • Web Dev • Web Design • Automation
        </p>
        
        <div ref={ctaRef} className="flex gap-4">
          <a 
            href="#projects"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-black transition-transform hover:scale-105"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" suppressHydrationWarning />
          </a>
          <a 
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="h-12 w-6 rounded-full border border-white/20 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/40 mx-auto mt-1" />
        </div>
      </div>
    </section>
  );
}
