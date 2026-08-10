import TitleHeader from "../components/TitleHeader";
import Chat from "../components/Chat/Chat";
import AuroraBackground from "../components/Backgrounds/AuroraBackground";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const PortfolioAI = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#portfolio-ai",
        start: "top center",
      },
    });

    timeline
      .from(".portfolio-ai-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        ".portfolio-ai-chat",
        {
          x: -80,
          opacity: 0,
          scale: 0.98,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.3",
      );
  });
  return (
    <section
      id="portfolio-ai"
      className="relative flex-center section-padding mb-18 scroll-mt-35 overflow-hidden portfolio-ai-title"
    >
      <AuroraBackground />

      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          sub="🧠 Powered by Retrieval-Augmented Generation"
          title="Chat with My AI Assistant"
        />

        <div className="mt-5 flex justify-center portfolio-ai-chat">
          <Chat />
        </div>
      </div>
    </section>
  );
};

export default PortfolioAI;
