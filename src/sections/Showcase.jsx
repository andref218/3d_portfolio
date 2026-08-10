import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getAsset } from "../utils/paths";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase scroll-mt-5">
      <div className="w-full xl:mb-10">
        <TitleHeader
          title="Featured Projects"
          sub="🚀 A selection of things I've built"
        />

        <div className="showcaselayout mt-15">
          {/* PROJECT 1 - Vynilz*/}
          <div className="project-card" ref={project1Ref}>
            <div className="project-image">
              <a
                href="https://www.vynilz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:opacity-70 transition-opacity duration-300"
              >
                <img
                  src={getAsset("/images/vynilz_collection.png")}
                  alt="Vynilz"
                ></img>
              </a>
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://github.com/andref218/vynilz-showcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-70 transition-opacity duration-300"
                >
                  Vynilz – Build, Track & Showcase Your Vinyl Collection.
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack web application that helps vinyl collectors build,
                organize, and showcase their collections online, featuring
                public profiles, achievements and much more.
              </p>
              <div
                className="mt-4 w-fit rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200 backdrop-blur-sm transition-all 
            duration-300 hover:border-blue-400/30 hover:bg-blue-500/15"
              >
                Next.js • MongoDB • Tailwind CSS • Discogs API • Google Auth
              </div>
            </div>
          </div>

          {/* PROJECT 2 - RAG Studio */}
          <div className="project-card" ref={project2Ref}>
            <div className="project-image">
              <a
                href="https://github.com/andref218/rag_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:opacity-70 transition-opacity duration-300"
              >
                <img
                  src={getAsset("/images/rag_studio_home_page.png")}
                  alt="MERN User Management"
                />
              </a>
            </div>
            <h2>
              <a
                href="https://github.com/andref218/rag_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:opacity-70 transition-opacity duration-300"
              >
                RAG Studio - AI assistant powered by your own documents.
              </a>
            </h2>
            <p className="text-white-50 md:text-xl mt-2">
              A Retrieval-Augmented Generation (RAG) application that retrieves
              relevant information from custom documents to generate accurate,
              context-aware responses using a local LLM.
            </p>
            <div
              className="mt-4 w-fit rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200 backdrop-blur-sm transition-all 
            duration-300 hover:border-blue-400/30 hover:bg-blue-500/15"
            >
              Python • LangChain • Ollama • ChromaDB • Gradio
            </div>
          </div>
          {/* PROJECT 3 - Job Application Tracker*/}
          <div className="project-card" ref={project3Ref}>
            <div className="project-image">
              <a
                href="https://job-application-tracker-azure-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src={getAsset("/images/jobApplicationTrackerHomePage.png")}
                  alt="Job Application Tracker"
                ></img>
              </a>
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://github.com/andref218/job_application_tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  YourJobs - Organize and Track Your Job Applications
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack app to track job applications, manage companies and
                positions, built with Next.js, React.js, and Tailwind CSS.
              </p>
            </div>
            <div
              className="mt-4 w-fit rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200 backdrop-blur-sm transition-all 
            duration-300 hover:border-blue-400/30 hover:bg-blue-500/15"
            >
              Next.js • MongoDB • TypeScript • Tailwind CSS • BetterAuth
            </div>
          </div>
          {/* PROJECT 4 - Llama 3.2 Customer Support Fine-Tuning*/}
          <div className="project-card" ref={project4Ref}>
            <div className="project-image">
              <a
                href="https://huggingface.co/andref218/llama3.2-customer-support-qlora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src={getAsset(
                    "/images/llama3_2_customer_support_qlora_hugging_face.png",
                  )}
                  alt="MERN User Management"
                />
              </a>
            </div>
            <h2>
              <a
                href="https://github.com/andref218/llama3.2-customer-support-qlora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
              >
                Llama 3.2 Customer Support Fine-Tuning
              </a>
            </h2>
            <p className="text-white-50 md:text-xl  mt-2">
              Fine-tuned the Meta Llama 3.2 Instruct model for customer support
              using QLoRA and PEFT, publishing the trained LoRA adapter on the
              Hugging Face Hub.
            </p>
            <div
              className="mt-4 w-fit rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200 backdrop-blur-sm transition-all 
            duration-300 hover:border-blue-400/30 hover:bg-blue-500/15"
            >
              Python • Transformers • TRL • PEFT • QLoRA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
