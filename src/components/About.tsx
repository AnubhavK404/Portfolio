"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      const paragraphs = textRef.current.querySelectorAll("p");

      paragraphs.forEach((p) => {
        gsap.fromTo(
          p,
          {
            opacity: 0,
            y: 30,
            clipPath: "inset(0% 0% 100% 0%)",
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "power4.out",
            force3D: true,
            scrollTrigger: {
              trigger: p,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });

      // Subtle background parallax
      gsap.to(".about-bg-circle", {
        y: -100,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-[70vh] w-full flex-col items-center justify-center bg-black px-4 py-32 overflow-hidden"
    >
      <div className="about-bg-circle absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="about-bg-circle absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
      
      <div className="relative z-10 max-w-4xl text-center md:text-left">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
          Identity / Vision
        </h2>
        
        <div ref={textRef} className="space-y-12">
          <p className="text-3xl font-light leading-relaxed md:text-5xl lg:text-6xl">
            Hey, I'm <span className="text-white font-medium">Anubhav</span>. I build and break things to make the web more secure.
          </p>
          
          <p className="text-3xl font-light leading-relaxed md:text-5xl lg:text-6xl text-secondary">
            I'm a developer with a deep focus on <span className="text-white">cybersecurity</span>, turning complex technical challenges into clean, high-performance tools.
          </p>
          
          <p className="text-xl text-secondary md:text-2xl lg:max-w-2xl">
            From web application pentesting to building scalable architecture, I'm passionate about creating software that is secure by design and easy to trust.
          </p>
        </div>
      </div>
    </section>
  );
}
