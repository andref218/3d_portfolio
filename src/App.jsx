import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import NavBar from "./components/NavBar";
import AnimatedCounter from "./components/AnimatedCounter";
import Journey from "./sections/Journey";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import About from "./sections/About";
import PortfolioAI from "./sections/PortfolioAssistantAI";
import { wakeUpAPI } from "./lib/api";

function App() {
  useEffect(() => {
    wakeUpAPI();
  }, []);

  useGSAP(() => {
    // Ambient background movement
    gsap.to(".ambient-glow-1", {
      x: 80,
      y: 40,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".ambient-glow-2", {
      x: -60,
      y: 50,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".ambient-glow-3", {
      x: 40,
      y: -50,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Mouse-following glow
    const glow = document.querySelector(".cursor-glow");

    if (!glow) return;

    const moveX = gsap.quickTo(glow, "x", {
      duration: 0.1,
      ease: "power2.out",
    });

    const moveY = gsap.quickTo(glow, "y", {
      duration: 0.1,
      ease: "power2.out",
    });

    const handleMouseMove = (event) => {
      moveX(event.clientX);
      moveY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div className="relative min-h-screen">
      {/* Global ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Interactive grid */}
        <div className="interactive-grid absolute inset-0" />
        {/* Top left ambient glow */}
        <div className="ambient-glow-1 absolute -left-[15%] -top-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/[0.08] blur-[140px]" />

        {/* Right ambient glow */}
        <div className="ambient-glow-2 absolute -right-[15%] top-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />

        {/* Bottom ambient glow */}
        <div className="ambient-glow-3 absolute -bottom-[15%] left-[25%] h-[500px] w-[700px] rounded-full bg-blue-600/[0.04] blur-[150px]" />

        {/* Mouse glow */}
        <div className="cursor-glow fixed left-0 top-0 z-[5] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.15] blur-[110px]" />
      </div>

      {/* Portfolio content */}
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <AnimatedCounter />
        <About />
        <Showcase />
        <Journey />
        <TechStack />
        <PortfolioAI />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
