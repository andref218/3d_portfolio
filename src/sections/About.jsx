import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { getAsset } from "../utils/paths";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  useGSAP(() => {
    gsap.from(".about-text", {
      opacity: 0,
      rotationX: 15,
      y: 20,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
      },
    });
  }, []);
  return (
    <section
      id="about"
      ref={aboutRef}
      className="w-full mb-10 section-padding xl:px-0 scroll-mt-25"
    >
      <div className="w-full h-full md:px-20 px-5 flex flex-col items-center">
        <div className="font-semibold md:text-5xl text-3xl text-center">
          About me 👨🏻‍💻
        </div>

        {/* Content */}
        <div className="max-w-4xl mt-10 flex flex-col gap-6 text-center ">
          <p className="about-text text-lg text-white-50 leading-relaxed">
            Hi, I’m <span className="text-white font-semibold">André</span>, a
            Full Stack and AI Developer with a strong interest in Artificial
            Intelligence, Large Language Models (LLMs), and modern web
            development.
          </p>

          <p className="about-text text-lg text-white-50 leading-relaxed">
            I enjoy building intelligent applications that combine intuitive
            user experiences with AI capabilities. My experience includes
            developing full-stack web applications, fine-tuning language models
            with QLoRA, and working with technologies such as
            Retrieval-Augmented Generation (RAG), Next.js, React and Node.js.
          </p>

          <p className="about-text text-lg text-white-50 leading-relaxed">
            Outside of coding, I’m always learning, exploring new tools, and
            looking for ways to improve both my technical skills and the overall
            quality of my work.
          </p>

          <p className="about-text mt-4 text-white-50 text-center text-lg font-bold">
            All of my projects are available at:
          </p>

          <div className="about-text mt-2 flex justify-center z-50">
            <div className="group relative inline-block">
              <a
                href="https://github.com/andref218"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 text-lg hover:text-blue-300 underline underline-offset-4 transition-colors"
              >
                <FaGithub size={22} />
                github.com/andref218
              </a>

              <div
                className="pointer-events-none absolute left-1/2 top-full z-[9999] mt-5 -translate-x-1/2 translate-y-2 opacity-0
                scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
              >
                <div className="w-[700px] overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1a1a] px-4 py-3">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />

                    <div className="ml-4 flex-1 rounded-full bg-black/30 px-4 py-1 text-center text-xs text-gray-400">
                      github.com/andref218
                    </div>
                  </div>

                  {/* Github Profile Preview */}
                  <img
                    src={getAsset("/images/github_profile_preview.png")}
                    alt="GitHub Preview"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
