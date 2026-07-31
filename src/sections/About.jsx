import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        </div>
      </div>
    </section>
  );
};

export default About;
